import React from "react";
import { FcEndCall } from "react-icons/fc";
import { MdAddIcCall } from "react-icons/md";
import { BiSolidUserPlus } from "react-icons/bi";

const ChatList = ({ theme , messages , handlePertiCulerUser , selected,group}) => {
                
  return (
    <div
      className={`flex h-screen pb-10 antialiased ${
      theme ? "text-white" : "text-gray-800"
      } w-full`}
    >
      <div className="flex flex-row h-full w-full overflow-x-hidden">
      
        <div
          className={`flex flex-col py-5 pl-6 pr-2 w-full ${
            theme ? "bg-gray-800" : "bg-white"
          }  flex-shrink-0`}
        >
          <h3 className="text-center text-xl text-primary font-serif">{messages.length===0 && "No Complain..."}</h3>
          {
           messages?.map((title,index) => (
            <div key={index} className="flex mb-2 flex-col">
              <div className="flex flex-col space-y-1  -mx-2">
              
                <button 
                onClick={()=>handlePertiCulerUser(title.id)}
                  className={`${selected?.id===title.id ? "bg-gray-100":""} flex items-center ${
                    theme ? "hover:bg-slate-600" : "hover:bg-gray-100"
                  } ${selected?.id===title.id && theme ? "bg-slate-600":""}  rounded-xl p-2`}>
                  <div className="relative">
                    <div className="flex items-center justify-center h-10 w-10 bg-indigo-200 rounded-full">
                      <img className="rounded-full" src={`https://api.slingacademy.com/public/sample-photos/${title.id}.jpeg`} alt=""/>
                    </div>
                    <span className="absolute bottom-0 w-3 h-3 rounded-full bg-emerald-500 right-1 ring-1 ring-white"></span>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-bottom justify-between">
                      <p className="text-grey-darkest">{title?.name}</p>
                      {title?.userName|| title.NewF || title.group ? null : <p className="text-xs text-grey-darkest">12:45 pm</p>}
                      {
                        title.NewF ?( <button className={`flex items-center rounded text-xs bg-gray-200 px-3 py-1 ${theme ? "bg-slate-600":"bg-gray-100"}`}><BiSolidUserPlus className="w-5 h-5 "/> Add Friend</button>):null
                      }
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-grey-dark text-start mt-1 text-sm">
                       {group === "group" ? "":title?.message?.slice(0,20) || title?.userName }
                       {title?.call &&  <span className="flex items-center gap-1 text-red-500 font-medium text-xs"><FcEndCall/>Missed</span>}
                      </p>
                      {
                        title?.userName || title.call|| title.NewF || title.group ? null  : <p className="bg-primary h-4 w-4 rounded-full text-xs text-white">2</p>
                      }
                      {title?.call ? <MdAddIcCall className="w-5 h-5 mr-2"/>:null}
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatList;


