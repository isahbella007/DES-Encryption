const express = require("express");
const { desDecrypt } = require("../des.js");
const db_connection = require("../config/connection.js");
const registrar = express.Router();
let obj;

registrar.get("/", (req, res) => {
  db_connection.query(
    "SELECT * FROM users WHERE role = 'ADVISOR'",
    (error, rows) => {
      if (error) {
        console.log(error);
      }
      if (rows) {
        const names = rows.map((x) => {
          return {
            ...x,
            name: desDecrypt(x.name, process.env.ENC_SECRET),
            lastname: desDecrypt(x.lastname, process.env.ENC_SECRET),
          };
        });
        res.send(names);
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
        const names = rows.map((x) => {
          return {
            ...x,
            name: desDecrypt(x.name, process.env.ENC_SECRET),
            lastname: desDecrypt(x.lastname, process.env.ENC_SECRET),
          };
        });
        res.send(names);
      }
    }
  );
});

registrar.post("/assign", (req, res) => {
  const advisor_id = req.body.advisor_id;
  const student_id = req.body.student_id;
  for (let i = 0; i < student_id.length; i++) {
    db_connection.query(
      "INSERT INTO advisors_student (advisor_id, student_id) VALUES (?,?) ",
      [advisor_id, student_id[i]],
      (error, row) => {
        if (error) {
          console.log(error);
        }
        if (row) {
          res.send(row)
          console.log(row);
        }
      }
    );
  }
  //   sign the ids with sha 512 and store DES encrypted
});
module.exports = registrar;
