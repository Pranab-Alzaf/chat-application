import React from 'react';
import SelectedValue from '../SelectedValue';
import Input from '../Input';

const IpSettings = ({theme}) => {
    return (
<div>
    <div>
        <div className={`w-full bg-white mx-auto h-[430px] overflow-y-scroll `}>
          <div className={`${theme ? "bg-slate-300":"bg-gray-50"} border border-gray-200 mt-2 pb-2`}>
              <SelectedValue lebel={"IP Intelligence"} option={["-----", "Enable", "Disable"]} />
              <Input lebel={"API Key"} type={"text"} />
              <Input lebel={"Probability"} defaultValue={50} type={"text"} />
              <SelectedValue lebel={"IP Intelligence"} option={["-----", "Yes", "No"]} />
              <SelectedValue lebel={"Validate on User Signup"} option={["-----", "Yes", "No"]} />
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

export default IpSettings;