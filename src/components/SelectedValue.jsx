import React from 'react';

const SelectedValue = ({lebel,option}) => {
    return (
        <div className="flex flex-col gap-1 mt-2 mx-4 ">
        <label className="text-sm font-medium text-gray-500 mt-0.5" htmlFor="name">
        {lebel}
        </label>
        <select
          className=" py-2 text-sm focus:outline-none border border-gray-200 pl-2 rounded-lg mt-0.5 text-md font-medium text-gray-600"
          name=""
          id=""
        >
            {
                option?.map((ops,index)=> <option key={index} className="text-md font-medium text-gray-600" 
                value="English"
              >
                {ops}
              </option>)
            }

        </select>
      </div>

    );
};

export default SelectedValue;