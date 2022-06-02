const express = require("express");
const db_connection = require("../config/connection.js");
const registerValidation = require("./validation.js");
const admin = express.Router();

admin.post("/registeradvisor", (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const name = req.body.name;
  const lastname = req.body.lastname;
  const passport = req.body.passport;
  const userRole = "ADVISOR";

  db_connection.query(
    "SELECT * FROM users where password = ? ",
    [passport],
    (err, returnedResult) => {
      if (err) {
        console.log(err);
      }
      if (returnedResult.length > 0)
        return res.json({
          message: "There is a user with this passport number",
        });

      db_connection.query(
        "INSERT INTO users (name, lastname, password, role) values (?, ?, ?, ?)",
        [name, lastname, passport, userRole],
        (error, rows) => {
          if (error) {
            console.log(error);
          }
          if (rows) {
            return res.json({ message: "Advisor has been registered " });
          }
        }
      );
    }
  );
});

admin.post("/registerstudent", (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const name = req.body.name;
  const lastname = req.body.lastname;
  const passport = req.body.passport;
  const userRole = "STUDENT";

  db_connection.query(
    "SELECT * FROM users where password = ? ",
    [passport],
    (err, returnedResult) => {
      if (err) {
        console.log(err);
      }
      if (returnedResult.length > 0)
        return res.json({
          message: "There is a user with this passport number",
        });

      db_connection.query(
        "INSERT INTO users (name, lastname, password, role) values (?, ?, ?, ?)",
        [name, lastname, passport, userRole],
        (error, rows) => {
          if (error) {
            console.log(error);
          }
          if (rows) {
            return res.json({ message: "Student has been registered " });
          }
        }
      );
    }
  );
});
module.exports = admin;
