import React from 'react';

const Language = ({theme}) => {
    return (
        <div className="absolute inline-block ml-12 pt-[530px] z-40 select-none">
        <div 
           className={`relative z-40 w-32 py-2 mt-2 origin-top-right ${theme ? "bg-slate-500 text-white":"bg-white text-black"} rounded-md shadow-xl dark:bg-gray-800`}>
           <h2 className={`block px-4 py-3 text-sm  capitalize transition-colors duration-300 transform dark:text-gray-300 ${theme ? "hover:bg-slate-600":"hover:bg-gray-200"} cursor-pointer`}>Default</h2>
           <h2 className={`block px-4 py-3 text-sm  capitalize transition-colors duration-300 transform dark:text-gray-300 cursor-pointer ${theme ? "hover:bg-slate-600":"hover:bg-gray-200"}`}>English</h2>
           </div>
           </div>
    );
};

export default Language;