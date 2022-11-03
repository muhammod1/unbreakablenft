import React from 'react'

export const Form = ({  type, placeholder, label }) => {
  return (
    <div className="flex  flex-col  mt-8  py-2">
        <label className="text-gray-50">{label}</label>
        <input
        // value={value}
        className="bg-transparent text-gray-400 placeholder-[#404040] w-full border-[#404040] outline-none p-2 rounded-lg border-2 "
        type={type}
        placeholder={placeholder}
        />
    </div>
  )
}