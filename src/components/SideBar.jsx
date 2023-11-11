"use client";
import { BsChatDots, BsTelephone, BsPersonLinesFill } from "react-icons/bs";
import { LuMonitor } from "react-icons/lu";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { MdGroups, MdSecurity, MdViewModule } from "react-icons/md";
import Image from "next/image";
import image from "@/images/image1.jpg";
import MyProfile from "./MyProfile";
import { useEffect, useRef, useState } from "react";
import Monitors from "./Monitors";
import Language from "./Language";

const SideBar = ({handleToggle,theme,handleEditProfile,handleMessage,handleFriend,handleCall,handleModal,handleFriendReq,handleActivePerson,handleProfile,profileSideBar,handleCloseProfile,admin,handleStatis,handleGroupChats,handlePrivateChats,handleGroupList,handleComplanUser,handleLanguage,language}) => {


  const [monitor,setMonitor] = useState(false);
  const ref = useRef();

  const handleMonitor = () => {
        setMonitor(prev => !prev);    
  };
    


  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (monitor && ref.current && !ref.current.contains(e.target)) {
        setMonitor(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [monitor])


  return (
    <div className="2xl:block xl:block lg:block md:block sm:block hidden">
      {profileSideBar ? (
         <MyProfile theme={theme} handleEditProfile={handleEditProfile} handleCloseProfile={handleCloseProfile} />
      ) : (
        <aside className={`flex flex-col items-center w-16 min-h-screen py-7  overflow-y-auto ${theme?"bg-gray-800 ":"bg-white"}  border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700`}>
          <nav className="flex flex-col flex-1 space-y-6">
            <h1  onClick={handleMessage} className={`p-1.5 ${theme ? "text-white":"text-gray-700"} focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 ${theme?"hover:bg-slate-800":"hover:bg-gray-100"} cursor-pointer`}>
              <BsChatDots className="w-6 h-6" />
            </h1>

          {admin && <h1 onClick={handleMonitor} className={`p-1.5 ${theme ? "text-white":"text-gray-700"} focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 ${theme?"hover:bg-slate-600":"hover:bg-gray-100"} cursor-pointer`}>
              <LuMonitor className="w-5 h-6" />
            </h1>}

            
            {monitor && <Monitors theme={theme} refarence ={ref} handlePrivateChats={handlePrivateChats} handleGroupChats={handleGroupChats} handleStatis={handleStatis} setMonitor={setMonitor}/>}


            <h1 onClick={handleActivePerson} className={`p-1.5 ${theme ? "text-white":"text-gray-700"} focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 ${theme?"hover:bg-slate-600":"hover:bg-gray-100"} cursor-pointer`}>
              <BsPersonLinesFill className="w-5 h-6" />
            </h1>
            <h1 onClick={handleGroupList} className={`p-1.5 ${theme ? "text-white":"text-gray-700"} focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 ${theme?"hover:bg-slate-600":"hover:bg-gray-100"} cursor-pointer`}>
              <MdGroups className="w-5 h-6" />
            </h1>
            
            <h1 onClick={handleFriend} className={`p-1.5 ${theme ? "text-white":"text-gray-700"} focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 ${theme?"hover:bg-slate-600":"hover:bg-gray-100"} cursor-pointer`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </h1> <hr />
            <h1 onClick={handleCall} className={`p-1.5 ${theme ? "text-white":"text-gray-700"} focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 ${theme?"hover:bg-slate-600":"hover:bg-gray-100"} cursor-pointer`}>
              <BsTelephone className=" w-5 h-5" />
            </h1>
            <h1 onClick={handleModal} className={`p-1.5 ${theme ? "text-white":"text-gray-700"} focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 ${theme?"hover:bg-slate-600":"hover:bg-gray-100"} cursor-pointer`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </h1>

            <h1 onClick={handleFriendReq} className={`p-1.5 ${theme ? "text-white":"text-gray-700"} focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 ${theme?"hover:bg-slate-600":"hover:bg-gray-100"} cursor-pointer`}>
              <HiOutlineUserPlus className="w-6 h-6" />
            </h1>
       {admin && 
            <h1 onClick={handleComplanUser} className={`p-1.5 ${theme ? "text-white":"text-gray-700"} focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 ${theme?"hover:bg-slate-600":"hover:bg-gray-100"} cursor-pointer`}>
              <MdSecurity className="w-6 h-6" />
            </h1>}
        {admin && 
            <h1 onClick={handleLanguage} className={`p-1.5 ${theme ? "text-white":"text-gray-700"} focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 ${theme?"hover:bg-slate-600":"hover:bg-gray-100"} cursor-pointer`}>
          <MdViewModule className="w-6 h-6" />
          </h1>}
          {
            language && <Language theme={theme} />
          }
          </nav>

          <div className="flex flex-col space-y-6">
            <label
              htmlFor="default-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                onClick={handleToggle}
                id="default-toggle"
                className="sr-only peer"
              />
              <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>

            <h1 onClick={handleProfile}>
              <Image
                className="object-cover w-8 h-8 rounded-full cursor-pointer"
                src={image}
                alt=""
              />
            </h1>
          </div>
        </aside>
      )}
    </div>
  );
};

export default SideBar;
