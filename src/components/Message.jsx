import React from 'react';
import Image from "next/image";
import images from "@/images/image1.jpg";

const Message = ({outMessage,message,user}) => {
  const date = new Date(); 
  const month = date.toLocaleString('default', { month: 'long' });


    return (
    <div className="messages flex-1 w-full overflow-auto p-2">
        <div className='w-full'>
          <div className={`message mb-4 w-6/12 flex ${outMessage === true ? "hidden":"block"}`}>
               <div className="flex-2">
                <div className="relative">
                  <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                    <Image className="rounded-full" src={images} alt="" />
                  </div>
                  <span className="absolute bottom-0 w-2 h-2 rounded-full bg-emerald-500 right-1 ring-1 ring-white"></span>
                </div>
              </div>
              <div className="flex-1 px-2">
                <div className="inline-block bg-slate-200 text-justify text-sm rounded-lg p-3 px-6 text-gray-700">
                  <span>
                    {message === undefined && `hello`}
                    {Object.keys(user).length===0?"New  conversations":message}
                  
                  </span>
                </div>
                <div className="">
                  <small className="text-gray-500">{new Date().getDate() +" "+ month.slice(0,3)}</small>
                </div>
              </div>  
            </div>
           </div>
              {/* messageInput */}
              
            <div className='w-full flex justify-end'>
            <div className={`message me mb-4 w-6/12  text-right ${outMessage === false ? 'block':'hidden'}`}>
              <div className="flex-1 px-2">
                <div className="inline-block bg-primary text-justify rounded-lg p-3 text-sm px-6 text-white">
                {message === undefined && 'what is Your Name'}
                {Object.keys(user).length===0 ? "What is your Name" : message}
                </div>
                <div className="pr-4">
                  <small className="text-gray-500">{new Date().getDate() +" "+ month.slice(0,3)}</small>
                </div>
              </div>
            </div>
            </div>
          </div>
    );
};

export default Message;