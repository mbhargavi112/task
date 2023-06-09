import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {  sendPasswordResetEmail} from 'firebase/auth'
import { auth } from './firebase'

import { progres } from './progress'
import { Toast } from './toast';
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function ForgotPassword() {
    const [isProgress, setIsProgress] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = async (data) => {
        try {
            setIsProgress(true)
            await sendPasswordResetEmail(auth, data.email);
            Toast(true, "Please check your email")
        } catch (error) {
            setIsProgress(false)
            if (error.code == "auth/invalid-email") Toast(false, "Sorry! invalid Email")
            if (error.code == "auth/user-not-found") Toast(false, "Sorry! user not found")
        }
    }

    return (
        <div className='card d-flex justify-content-center align-items-center'>
            <h5>Forgot Password</h5>
            <form className='w-30' onSubmit={handleSubmit(navigate)}>

                <div className='m-2'>

                    <input type="text"{...register('email', { required: true })} className="form-control" placeholder='email'></input>
                    {errors.email && <span className='text-danger'> please enter the email </span>}
                </div>
                <div className='d-flex'>
                    <div className='m-4'>
                        <button type="Submit" className="btn btn-primary d-flex justify-content-center align-items-center">send Forgot Email
                            {isProgress ? progres() : ""}
                        </button>
                    </div>
                    <div className='m-4'>
                        <button type="Submit" onc className="btn btn-primary d-flex justify-content-center align-items-center">
                            <Link className='text-light link' to="/login">Login</Link>
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer autoClose={1000} />
        </div>
    );
}

export default ForgotPassword;