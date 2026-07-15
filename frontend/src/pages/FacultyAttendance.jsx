import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AttendanceHeader from "../components/AttendanceHeader";
import StudentTable from "../components/StudentTable";

import { supabase } from "../lib/supabase";

import "../styles/FacultyAttendance.css";


function FacultyAttendance() {


  const [students, setStudents] = useState([]);

  const [showTable, setShowTable] = useState(false);

  const [attendanceInfo, setAttendanceInfo] = useState(null);

  const [message, setMessage] = useState("");




  // Load Students from Supabase

  const handleLoadStudents = async (data) => {


    setAttendanceInfo(data);



    const { course, section } = data;



    const { data: studentData, error } = await supabase

      .from("students")

      .select("*")

      .eq("course", course)

      .eq("section", section);




    if (error) {


      console.log("Attendance Error:", error);

      setMessage("error . message");

      return;

    }





    const formattedStudents = studentData.map((student)=>({


      id: student.id,

      roll: student.roll,

      name: student.name,

      present: true


    }));



    setStudents(formattedStudents);


    setShowTable(true);


    setMessage("");



  };







  // Save Attendance

  const handleSubmitAttendance = async () => {


    if(!attendanceInfo){

      return;

    }



    const attendanceRecords = students.map((student)=>({



      student_id: student.id,


      attendance_date: attendanceInfo.date,


      attendance_time: attendanceInfo.time,


      course: attendanceInfo.course,


      subject: attendanceInfo.subject,


      section: attendanceInfo.section,


      status: student.present ? "Present" : "Absent"



    }));





    const { error } = await supabase

      .from("attendance")

      .insert(attendanceRecords);





    if(error){


      console.log("Attendance Error:", error);

      setMessage("error. message");


      return;

    }




    setMessage("Attendance submitted successfully ✅");


  };







  // Not Held

  const handleNotHeld = () => {


    setShowTable(false);


    setMessage("Class marked as Not Held");


  };







  return (


    <div className="attendance-layout">



      <Sidebar />



      <div className="attendance-main">



        <Header />



        <div className="attendance-content">



          <div className="page-title">


            <h2>
              Mark Attendance
            </h2>


            <p>
              Manage daily student attendance
            </p>


          </div>





          <AttendanceHeader

            onLoadStudents={handleLoadStudents}

          />





          {

            showTable &&


            <StudentTable

              students={students}

              setStudents={setStudents}

              onSubmit={handleSubmitAttendance}

              onNotHeld={handleNotHeld}

            />


          }






          {

            message &&

            <div className="attendance-message">

              {message}

            </div>


          }



        </div>


      </div>


    </div>


  );

}



export default FacultyAttendance;