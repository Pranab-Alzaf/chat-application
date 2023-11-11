const DropDown = ({ setting, handleAppers ,theme}) => {
  const { lebel, option } = setting;

  return (
    <div>
      <div className="flex flex-col gap-1 mt-2 w-full">
        <label
          className={`text-sm font-medium ${theme ? "text-gray-100":"text-gray-500"} mt-0.5`}
          htmlFor="name"
        >
          {lebel}
        </label>
        <select
          onChange={handleAppers}
          className="py-2 text-sm focus:outline-none border border-gray-200 pl-2 rounded-lg mt-0.5 text-md font-medium text-gray-600"
          name=""
          id=""
        >
          {option?.map((drop, index) => (
            <option
              key={index}
              className="text-md font-medium text-gray-600"
              value={drop}
            >
              {drop}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDown;
