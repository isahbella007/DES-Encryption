import React, { useEffect } from "react";
import Navbar from "../../Header/Navbar/navbar";
import useAdvisor from "../../Hooks/useAdvisor";
import './advisor.css'
const Advisor = () => {
  const { getAdvisorStudents, getStudents, getStudentsLastName } = useAdvisor();

  useEffect(() => {
    getAdvisorStudents();
  }, []);
  return (
    <>
      <Navbar />
      <h3>Your Student(s) are: </h3>
      <br></br>
      {getStudents.map((students)=> (
          <p key={students.id}>{students.name} {students.lastname}</p>
      ))}
    </>
  );
};
export default Advisor;
