const express = require("express");
const { desDecrypt } = require("../des");
const db_connection = require("../config/connection");

const advisor = express.Router();

advisor.get("/:advisor_id", (req, res) => {
  const advisor_id = req.params.advisor_id;
  db_connection.query(
    "SELECT * FROM users, advisors_student WHERE advisors_student.advisor_id = ? AND advisors_student.student_id = users.id",
    [advisor_id],
    (err, row) => {
      if (err) {
        console.log(err);
      }
      if (row) {
        const names = row.map((x) => {
          return {
            name: desDecrypt(x.name, process.env.ENC_SECRET),
            lastname: desDecrypt(x.lastname, process.env.ENC_SECRET),
          };
        });
        res.send(names);
      }
    }
  );
});

module.exports = advisor;
