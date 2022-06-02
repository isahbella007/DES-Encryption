import React, { useState } from "react";
import useAdmin from "../../Hooks/useAdmin";
import './form.css'
const Form = () => {
    const [name, setName] = useState()
    const [lastname, setLastName] = useState()
    const [password, setPassword] = useState()

    const {registerAdvisor, registerStudent} = useAdmin()

    const handleAdvisor = (e) => { 
        e.preventDefault()
        registerAdvisor(name, lastname, password)
    }

    const handleStudent = (e) => { 
        e.preventDefault()
        registerStudent(name, lastname, password)

    }
  return (
    <div className="form-container">
      <form>
        <label>FirstName: </label>
        <input
          type="text"
          placeholder="First Name..."
          required
          onChange={(e) => setName(e.target.value)}
        ></input>

        <label>LastName: </label>
        <input
          type="text"
          placeholder="LastName..."
          required
          onChange={(e) => setLastName(e.target.value)}
        ></input>

        <label>Passport: </label>
        <input
          type="text"
          placeholder="Passport..."
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" className="button" onClick={handleAdvisor}>
          Register Advisor
        </button>
        <button type="submit" className="button" onClick={handleStudent}>
          Register Student
        </button>
      </form>
    </div>
  );
};
export default Form;
