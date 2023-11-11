import React from 'react';

const CheckBox = ({lebel,checkName,defaultCheck}) => {
    return (
        <div className='px-4 mt-1.5'>
        <h2 className="text-sm font-medium text-gray-500">{lebel}</h2>
        <div className="w-full border p-2.5 mt-1 rounded-lg  flex flex-col gap-1.5  ">
          {
            checkName?.map((name,index)=>(<div key={index} className="flex gap-2 text-gray-500">
            <input key={index} type="checkbox" defaultChecked={defaultCheck}/>
            <p className="text-sm font-semibold">{name}</p>
          </div>))
          }
         
           </div>
    
       </div>
    );
};

export default CheckBox;