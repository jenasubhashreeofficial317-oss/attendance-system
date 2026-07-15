import React, { useState } from "react";

import { FaCheck, FaTimes, FaSearch } from "react-icons/fa";

import "../styles/StudentTable.css";


function StudentTable({

  students,

  setStudents,

  onSubmit,

  onNotHeld

}) {


  const [search, setSearch] = useState("");

  const [submitted, setSubmitted] = useState(false);





  const toggleAttendance = (id) => {


    const updatedStudents = students.map((student)=>{


      if(student.id === id){


        return {

          ...student,

          present: !student.present

        };


      }


      return student;


    });



    setStudents(updatedStudents);


  };







  const handleSubmit = () => {


    if(submitted){

      return;

    }


    setSubmitted(true);


    onSubmit();


  };






  const filteredStudents = students.filter((student)=>


    student.name

    .toLowerCase()

    .includes(search.toLowerCase())


    ||

    student.roll

    .toLowerCase()

    .includes(search.toLowerCase())


  );







  return (


    <div className="student-table-card">





      <div className="table-top">



        <h3>
          Student Attendance
        </h3>




        <div className="search-box">


          <FaSearch />


          <input

            type="text"

            placeholder="Search Student"

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

          />


        </div>



      </div>







      {

        filteredStudents.length === 0 ?


        (

          <div className="no-student">

            No students found

          </div>

        )


        :



        (

          <div className="table-wrapper">


            <table>


              <thead>

                <tr>

                  <th>
                    Roll No
                  </th>


                  <th>
                    Student Name
                  </th>


                  <th>
                    Status
                  </th>


                </tr>

              </thead>





              <tbody>


              {

                filteredStudents.map((student)=>(


                  <tr key={student.id}>


                    <td>

                      {student.roll}

                    </td>



                    <td>

                      {student.name}

                    </td>




                    <td>


                      <button


                        className={

                          student.present

                          ?

                          "status-btn present"

                          :

                          "status-btn absent"

                        }



                        onClick={()=>toggleAttendance(student.id)}



                      >



                        {

                          student.present ?


                          <>

                            <FaCheck />

                            Present

                          </>


                          :


                          <>


                            <FaTimes />

                            Absent


                          </>


                        }



                      </button>


                    </td>



                  </tr>



                ))

              }



              </tbody>



            </table>


          </div>


        )


      }








      <div className="attendance-actions">



        <button

          className="not-held-btn"

          onClick={onNotHeld}

        >

          Not Held

        </button>





        <button

          className="submit-btn"

          onClick={handleSubmit}

          disabled={submitted}

        >


          {

            submitted

            ?

            "Submitted"

            :

            "Submit Attendance"

          }



        </button>




      </div>






    </div>


  );

}



export default StudentTable;