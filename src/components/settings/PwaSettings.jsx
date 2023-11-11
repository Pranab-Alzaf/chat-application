import React from 'react';
import SelectedValue from '../SelectedValue';
import Input from '../Input';
import TextArea from '../TextArea';

const PwaSettings = ({theme}) => {
    return (
<div>
  <div>
    <div className={`w-full bg-white mx-auto h-[430px] overflow-y-scroll `}>
    <div className={`${theme ? "bg-slate-300":"bg-gray-50"} border border-gray-200 mt-2 pb-2`}>
     <SelectedValue lebel={"Progressive Web Application"} option={[ "-----","Enable","Disable"]} />
     <Input lebel={"Application Name"} defaultValue={"pvtChats"} type={"text"} />
     <Input lebel={"Application Short Name"} defaultValue={"pvtChats"} type={"text"} />
     <TextArea lebel={"Description"} defaultValue={"Share what is on your mind with other people from all around the world to find new friends."}/>
     <Input lebel={"Background Color"} defaultValue={"#000000"} type={"text"} />
     <Input lebel={"Theme Color"} defaultValue={"#020202   "} type={"text"} />
     <SelectedValue lebel={"Progressive Web Application"} option={[ "-----","Standalon","minimal ui",'full screen',"Browser"]} />
     <Input lebel={"PWA icon"} type={"file"} />  
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

export default PwaSettings;