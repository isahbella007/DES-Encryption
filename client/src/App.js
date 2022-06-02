import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Advisor from './Pages/Advisor/advisor';
import Login from './Pages/Login/login';
import Registrar from './Pages/Registrar/registrar';
import Student from './Pages/Student/student';
import SysAdmin from './Pages/SysAdmin/sysadmin';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Login/>}></Route>
        <Route path='/sysadmin' element = {<SysAdmin/>}></Route>
        <Route path='/registrar' element = {<Registrar/>}></Route>
        <Route path='/advisor' element = {<Advisor/>}></Route>
        <Route path='/student' element = {<Student/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
