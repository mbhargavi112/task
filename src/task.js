import React, { Component, useState } from 'react';
import { useForm } from 'react-hook-form';
import { progres } from './progress'
import { Toast } from './toast';

import { addTask } from './taskService'
import { ToastContainer } from 'react-toastify';



function Task() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isProgress, setIsProgress] = useState(false);

    const navigate = async (data) => {
        try {
            setIsProgress(true)
            data.created = Date.now();
            data.status = "OPEN";
            data.comments = [];
            data.owner = "";
            addTask(data);
            setIsProgress(false);
            Toast(true, "Task added successfully !")
        } catch (error) {
            setIsProgress(false)
            Toast(false, "something went wrong please try again later")
        }
    }

    return (
        <div className='card d-flex justify-content-center align-items-center'>
            <h5>Add Task</h5>
            <form className='w-30' onSubmit={handleSubmit(navigate)}>


                <div className='m-2'>

                    <input type="text"{...register('titile', { required: true })} className="form-control" placeholder='titile'></input>
                    {errors.titile && <span className='text-danger'> please enter the titile </span>}
                </div>
                <div className='m-2'>

                    <textarea type="description"{...register('description', { required: true })} className="form-control" placeholder='description'></textarea>
                    {errors.description && <span className='text-danger'>please enter the description</span>}
                </div>

                <div className='m-2'>

                    <input type="date"{...register('date', { required: true })} className="form-control" placeholder='date'></input>
                    {errors.date && <span className='text-danger'>please enter the Date</span>}
                </div>


                <div className='m-4'>
                    <button type="Submit" className="btn btn-primary  ">Add
                        {isProgress ? progres() : ""}
                    </button>
                </div>
            </form>
            <ToastContainer autoClose={1000} />
        </div>
    );
}

export default Task;