'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Login = () => {
    const router = useRouter()
    const [err,setErr] = useState('')
      const handleLoginValue = e =>{
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      if(email === "test@gmail.com" || email=== 'pronab@gmail.com' && parseInt(password) === 123456){
        localStorage.setItem('email',email);
        router.push('/chat')
      }else{
        setErr('please try again!!!')
      }
    };
    
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 w-11/12 sm:max-w-xl sm:mx-auto">
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-semibold text-center text-slate-700">Alzaf Limited<br /> <span className='text-xl text-gray-400'>Please Login</span></h1>
          </div>
          <div className="divide-y divide-gray-200">
            <form onSubmit={handleLoginValue}>
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative">
                <input autoComplete="off" id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" required placeholder="Your Email" />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text">Your Email</label>
              </div>
              <div className="relative">
                <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" required placeholder="Password" />
                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text">Password</label>
              </div>
              <p className='text-end text-xs underline cursor-pointer'>Forgot Password</p>
              <p className='text-xs text-red-500 text-center'>{err}</p>
              <div className="relative text-center">
                <input type="submit" className="bg-primary text-white rounded-md px-6 py-1 mt-2 cursor-pointer" value="Login" />
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
};

export default Login;