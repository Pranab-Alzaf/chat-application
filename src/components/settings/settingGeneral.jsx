import React from "react";
import SelectedValue from "../SelectedValue";
import Input from "../Input";
import TextArea from "../TextArea";

const SettingGeneral = ({theme}) => {   
  return (
    <div>
      <div className={`w-full bg-white mx-auto h-[430px] overflow-y-scroll `}>
        <div className={`${theme ? "bg-slate-300":"bg-gray-50"} border border-gray-200 mt-2 pb-2`}>
          <Input lebel={"Site Name"} defaultValue={"Pvt Chats"} type={"text"} />
          <TextArea lebel={"Site Description"} defaultValue={"Share what is on your mind with other people from all around the world to find new friends." } />
          <Input lebel={"Site Slogan*"} defaultValue={"Your Slogan Goes Here"} type={"text"} />
          <Input lebel={" Meta Title*"} defaultValue={"Meet New Friends on Pvt Chats"} type={"text"} />
          <SelectedValue lebel={"Default Language"} option={["English", "-----"]} />
          <Input lebel={"Site Records per Call*"} defaultValue={23} type={"number"} />
          <SelectedValue  lebel={"Force HTTPS"}  option={["Yes", "No"]} />
          <SelectedValue lebel={"Group Join Confirmation"} option={["-----", "Enable", "Disable"]} />
          <SelectedValue lebel={"View Public Groups without Login"} option={["-----", "Enable", "Disable"]} />
          <Input lebel={"API Secret Key"} defaultValue={"YFIflWsjHg"} type={"text"} />
          <SelectedValue lebel={" Date Format"} option={["Date Month Year", "Year Month Date", " Month Date Year"]} />
          <SelectedValue lebel={"Time Format"} option={["-----", " 12-hours clock", "24-hours clock"]} />
          <SelectedValue lebel={"Autoplay Audio Player"} option={["-----", "Yes", "No"]} />
          <SelectedValue lebel={"Cookie Consent"} option={["-----", "enable", "disable"]} />
          <Input lebel={"Google Analytics ID"} defaultValue={"Your Slogan Goes Here"} type={"text"} />
          <SelectedValue lebel={"Color Scheme"} option={["-----", "Light mood", "Dark mood"]} />
          <SelectedValue lebel={"Default Font"} option={["-----", "Cairo", "Domine", "inter", "poppins", "Roboto"]} />
          <SelectedValue lebel={"FFmpeg"} option={["-----", "Enable", "Disable"]} />
          <Input lebel={"FFmpeg Binaries Path"} defaultValue={"/usr/bin/ffmpeg"} type={"text"} />
          <Input lebel={"FFProbe Binaries Path"} defaultValue={"/usr/bin/ffprobe"} type={"text"} />
          <SelectedValue lebel={"Boxed Layout [Chat Page]"} option={["-----", "Enable", "Disable"]} />
          <TextArea lebel={"Disallowed Slugs"} />
          <SelectedValue lebel={"Mini Audio Player"} option={["-----", "Enable", "Disable"]} />
          <SelectedValue lebel={"Load Group Info on Group Load"} option={["-----", "Enable", "Disable"]} />
          <SelectedValue lebel={"Hide Group Member list from Non members"} option={["-----", "Yes", "No"]} />
          <SelectedValue lebel={"Display full file name of Attachment(s)"} option={["-----", "Yes", "No"]} />
          <SelectedValue lebel={ "View Public Group Messages without being Group Member [Logged in Users]" } option={["-----", "Enable", "Disable"]} />
          <SelectedValue lebel={"Friend System"} option={["-----", "Enable", "Disable"]} />
          <SelectedValue lebel={"People Nearby Feature"} option={["-----", "Enable", "Disable"]} />
          <Input lebel={"People Nearby - Maximum Distance (km)"} defaultValue={100} type={"number"} />
          <SelectedValue lebel={"Adblock Detector"} option={["-----", "Enable", "Disable"]} />
          <SelectedValue lebel={"Compress Video Files"} option={["-----", "Enable", "Disable"]} />
          <SelectedValue lebel={"Compress Image Files  "} option={["-----", "Enable", "Disable"]} />
          <SelectedValue lebel={"Compress Audio Files"} option={["-----", "Enable", "Disable"]} />
          <SelectedValue lebel={"Search on Change of Input"} option={["-----", "Enable", "Disable"]} />
          <SelectedValue lebel={"Show Side Navigation On Load"} option={["-----", "Yes", "No"]} />
          <SelectedValue lebel={"CSRF Token"} option={["-----", "Enable", "Disable"]} />
          <Input lebel={"Favicon"} type={"file"} />
          <Input lebel={"Default Social Share Image"} type={"file"} />
        </div>
        <div className={`${theme ? "bg-slate-300":"bg-white"} flex justify-end gap-5 py-4 pr-3`}>
          <button className="font-bold border px-4 rounded">Cancel</button>
          <button className="bg-primary px-6 py-1 text-white rounded">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingGeneral;
