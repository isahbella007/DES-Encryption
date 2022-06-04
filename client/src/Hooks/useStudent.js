import React, { useState } from "react";
import axios from "axios";

const useStudent = () => {
  const url = process.env.REACT_APP_BASE_URL;
  const id = localStorage.getItem("id");
  const [getStdAdvisor, setStudentAdvisor] = useState();
  const [getStdAdvisorLastName, setStudentAdvisorLastName] = useState();
  const getStudentAdvisor = async () => {
    await axios
      .get(`${url}/student/${id}`)
      .then((response) => {
        setStudentAdvisor(response.data[0].name);
        setStudentAdvisorLastName(response.data[0].lastname)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return {
    getStudentAdvisor,
    getStdAdvisor,
    getStdAdvisorLastName
  };
};
export default useStudent;
