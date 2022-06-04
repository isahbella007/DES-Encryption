import React, { useState } from "react";
import axios from "axios";

const useRegistrar = () => {
  const url = process.env.REACT_APP_REGISTRAR_URL;
  const [advisors, setAdvisors] = useState([]);
  const [students, setStudents] = useState([]);
  const getAdvsiors = async () => {
    await axios
      .get(url)
      .then((response) => {
        setAdvisors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getStudents = async () => {
    await axios
      .get(`${url}getstudent`)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const assignAdvisor = async (advisor_id, student_id) => {
    if(advisor_id == '' || student_id == "")
    return alert("Select an option")
    console.log(`passed from the regdesign: ${advisor_id} and ${student_id}`);
    await axios
      .post(`${url}assign`, {
        advisor_id: advisor_id,
        student_id: student_id,
      })
      .then((response) => {
        if(response){
          alert("Student has been assigned to the advisor");
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return {
    advisors,
    getAdvsiors,
    students,
    getStudents,
    assignAdvisor,
  };
};

export default useRegistrar;
