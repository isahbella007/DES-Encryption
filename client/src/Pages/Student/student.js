import React, { useEffect, useState } from "react";
import Navbar from "../../Header/Navbar/navbar";
import axios from "axios";
import useStudent from "../../Hooks/useStudent";
const Student = () => {
  const { getStudentAdvisor, getStdAdvisor, getStdAdvisorLastName } = useStudent();
  useEffect(() => {
    getStudentAdvisor();
  }, []);
  return (
    <>
      <Navbar />
      <br></br>
      <p style={{'text-align': "center"}}> Your advisor is: <strong>{getStdAdvisor} {getStdAdvisorLastName}</strong></p>
    </>
  );
};
export default Student;
