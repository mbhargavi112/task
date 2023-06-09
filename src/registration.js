import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

import { auth } from './firebase'
import * as localStorage from './localstorage'
import { progres } from './progress'
import { Toast } from './toast';

import { ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";


function Registration() {
    const [isProgress, setIsProgress] = useState(false);


    const { register, handleSubmit, formState: { errors } } = useForm();

    const registerUser = async (data) => {
        try {
            setIsProgress(true)
            let result = await createUserWithEmailAndPassword(auth, data.email, data.password);
            // Add Name
            await updateProfile(result.user, {
                displayName: data.name,
            });
            setIsProgress(false)
            localStorage.set("token", result.user.accessToken)
            Toast(true, "Registration successfull !")
        } catch (error) {
            setIsProgress(false)
            if (error.code == "auth/invalid-email") Toast(false, "Sorry! invalid Email")
            if (error.code == "auth/weak-password") Toast(false, "Sorry! password is weak")
            if (error.code == 'auth/email-already-in-use') Toast(false, "Sorry! email is already in use")
        }
    }

    return (

        <div className='card d-flex justify-content-center align-items-center'>
            <h5>Regristation Form</h5>
            <form className='w-30' onSubmit={handleSubmit(registerUser)}>

                <div className='m-2'>

                    <input type="text"{...register('name', { required: true })} className="form-control" placeholder='name'></input>
                    {errors.name && <span className='text-danger'>please enter the Name</span>}
                </div>

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
                        <button type="Submit" className="btn btn-primary d-flex justify-content-center align-items-center">Register
                            {isProgress ? progres() : ""}
                        </button>
                    </div>
                    <div className='m-4'>
                        <button type="Submit" onc className="btn btn-primary d-flex justify-content-center align-items-center">
                            <Link className='text-light link' to="/login">Login</Link>
                        </button>
                    </div>
                </div>
                <ToastContainer autoClose={1000} />
            </form>
        </div>
    );
}

export default Registration;