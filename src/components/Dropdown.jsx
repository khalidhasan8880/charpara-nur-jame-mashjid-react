
const Dropdown = ({toggleDropdown,selectedOption,isOpen,options,selectOption}) => {
    return (
        <div className="relative">
        <button
          onClick={toggleDropdown}
          className="px-4 py-2 bg-blue-100   rounded-md focus:outline-none">
          {selectedOption}
        </button>
        {isOpen && (
          <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => selectOption(option)}
                className="px-4 py-2 cursor-pointer hover:bg-blue-100">
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};

export default Dropdown;