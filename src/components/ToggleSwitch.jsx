import React, { useState } from 'react'

const ToggleSwitch = () => {
    const [val,setVal]=useState(false);
    const handleToggleSwitch=()=>{
        setVal(!val);
    }
    return (
        
        <div
      className={`bg-blue-300 rounded-full h-32 w-56 flex justify-start items-center p-5 ${
        val ? "bg-black" : "bg-teal-300"
      }`}
      onClick={handleToggleSwitch}
    >
      <div
        className={`h-24 w-24 flex justify-center items-center ${
          val
            ? "bg-red-300 transition-all translate-x-0"
            : "bg-indigo-500 translate-x-20 transition-all"
        } rounded-full`}
      >
        <span className="switch-state">{val ? "ON" : "OFF"}</span>
      </div>
    </div>
  );
}

export default ToggleSwitch
