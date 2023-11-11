import React from "react";
import StatisticsData from "@/lib/Statistics";
import message from "@/lib/message";



const Statistics = ({RecentUser,theme}) => {
    const Joined = message.map(value=>{
        return {
            id:value.id,
            name:value.name,
            userName:value.userName
        }
    });
  return (
    <div>
      <section className="w-full p-6">
        <div className="  shadow-md items-center  h-screen  rounded ">
          <div className={`${theme ? "bg-slate-300 rounded":"rounded"} flex justify-between p-5 shadow-lg `}>
            <h1 className="text-pink-500 font-medium">Statistics</h1>
            <span className="cursor-pointer">
              {" "}
              <i className="fa-solid fa-rotate-right"></i>
            </span>
          </div>
          <div className=" mt-6 p-3  place-items-center grid grid-cols-3 gap-5">
            {StatisticsData.map((value) =>
              Object.entries(value).map(([keys, value]) => (
                <div
                  key={StatisticsData.length+1}
                  className={`${theme ? "bg-slate-300":"bg-gray-50"} shadow-lg w-64 h-16 flex flex-col items-center py-2.5 rounded`}
                >
                  <h2 className="text-xs font-normal">{keys}</h2>
                  <p className="font-medium">{value}</p>
                </div>
              ))
            )}
          </div>

          <div className="p-4 mt-10 shadow-lg">
            <h3 className={`${theme ? "text-white":""} font-medium`}>Recently Joined</h3>
          </div>
          <div className="flex flex-col h-[460px] gap-3 overflow-y-scroll">
           {
            Joined.map(users=>( <div key={users.id}  className={`${theme ? "bg-slate-300 rounded":"bg-gray-50 rounded"} shadow-lg  p-4 flex justify-between items-center px-10`}>
            <div className="w-3/12 flex items-center gap-2 ">
              <img className="w-10 h-10 rounded" src={`https://api.slingacademy.com/public/sample-photos/${users.id}.jpeg`} alt="" />
              <div>
                <h1 className="font-medium text-sm">{users.name}</h1>
                <h3 className="text-xs font-medium">{users.userName}</h3>
              </div>
            </div>
            <div className="w-3/12 ">
              <p className="text-xs font-medium">Registered</p>
            </div>
            <div className="w-2/12">
              <h1 className="font-medium text-sm">23-Sep-2023</h1>
          <h3 className="text-xs font-medium">3.00 PM</h3>
            </div>
            <div className="w-1/12 flex justify-end">
            <button onClick={()=>RecentUser(users.id)} className="font-medium bg-gray-200 text-xs p-1 rounded cursor-pointer hover:bg-gray-300 duration-100 delay-150 ">
              View
            </button>
            </div>
          </div>))
           }
        </div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;
