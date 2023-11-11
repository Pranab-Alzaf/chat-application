import React from 'react';
import SelectedValue from '../SelectedValue';

const CustomCss = ({theme}) => {
    return (
        <div>
        <div>
 <div className={`w-full bg-white mx-auto h-[430px] overflow-y-scroll `}>
   <div className={`${theme ? "bg-slate-300":"bg-gray-50"}  border border-gray-200 mt-2 pb-2`}>
     <SelectedValue
       lebel={"select a page"}
       option={[ "-----","Chat page","entry page","Landing page","Global css"]}
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
    );
};

export default CustomCss;