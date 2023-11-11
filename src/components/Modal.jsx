
import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";
import SettingGeneral from "./settings/settingGeneral";
import EmailSettings from "./settings/EmailSettings";
import SmsSetting from "./settings/SmsSetting";
import LoginSetting from "./settings/LoginSetting";
import MessageSetting from "./settings/MessageSetting";
import ModerationSettings from "./settings/ModerationSettings";
import Notifications from "./settings/Notifications";
import IpSettings from "./settings/IpSettings";
import PwaSettings from "./settings/PwaSettings";
import RealtimeSettings from "./settings/RealtimeSettings";
import LandingPages from "./settings/LandingPages";
import WelcomeScreen from "./settings/WelcomeScreen";
import CustomCss from "./settings/CustomCss";
import RebuildCache from "./settings/RebuildCache";
import SystemInfo from "./settings/SystemInfo";

const Modal = ({open,setOpen,theme}) => {
  const [settingsOut,setSettingOut] = useState([]);
  const [settings, setSettings] = useState('Appearance');
  
  
  useEffect(()=>{
    fetch("http://localhost:3000/setting.json")
    .then(res=>res.json())
    .then(data=>setSettingOut(data))
  },[settings]);

  const handleApper =()=>{
        setSettingOut(setting=>setting?.map(value=>{
          return {
            lebel : value?.lebel,
            option:value?.option,
            optionThenLocation:value?.optionThenLocation
          }
        }))
        setSettings('Appearance')
  }

  const handleGeneral = () =>{
      setSettings('General Settings')
  }


  const handleEmail =()=>{
    setSettings('Email Settings')
  }

  const handleSms =()=>{
      setSettings('SMS Settings')
  }
  const handleLogin =()=>{
      setSettings('Login Settings')
  }
  const handleMessage =()=>{
      setSettings('Message Settings')
  }
  const handleModeration =()=>{
      setSettings('Moderation')
  }
  const handleNotifiactions =()=>{
      setSettings('Notifications')
  }
  const handleIP =()=>{
      setSettings('IP Intelligence')
  }
  const handlePWA =()=>{
      setSettings('PWA Settings')
  }
  const handleRealtime =()=>{
      setSettings('Realtime Settings')
  }
  const handleLanding =()=>{
      setSettings('Landing Page')
  };

  const handleWelcome = () =>{
    setSettings('Welcome Screen')
  }

  const handleCustomCss = () =>{
    setSettings('Custom CSS')
  }

  const handleCustomJs = () =>{
    setSettings('Custom JS')
  };

  const handleRebuildCache = () =>{
    setSettings('Rebuild Cache')
  };


  const handleSystemInfo = () =>{
    setSettings('System Info')
  }


  const handleHeadersAndFooters = () =>{
    setSettings('Headers & Footers')
  }


  const [Appearances,setAppearances] = useState('-----')
  const handleAppers = e =>{  
    setAppearances(e.target.value)
  }



  return (
    <div>
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="fixed w-full inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 w-8/12 mx-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className={`relative w-full transform overflow-hidden rounded-lg ${theme ? "bg-slate-600":"bg-white"} text-left shadow-xl transition-all sm:my-8 mx-52 h-[550px]`}>
      <div onClick={()=>setOpen(!open)} className="flex justify-end m-2">
      <div className="flex items-center justify-center select-none text-xl text-white cursor-pointer h-10 w-10 bg-slate-500 rounded-full">
                  X
      </div>
      </div>
      <div className="p-3 flex gap-2 h-[500px]">
      <div className="border w-4/12 overflow-y-scroll shadow select-none">
          <h2 onClick={handleApper} className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>Appearance</h2>
          <h2 onClick={handleGeneral} className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>General Settings</h2>
          <h2 onClick={handleEmail} className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>Email Settings</h2>
          <h2 onClick={handleSms} className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>SMS Settings</h2>
          <h2 onClick={handleLogin} className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>Login Settings</h2>
          <h2 onClick={handleMessage}className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>Message Settings</h2>
          <h2 onClick={handleModeration} className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>Moderation</h2>
          <h2 onClick={handleNotifiactions} className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>Notifications</h2>
          <h2 onClick={handleIP} className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>IP Intelligence</h2>
          <h2 onClick={handlePWA}className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>PWA Settings</h2>
          <h2 onClick={handleRealtime} className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>Realtime Settings</h2>
          <h2 onClick={handleLanding}className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>Landing Page</h2>
          <h2 onClick={handleWelcome} className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>Welcome Screen</h2>
          <h2 onClick={handleCustomCss}className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>Custom CSS</h2>
          <h2 onClick={handleCustomJs} className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>Custom JS</h2>
          <h2 onClick={handleRebuildCache} className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>Rebuild Cache</h2>
          <h2 onClick={handleSystemInfo}className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>System Info</h2>
          <h2 onClick={handleHeadersAndFooters} className={`w-full pl-10 ${theme ? "bg-gray-500 text-white hover:bg-gray-600":"bg-white text-black hover:bg-slate-200"} rounded mt-1 cursor-pointer py-2 text-md`}>Headers & Footers</h2>
      </div>
      <div className="p-3 border w-9/12">
        <h3 className="text-center text-lg pb-1 font-serif text-primary">{settings}</h3>
       {
          settings==='General Settings'||settings==='Email Settings'||settings==='SMS Settings'||settings==='Login Settings'||settings==="Message Settings"||settings==="Moderation"||settings==="Notifications"||settings==="IP Intelligence"||settings==="PWA Settings"||settings==="Realtime Settings"||settings==="Landing Page"||settings==="Welcome Screen"||settings==="Custom CSS"|| settings==="Custom JS"|| settings==="Rebuild Cache"||settings=== "System Info"||settings==="Headers & Footers"? null :  settingsOut?.map((setting,index)=> <DropDown theme={theme} key={index} handleAppers={handleAppers} setting={setting}/> )
       }
       {
       settings==='General Settings'||settings==='Email Settings'||settings==='SMS Settings'||settings==='Login Settings'||settings==="Message Settings"||settings==="Moderation"||settings==="Notifications"||settings==="IP Intelligence"||settings==="PWA Settings"||settings==="Realtime Settings"||settings==="Landing Page"||settings==="Welcome Screen"||settings==="Custom CSS"|| settings==="Custom JS"|| settings==="Rebuild Cache"||settings=== "System Info"||settings==="Headers & Footers"? null : Appearances === '-----' ? null : settingsOut?.map((setting,index)=><DropDown theme={theme} key={index} setting={setting?.optionThenLocation} />)
       }
        {
          settings==='General Settings' && <SettingGeneral theme={theme}/>
        }
        {
          settings==='Email Settings' && <EmailSettings theme={theme}/>
        }
        {
          settings==='SMS Settings' && <SmsSetting theme={theme}/>
        }
        {
          settings==='Login Settings' && <LoginSetting theme={theme}/>
        }
        {
          settings === "Message Settings" && <MessageSetting theme={theme}/>
        }
        {
          settings === "Moderation" && <ModerationSettings theme={theme}/>
        }
        {
          settings === "Notifications" && <Notifications theme={theme}/>
        }
        {
          settings === "IP Intelligence" && <IpSettings theme={theme}/>
        }
        {
          settings === "PWA Settings" && <PwaSettings theme={theme}/>
        }
        {
          settings === "Realtime Settings" && <RealtimeSettings theme={theme}/>
        }
        {
          settings === "Landing Page" && <LandingPages theme={theme}/>
        }
        {
          settings === "Welcome Screen" && <WelcomeScreen theme={theme}/>
        }
        {
          settings === "Custom CSS" && <CustomCss theme={theme}/>
        }
        {
          settings === "Custom JS" && <CustomCss theme={theme}/>
        }
        {
          settings === "Rebuild Cache" && <RebuildCache theme={theme} />
        }
        {
          settings === "System Info" && <SystemInfo System={true} theme={theme}/>
        }
        {
          settings === "Headers & Footers" && <CustomCss theme={theme}/>
        }
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};
export default Modal;
