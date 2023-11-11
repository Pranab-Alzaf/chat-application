"use client"
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from './Input';
import TextArea from './TextArea';
import SelectedValue from './SelectedValue';

const EditProfile = ({handleEditProfile,theme}) => {
    const [date , setStartDate ] = useState(new Date());
    return (
        <div className={`w-3/12 h-screen bg-white mx-auto overflow-y-scroll overflow-x-hidden ${theme ?"bg-slate-400 text-black":"bg-white text-black"}`}>
        <h1 className="text-center py-3 sticky top-1 bg-primary rounded text-white mt-0.5 font-medium  ">
          Edit profile
        </h1>
        <div className={`bg-gray-50  border border-gray-200 mt-2 ${theme?"bg-slate-400":"bg-white"}`}>
          <Input lebel={'Full Name'} type={'text'} />
          <Input lebel={'Username'} type={'text'} />
          <Input lebel={' Email Address'} type={'email'} />
          <Input lebel={'Phone Number'} type={'number'} />
          <Input lebel={' New Password'} type={'password'} />
          <Input lebel={'Confirm Password'} type={'password'} />
          <Input lebel={' Custom Avatar'} type={'file'} />
          <TextArea lebel={'About Me'}/>


          <div className="w-full ml-5 mt-1">
            <label htmlFor="">Date: </label>
            <br />
            <DatePicker
              className="w-full px-3.5 border rounded outline-none focus:border-[2px] focus:border-indigo-400"
              selected={date}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <SelectedValue lebel={'Gender'} option={["Male","Female","Non-binary","-----"]}/>
          <Input lebel={'Website'} type={'text'} />
          <Input lebel={'Location'} type={'text'} />
          <SelectedValue lebel={'Country'} option={["Bangladesh","Sudan"," Togo","-----"]}/>
          <SelectedValue lebel={'TimeZone'} option={["Asia/Dhaka"," Asia/Oral"," Asia/Baku","-----"]}/>
          <SelectedValue lebel={'Notification Tone'} option={["Case/Closed"," Off","  Hold On","-----"]}/>
          <Input lebel={'Cover Pic'} type={'file'} />
          <SelectedValue lebel={'Disable Private Messages'} option={["Yes","No","-----"]}/>
          <SelectedValue lebel={'Deactivate Account'} option={["Yes","No","-----"]}/>
        </div>
        <div className='flex justify-end gap-5 py-4'>
        <button  onClick={handleEditProfile} className='font-bold border px-4 rounded'>Cancel</button>
        <button className='bg-primary px-6 py-1 text-white rounded'>Update</button>
        </div>
      </div>
    );
};

export default EditProfile;


