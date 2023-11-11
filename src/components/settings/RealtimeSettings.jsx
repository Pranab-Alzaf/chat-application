import React from 'react';
import SelectedValue from '../SelectedValue';
import Input from '../Input';
import CheckBox from '../CheckBox';

const RealtimeSettings = ({theme}) => {
    return (
<div>
    <div>
      <div>
        <div className={`w-full bg-white mx-auto h-[430px] overflow-y-scroll `}>
          <div className={`${theme ? "bg-slate-300":"bg-gray-50"}  border border-gray-200 mt-2 pb-2`}>
            <Input lebel={"Change to Idle Status After (Minutes)"} defaultValue={3} type={"number"} />
            <Input lebel={"Change to Offline Status After (Minutes)"} defaultValue={5} type={"number"} />
            <Input lebel={"Chat Refresh Rate (Milliseconds)*"} defaultValue={3000} type={"number"} />
            <Input lebel={"Timeout Seconds (Long Polling)"} defaultValue={1} type={"number"} />
            <SelectedValue
              lebel={"Image Moderation"}
              option={["-----", "case close", "Decay","Deduction","girl hey","Hold on","Hollow",'I did it']}
            />

            <CheckBox lebel={"Play a Notification Sound"} checkName={["On New Message","On New Site Notification","On Group Unread Count Change","On Private Conversation Unread Count Change"]} defaultCheck={true}/>
            <SelectedValue
              lebel={"Image Moderation"}
              option={["-----", "yes",'No']}
            />

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
</div>
    );
};

export default RealtimeSettings;