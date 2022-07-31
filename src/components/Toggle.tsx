import { useState } from "react";

export default function Toggle(){
  const [ check, setCheck ] = useState(false);

  const handleCheck = () => {
    setCheck(prevState => !prevState)
  }

  return (
    <div className="flex items-center text-white gap-2">
      <span>°F</span>
      <label className={`w-10 h-6  ${!check? 'bg-toggleBG' : 'bg-[#D2B3C1]'} rounded-full flex items-center justify-center relative transition-colors`} >
        <input type="checkbox" name="toggle" id="toggle" 
          onClick={handleCheck}
          className='h-full w-full opacity-0'
        />
        <span 
          className={`w-4 h-4 absolute bg-[#D9D9D9] rounded-full cursor-pointer left-1 ${check? 'left-1/2': ''} ease-out duration-200`}
        />
      </label>
      <span>°C</span>
    </div>
  )
}