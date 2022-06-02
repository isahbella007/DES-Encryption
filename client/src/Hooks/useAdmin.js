import React from "react";
import axios from "axios";

const useAdmin = () => {
  const url = process.env.REACT_APP_BASE_URL;
  const registerAdvisor = async (name, lastname, passport) => {
    console.log(`${name}, ${lastname}, ${passport} are all frm hookie`);
    // make the request to the api
    await axios
      .post(`${url}admin/registeradvisor`, {
        name: name,
        lastname: lastname,
        passport: passport,
      })
      .then((response) => {
        alert(response.data.message)
        console.log(response.status);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registerStudent = async (name, lastname, passport) => {
    await axios
      .post(`${url}admin/registerstudent`, {
        name: name,
        lastname: lastname,
        passport: passport,
      })
      .then((response) => {
        alert(response.data.message)
        console.log(response.status);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    registerAdvisor,
    registerStudent,
  };
};

export default useAdmin;
