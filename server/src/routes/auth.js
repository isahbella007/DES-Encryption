const express = require("express");
const db_connection = require("../config/connection.js");
const { desDecrypt } = require("../des.js");
const login = express.Router();

login.post("/login", (req, res) => {
  const userId = req.body.userId;
  const password = req.body.password;
  let obj;
  db_connection.query(
    "SELECT * FROM users WHERE id = ? and password = ?",
    [userId, password],
    (err, rows) => {
      if (err) {
        console.log(err);
      }
      if (rows.length > 0) {
        console.log(rows);
        obj = {
          name: desDecrypt(rows[0].name, process.env.ENC_SECRET),
          isLoggedIn: true,
          id: userId,
          role: rows[0].role,
          message: "Logged In",
        };
        res.send(obj);
      } else {
        console.log("no data");
        obj = { isLoggedIn: false, message: "Wrong combination" };
        res.send(obj);
      }
    }
  );
});

module.exports = login;
