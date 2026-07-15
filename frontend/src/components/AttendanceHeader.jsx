import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaBook, FaUsers } from "react-icons/fa";

import { courseData } from "../data/courseData";

import "../styles/AttendanceHeader.css";

function AttendanceHeader({ onLoadStudents }) {


  const [formData, setFormData] = useState({

    date: "",
    time: "",
    course: "",
    subject: "",
    section: ""

  });



  const [subjects, setSubjects] = useState([]);



  const handleChange = (e) => {


    const { name, value } = e.target;



    setFormData({

      ...formData,

      [name]: value

    });



    if (name === "course") {


      const selectedCourse = courseData.find(

        (item) => item.course === value

      );


      if (selectedCourse) {

        setSubjects(selectedCourse.subjects);

      } 
      else {

        setSubjects([]);

      }



      setFormData({

        ...formData,

        course: value,

        subject: "",

        section: ""

      });

    }


  };




  const handleLoad = () => {


    if (

      !formData.date ||

      !formData.time ||

      !formData.course ||

      !formData.subject ||

      !formData.section

    ) {

      alert("Please select all fields");

      return;

    }



    onLoadStudents(formData);


  };




  return (

    <div className="attendance-header-card">



      <div className="field-box">

        <label>

          <FaCalendarAlt />

          Date

        </label>


        <input

          type="date"

          name="date"

          value={formData.date}

          onChange={handleChange}

        />

      </div>





      <div className="field-box">


        <label>

          <FaClock />

          Time

        </label>


        <input

          type="time"

          name="time"

          value={formData.time}

          onChange={handleChange}

        />


      </div>





      <div className="field-box">


        <label>

          <FaBook />

          Course

        </label>


        <select

          name="course"

          value={formData.course}

          onChange={handleChange}

        >

          <option value="">

            Select Course

          </option>


          {

            courseData.map((item,index)=>(

              <option

                key={index}

                value={item.course}

              >

                {item.course}

              </option>

            ))

          }


        </select>


      </div>





      <div className="field-box">


        <label>

          <FaBook />

          Subject

        </label>



        <select

          name="subject"

          value={formData.subject}

          onChange={handleChange}

          disabled={!formData.course}

        >


          <option value="">

            Select Subject

          </option>


          {

            subjects.map((subject,index)=>(

              <option

                key={index}

                value={subject}

              >

                {subject}

              </option>

            ))

          }


        </select>


      </div>





      <div className="field-box">


        <label>

          <FaUsers />

          Section

        </label>



        <select

          name="section"

          value={formData.section}

          onChange={handleChange}

        >


          <option value="">

            Select Section

          </option>



          {

            formData.course &&

            courseData

            .find(

              item=>item.course===formData.course

            )

            ?.sections

            .map((section,index)=>(

              <option

                key={index}

                value={section}

              >

                {section}

              </option>

            ))

          }


        </select>


      </div>





      <button

        className="load-btn"

        onClick={handleLoad}

      >

        Load Students

      </button>



    </div>

  );

}



export default AttendanceHeader;