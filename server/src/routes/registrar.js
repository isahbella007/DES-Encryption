const express = require("express");
const db_connection = require("../config/connection.js");
const registrar = express.Router();

registrar.get("/", (req, res) => {
  db_connection.query(
    "SELECT * FROM users WHERE role = 'ADVISOR'",
    (error, rows) => {
      if (error) {
        console.log(error);
      }
      if (rows) {
        res.send(rows);
      }
    }
  );
});

registrar.get("/getstudent", (req, res) => {
  db_connection.query(
    "select * from users where users.id NOT IN (SELECT advisors_student.student_id from advisors_student) AND users.role = 'STUDENT'",
    (error, rows) => {
      if (error) {
        console.log(error);
      }
      if (rows) {
        res.send(rows);
      }
    }
  );
});

registrar.post("/assign", (req, res) => {
  const advisor_id = req.body.advisor_id;
  const student_id = req.body.student_id;

//   sign the ids with sha 512 and store DES encrypted.

  db_connection.query(
    "INSERT INTO advisors_student (advisor_id, student_id) VALUES (?,?) ",
    [advisor_id, student_id],
    (error, row) => {
      if (error) {
        console.log(error);
      }
      if (row) {
        console.log(row);
        res.send("Advisor assigned to student")
      }
    }
  );
});
module.exports = registrar;
