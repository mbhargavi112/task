import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
import * as localStorage from './localstorage'
import { progres } from './progress'
import { Toast } from './toast';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';


function Login() {
    const navigate=useNavigate();
    const [isProgress, setIsProgress] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const login = async (data) => {
        try {
            setIsProgress(true)
            let result = await signInWithEmailAndPassword(auth, data.email, data.password);
            localStorage.set("token", result.user.accessToken)
            Toast(true, "Login successfull !")
            setIsProgress(false)
            navigate("/add-task")
        } catch (error) {
            setIsProgress(false)
            if (error.code == "auth/invalid-email") Toast(false, "Sorry! invalid Email")
            if (error.code == "auth/user-not-found") Toast(false, "Sorry! user not found")
            if (error.code == "auth/wrong-password") Toast(false, "Sorry! user not found")
        }
    }

    return (
        <div className='card d-flex justify-content-center align-items-center'>
            <h5>Login Forms</h5>
            <form className='w-30' onSubmit={handleSubmit(login)}>


                <div className='m-2'>

                    <input type="text"{...register('email', { required: true })} className="form-control" placeholder='email'></input>
                    {errors.email && <span className='text-danger'> please enter the email </span>}
                </div>
                <div className='m-2'>

                    <input type="password"{...register('password', { required: true })} className="form-control" placeholder='password'></input>
                    {errors.password && <span className='text-danger'>please enter the password</span>}
                </div>
                <div className='d-flex'>
                    <div className='m-4'>
                        <button type="Submit" className="btn btn-primary d-flex justify-content-center align-items-center">Login
                            {isProgress ? progres() : ""}
                        </button>
                    </div>
                    <div className='m-4'>
                        <button type="Submit" onc className="btn btn-primary d-flex justify-content-center align-items-center">
                            <Link className='text-light link' to="/reset-password">forgot password</Link>
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer autoClose={1000} />
        </div>
    );
}

export default Login;