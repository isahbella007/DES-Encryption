import React, { useState } from "react";
import axios from "axios";

const useAdvisor = () => {
  const url = process.env.REACT_APP_BASE_URL;
  const id = localStorage.getItem("id");
  const [getStudents, setAdvisorStudent] = useState([]);
  const getAdvisorStudents = async () => {
    await axios
      .get(`${url}/advisor/${id}`)
      .then((response) => {
          console.log(response.data.length)  
        setAdvisorStudent(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  return {
    getAdvisorStudents,
    getStudents,
  };
};
export default useAdvisor;
