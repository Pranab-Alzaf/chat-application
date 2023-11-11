import React from 'react';
import { CiSearch } from "react-icons/ci";
const ChatList_Search = ({theme,placeHolder,handleSearch,group,messages}) => {
 

  
    return (
        <div className={`w-full mx-2 px-5 mt-5 ${theme ? "text-white" : "text-black"}`}>
            <div className="flex flex-row mb-2 items-center justify-center h-12 w-full ">
            <div className="flex items-center justify-center rounded-2xl  text-indigo-700 bg-indigo-100 h-10 w-10">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              > 
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
            </div>
            <div className="ml-2 font-bold text-2xl">Chats</div>
          </div>

          <div className="relative mt-5">
            <input
              type="text"
              id="password"
              onChange={handleSearch}
              className={`w-full pl-3 pr-10 py-2 border-2 border-gray-200 outline-none rounded-xl transition-colors ${theme? "bg-slate-600 outline-none placeholder:text-white":"bg-gray-50 outline-none"}`}
              placeholder={placeHolder==="AllFriend" ||placeHolder==="AllMessage"|| placeHolder==="allCall"||placeHolder==="friendReq" || placeHolder==='defaultMassages' || placeHolder==="Active" ? "search...":"To: Type a Name or Group"}
            />
            <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
              {group === 'group' ? <p onClick={()=>console.log('plus button click')}>+</p>:<CiSearch className="fill-blue-500" />}
            </button>
          </div>

          <div className={`${messages.length===0 ? "hidden":"flex"} flex-row items-center justify-between text-xs pt-6 mx-1`}>
              <span className="font-bold">{placeHolder==="AllMessage"&&"All Messages" || placeHolder==="Active"&&"Active Chat" || placeHolder=== "AllFriend" && "All friends" || placeHolder==="friendReq"&& "Add Friend" || placeHolder==="allCall" && "All Calls" || placeHolder==="defaultMassages" && 'All Messages'|| placeHolder === 'All Group' && "All Group" }</span>
            </div>
        </div>
    );
};

export default ChatList_Search;