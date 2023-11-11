
const Monitors = ({theme,setMonitor,handleStatis,handleGroupChats,handlePrivateChats,refarence}) => {
    return (
       <>
            <div ref={refarence} className="absolute inline-block ml-12 pt-10 z-40">
             <div 
                onClick={()=>setMonitor(null)}
                className={`relative z-40 w-48 py-2 mt-2 origin-top-right ${theme ? "bg-slate-500 text-white":"bg-white text-black"} rounded-md shadow-xl dark:bg-gray-800`}>
                <h2 onClick={handleStatis} className={`block px-4 py-3 text-sm  capitalize transition-colors duration-300 transform dark:text-gray-300 ${theme ? "hover:bg-slate-600":"hover:bg-gray-200"} cursor-pointer`}>Statistics</h2>
                <h2 onClick={handleGroupChats} className={`block px-4 py-3 text-sm  capitalize transition-colors duration-300 transform dark:text-gray-300 cursor-pointer ${theme ? "hover:bg-slate-600":"hover:bg-gray-200"}`}> Group Chats</h2>
                <h2 onClick={handlePrivateChats} className={`block px-4 py-3 text-sm capitalize transition-colors duration-300 transform dark:text-gray-300 ${theme ? "hover:bg-slate-600":"hover:bg-gray-200"} cursor-pointer`}>Private Chat</h2>
                </div>
                </div>
       </>
    );
};

export default Monitors;

