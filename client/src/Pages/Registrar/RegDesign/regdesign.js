import React, { useEffect, useState } from "react";
import useRegistrar from "../../../Hooks/useRegistrar";
import "./regdesign.css";
const RegDesign = () => {
  const { advisors, getAdvsiors, students, getStudents, assignAdvisor } =
    useRegistrar();

  const [selectedAdvisor, setAdvisor] = useState();
  const [selectedStudent, setStudents] = useState([]);

  const assignAdvisorbutton = () => {
    console.log(selectedAdvisor);
    console.log(selectedStudent);
    if (selectedAdvisor == "" || selectStudents.length < 0) {
      alert("Select an option");
    }else{
      assignAdvisor(selectedAdvisor, selectedStudent);
    }
    
    
  };

  const selectStudents = (id) => {
    if (selectedStudent.includes(id)) {
      const index = selectedStudent.indexOf(id);
      selectedStudent.splice(index, 1);
    } else {
      selectedStudent.push(id);
    }
    setStudents(selectedStudent);
    console.log(selectedStudent);
  };

  useEffect(() => {
    getAdvsiors();
    getStudents();
  }, []);
  return (
    <div className="row" id="detailsDiv">
      <div className="column">
        <fieldset>
          <h3>ADVISORS</h3>

          <table style={{ width: "100%" }}>
            <tbody>
              {advisors?.map((advsior) => (
                <tr key={advsior.id}>
                  <td style={{ width: "20%" }}>
                    <input
                      type="radio"
                      name="advisors"
                      value={advsior.id}
                      onChange={(e) => setAdvisor(e.target.value)}
                    ></input>
                  </td>
                  <td style={{ width: "80%" }}>
                    {advsior.name} {advsior.lastname}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </fieldset>
      </div>
      <div className="column">
        <fieldset>
          <h3>STUDENTS</h3>

          <table id="authors" style={{ width: "100%" }}>
            <tbody>
              {students?.map((student) => (
                <tr key={student.id}>
                  <td style={{ width: "20%" }}>
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="students"
                      value={student.id}
                      onClick={(e) => selectStudents(e.target.value)}
                    ></input>
                  </td>
                  <td style={{ width: "80%" }}>
                    {student.name} {student.lastname}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </fieldset>
      </div>
      <div style={{ padding: "10px" }}>
        <input type="button" value="Confirm" onClick={assignAdvisorbutton} />
      </div>
      <div style={{ padding: "10px" }}></div>
    </div>
  );
};
export default RegDesign;
