import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';
import Registration from './registration';
import Login from './login';
import ForgotPassword from './forgotpwd';
import Task from './task';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Navigate replace to="/registration" />}></Route>
          <Route path='/registration' element={<Registration />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/reset-password' element={<ForgotPassword />}></Route>
          <Route path='/add-task' element={<Task />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
