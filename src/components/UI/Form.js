import React from 'react'


export const Form = ({  required, type, placeholder, label, value, onChangeCallBack }) => {
  return (
    <div className="flex  flex-col  mt-8  py-2">
        <label className="text-gray-50 pb-3">{label}</label>
        <input
        value={value}
        required={required}
        onChange={(e) => onChangeCallBack(e.target.value)}
        className="bg-transparent text-gray-400 placeholder-[#404040] w-full border-[#404040] outline-none p-2 rounded-lg border-2 "
        type={type}
        placeholder={placeholder}
        />
    </div>
  )
}

export const IconForm = ({ icon, type, placeholder, label, value, onChangeCallBack }) => {
    return (
      <div className="flex  flex-col  mt-8   py-2 relative">
        <label className="text-gray-50 pb-3">{label}</label>
        <input
        value={value}
        onChange={(e) => onChangeCallBack(e.target.value)}
        className="bg-transparent text-gray-400 placeholder-[#404040] w-full border-[#404040] outline-none p-2 rounded-lg border-2 "
        type={type}
        placeholder={placeholder}
      />
        <div className="text-grey_p flex absolute inset-y-0 right-10 top-6 items-center pl-3 pointer-events-none">
            {icon}
        </div>
      </div>
    )
}

export const Textarea = ({ message, type, placeholder, label, onChangeCallBack }) => {
    return (
    <div className="flex flex-col  mt-4 mb-8  py-2 ">
    <label className="text-gray-50 pb-3">{label}</label>
    <textarea
        value={message}
        onChange={(e) => onChangeCallBack(e.target.value)}
        rows="4"
        className="bg-transparent text-gray-400 placeholder-[#404040] w-full border-[#404040] outline-none p-2 rounded-lg border-2 "
        type={type}
        placeholder={placeholder}
    />
      </div>
    )
}

export const SubmitBtn = ({ type, text }) => {
    return (
    <button
        type={type}
        className="block w-full bg-yellow mt-5 py-2 rounded-lg  hover:-translate-y-1 transition-all duration-500  mb-2"
    >
        {text}
    </button>
    )
}