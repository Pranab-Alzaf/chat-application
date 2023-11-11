import React from "react";
import Input from "../Input";
import SelectedValue from "../SelectedValue";
import CheckBox from "../CheckBox";

const ModerationSettings = ({theme}) => {
  return (
    <div>
      <div>
        <div className={`w-full bg-white mx-auto h-[430px] overflow-y-scroll `}>
          <div className={`${theme ? "bg-slate-300":"bg-gray-50"} border border-gray-200 mt-2 pb-2`}>
            <SelectedValue lebel={"Image Moderation"} option={["-----", "Enable", "Disable"]} />
            <Input lebel={"Sightengine API user"} type={"text"} />
            <Input lebel={"Sightengine API Secret   "} type={"text"} />

            <CheckBox
              lebel={"Delete Images that contain"}
              checkName={[
                "Partial Nudity",
                "Explicit Nudity",
                "Weapons, Alcohol & Drugs",
                "Offensive Signs & Gestures",
                "Graphic Violence & Gore",
              ]} 
              defaultCheck={true} />

            <Input lebel={"Minimum Score Required [Partial Nudity] %"} defaultValue={40} type={"number"} />
            <Input lebel={"Minimum Score Required [Explicit Nudity] %"} defaultValue={60} type={"number"} />
            <Input lebel={"Minimum Score Required [Weapons, Alcohol & Drugs] %"} defaultValue={60} type={"number"} />
            <Input lebel={"Minimum Score Required [Offensive Signs & Gestures] %"} defaultValue={60} type={"number"} />
            <Input lebel={"Minimum Score Required [Graphic Violence & Gore] %"} defaultValue={70} type={"number"} />
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

export default ModerationSettings;
