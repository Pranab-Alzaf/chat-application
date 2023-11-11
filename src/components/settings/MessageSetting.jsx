import React from "react";
import Input from "../Input";
import SelectedValue from "../SelectedValue";

const MessageSetting = ({theme}) => {
  return (
    <div>
      <div>
        <div className={`w-full bg-white mx-auto h-[430px] overflow-y-scroll `}>
          <div className={`${theme ? "bg-slate-300":"bg-gray-50"}  border border-gray-200 mt-2 pb-2`}>
            <Input lebel={"Messages per Call*"} defaultValue={25} type={"number"} />
            <SelectedValue lebel={"Message Alignment"} option={["-----", "left", "Right"]} />
            <SelectedValue lebel={"Message Alignment [Own]"} option={["-----", "left", "Right"]} />
            <SelectedValue lebel={"Send message with Enter key"} option={["-----", "enable", "Disable"]} />
            <SelectedValue lebel={"GIF Search Engine"} option={["-----", "Disable", "Tenor", "gfyCat", "GIPHY"]} />
            <Input lebel={"GIF Search Engine API"} type={"text"} />
            <Input lebel={"GIFs Per Load"} defaultValue={25} type={"number"} />
            <SelectedValue lebel={"GIF Content Filtering"} option={["-----", "High", "Midium", "Low", "Off"]} />
            <Input lebel={"Minimum Message Length"}  defaultValue={1} type={"number"} />
            <Input lebel={"Maximum Message Length"} defaultValue={2000} type={"number"} />
            <Input lebel={"Add Read More button if height greater than (px)"} defaultValue={250} type={"number"}/>
            <SelectedValue lebel={"Display Username instead of Full Name in Group Chats"} option={["-----", "Enable", "Disable"]} />
            <SelectedValue lebel={"Display Username instead of Full Name in Private Chats"} option={["-----", "Enable", "Disable"]} />
            <SelectedValue lebel={"Show Timestamp on Mouseover"} option={["-----", "Enable", "Disable"]} />
            <Input lebel={"Default Background Image [Group Chat]"} type={"file"} />
            <Input lebel={"Default Background Image [Private Chat]"} type={"file"} />
            
          </div>
          <div className={`${theme ? "bg-slate-300":"bg-white"} flex justify-end gap-5 py-4 pr-3`}>
            <button className="font-bold border px-4 rounded">Cancel</button>
            <button className="bg-primary px-6 py-1 text-white rounded">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSetting;
