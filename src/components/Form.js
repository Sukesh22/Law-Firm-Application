import React from 'react'
import bgimg from'../assests/img.jpeg';
import {useForm}from 'react-hook-form'

export default function Form() {

  const{ register,handleSubmit,watch,formState:{errors}}=useForm()
  const onSubmit = data => console.log(data);
  console.log(watch('Username'));

    return (
    <section>
        <div className='register'>
        <div className='col-1'>
        <h2>Sign In</h2>
        <span>Register here and continue</span>

        <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type='text'{...register("Username")} placeholder='Username'/>
            <input type='text'{...register("Password")} placeholder='Password'/>
            <input type='text'{...register("Confirmpwd")} placeholder='Confirm password'/>
            <input type='text'{...register("Mobile",{ required:true,maxLength:10})} placeholder='Mobile number'/>
            {errors.Mobile?.type ==="required" && "Mobile Number is required"}
            {errors.Mobile?.type ==="maxLength" && "Max Length Exceed"}

            <button className='btn'>Sign In</button>
        </form>
        </div>
        <div className='col-2'>
            <img src={bgimg}alt=''/>
        </div>
        </div>
    </section>
  )
}
