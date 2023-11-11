import React from 'react';
import SelectedValue from '../SelectedValue';
import Input from '../Input';

const EmailSettings = ({theme}) => {
    return (
<div>
    <div>
        <div className={`w-full bg-white mx-auto h-[430px] overflow-y-scroll`}>
        <div className={`${theme ? "bg-slate-300":"bg-gray-50"}  border border-gray-200 mt-2 pb-2`}>

           <SelectedValue lebel={"SMTP Authentication"} option={[ "-----","Enable","Disable"]}/>
           <Input lebel={"System Email Address"} defaultValue={"email@yourdomain.test"} type={"email"}/>
           <Input lebel={"SMTP Host"} type={"text"}/>
           <Input lebel={"SMTP Username"} type={"text"}/>
           <Input lebel={"SMTP Password"} type={"text"}/>
           <SelectedValue lebel={"SMTP (SSL/TLS)"} option={["SSL", "TSL"]} />
           <Input lebel={"Sender Name"} defaultValue={"Site Name"} type={"text"}/>
           <SelectedValue lebel={"SMTP Port"} option={["-----",25,403,587,2525]} />
           <SelectedValue lebel={"Self-signed Certificate"} option={["-----", "Yes", "No"]}/> 
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

export default EmailSettings;