const express = require("express");
const student = express.Router();
const db_connection = require("../config/connection");
const {desDecrypt} = require("../des.js");

student.get("/:student_id", (req, res) => {
  const student_id = req.params.student_id;
  db_connection.query(
    "SELECT * FROM advisors_student where student_id = ?",
    [student_id],
    (error, row) => {
      if (error) {
        console.log(error);
      }
      if (row.length>0) {
          console.log(row)
          const students_advisor = row[0].advisor_id
          console.log(students_advisor)
        db_connection.query(
          "SELECT * FROM users WHERE id = ?",
          [students_advisor],
          (err, advisorDetails) => {
            if (err) {
              console.log(err);
            }
            if (advisorDetails) {
              const names = advisorDetails.map((x) => {
                return {
                  name: desDecrypt(x.name, process.env.ENC_SECRET),
                  lastname: desDecrypt(x.lastname, process.env.ENC_SECRET )
                };
              });
              res.send(names);
            }
          }
        );
      }else{ 
          console.log("Invalid student id")
      }
    }
  );
});

module.exports = student;
