import React from 'react';

const TextArea = ({lebel,defaultValue}) => {
    return (
        <div className="flex flex-col gap-1 mt-2 mx-4 ">
        <label
        className="text-sm font-medium text-gray-500 mt-0.5"
        htmlFor="name"
        >
        {lebel}
        </label>
        <textarea
          defaultValue={defaultValue}
          className="w-full py-2 text-sm focus:outline-none border border-gray-200 pl-2 rounded-lg"
          id="name"
          type="text"
        />
      </div>
    );
};

export default TextArea;