import Image from "next/image";
import React from "react";
import images from "@/images/image1.jpg";
import useMenuAnimation from "./useMenuAnimation";

const MyProfile = ({handleCloseProfile,handleEditProfile,theme}) => {
  const test=()=>{
    handleEditProfile();
    handleCloseProfile();
  }

  return (
    <div className={`${theme ? "text-white":"text-black"}  `}>
        <div className={` flex flex-col   w-96 h-screen border border-gray-300`}>
      <div className="bg-gray-300 w-96 h-40 relative ">
      <div onClick={handleCloseProfile} className="flex justify-end m-2">
      <div className="flex items-center justify-center select-none text-xl text-white cursor-pointer h-10 w-10 bg-slate-500 rounded-full">
                  X
                </div>
      </div>
        <Image
          className="ml-36 w-24 h-24 rounded-full  ring-4 ring-gray-100 absolute top-28 transition-transform cursor-pointer duration-150  "
          src={images}
          alt=""
        />
      </div>

      <div>
        <h2 className="text-center mt-14 font-medium">ashik alahi</h2>
        <h2 className={` text-center  font-medium text-sm ${theme ? "text-gray-300":"text-gray-500"}`}>
          Web developer
        </h2>
        <div className="mt-4 flex justify-center items-center gap-2">
          <button onClick={test} className="bg-primary py-1.5 px-6 text-sm text-white font-semibold text-smshadow-2xl rounded-full cursor-pointer">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="mt-5 mx-3  border-b border-sky-200 w-11/12 h-1"></div>
      <div className="mt-3">
        <h2 className="ml-5 font-semibold text-sm">Mutual friend [17]</h2>
        <div className=" w-8 h-8 flex gap-2 rounded-full cursor-pointer ml-3 mt-5"></div>
      </div>

      <div className=" mx-3  border-b border-sky-200 w-11/12 h-1"></div>
      <div className="mt-2">
        <h2 className="ml-5 font-semibold text-sm">Profile URL</h2>
        <h1 className="ml-5 font-semibold text-sm cursor-pointer mt-1">http://localhost:3000/profile</h1>
        <div className="mt-2 mx-3  border-b border-sky-200 w-11/12 h-1"></div>

        <div className="mt-5">
          <h2 className="ml-5 font-semibold text-sm">Gender</h2>
          <h1 className="ml-5 font-semibold text-sm">Male</h1>
        </div>

        <div className="mt-2 mx-3  border-b border-sky-200 w-11/12 h-1"></div>
        <div className="mt-5">
          <h2 className="ml-5 font-semibold text-sm">Country</h2>
          <h1 className="ml-5 font-semibold text-sm">Bangladesh</h1>
        </div>
        
        
    </div>
    </div>
    </div>
  );
};

export default MyProfile;
