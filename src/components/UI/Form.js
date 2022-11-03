import React from 'react'

export const Form = ({ id, name, type, placeholder, label }) => {
  return (
    <form className="mt-4 ">
        <label for={name} className="block text-[#F5F5F5]">
            {label}
        </label>
        <input
            id={id}
            name={name}
            type={type}
            reqiured
            className="rounded mb-4 mt-1 focus:outline-none bg-transparent border p-2 text-[14px] w-full border-[#404040]"
            placeholder={placeholder}
        />
    </form>
  )
}


export const Textarea = ({ id, name, type, placeholder, label }) => {
  return (
    <form className="mt-4 ">
        <label for={name} className="block text-[#F5F5F5]">
            {label}
        </label>
        <textarea
            id={id}
            name={name}
            type={type}
            reqiured
            className="rounded mb-4 mt-1 focus:outline-none bg-transparent border p-2 text-[14px] w-full border-[#404040]"
            placeholder={placeholder}
        ></textarea>
    </form>
    )
}
