import React from 'react';

interface FloatingInputProps {
  id: string;
  value: string;
  name: string;
  handleChange: (id: string, value: string) => void;
  error?: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({ id, value, name, handleChange, error }) => {
  return (
    <div>
      <div className="relative">
        {id !== "message" ? (
          <input 
            type="text" 
            id={id} 
            value={value} 
            onChange={(e) => handleChange(id, e.target.value)} 
            className={`block px-2.5 pb-2.5 pt-4 w-full text-xl sm-mx:text-lg xs-mx:text-base sm-mx:pb-1 sm-mx:pt-2 rounded-xl text-white bg-transparent border border-textColor appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none ${error ? "border-red-500" : ""} focus:ring-0 focus:border-primaryColor peer`} 
            placeholder="" 
          />
        ) : (
          <textarea 
            value={value} 
            name={id} 
            id={id} 
            onChange={(e) => handleChange(id, e.target.value)} 
            rows={4} 
            className={`block px-2.5 pb-2.5 xs-mx:text-base pt-4 w-full text-xl sm-mx:text-lg rounded-xl text-white bg-transparent border border-textColor ${error ? "border-red-500" : ""} appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 focus:border-primaryColor peer`} 
            placeholder="" 
          />
        )}

        <label 
          htmlFor={id} 
          className={`absolute text-xl sm-mx:text-lg xs-mx:text-base text-textColor duration-300 transform -translate-y-4 scale-100 top-1 z-10 origin-[0] bg-bgColor px-2 peer-focus:px-2 peer-focus:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 ${id !== "message" ? "peer-placeholder-shown:top-1/2" : "peer-placeholder-shown:top-6"} peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
        >
          {name}
        </label>
      </div>

      {error && <div className="text-red-500 sm-mx:text-sm xs-mx:text-xs ml-1 mt-1">{error}</div>}
    </div>
  );
}

export default FloatingInput;
