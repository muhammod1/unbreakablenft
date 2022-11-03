import React from 'react'

export const Form = ({ id, type, placeholder, label }) => {
  return (
    <form className="mt-4 ">
        <label for={id} className="block text-[#F5F5F5]">
            {label}
        </label>
        <input
            id={id}
            type={type}
            reqiured
            className="text-grey_p rounded mb-4 mt-1 focus:outline-none bg-transparent border p-2 text-[14px] w-full border-[#404040]"
            placeholder={placeholder}
        />
    </form>
  )
}


export const IconForm = ({ id, type, placeholder, label, icon }) => {
  return (
    <div className="mt-4 relative ">
        <label for={id} className="block text-[#F5F5F5]">
            {label}
        </label>
        <input
            id={id}
            type={type}
            reqiured
            className="text-grey_p rounded mb-4 mt-1 focus:outline-none bg-transparent border p-2 text-[14px] w-full border-[#404040]"
            placeholder={placeholder}
        />
        <div class="text-grey_p flex absolute inset-y-0 right-7 top-3 items-center pl-3 pointer-events-none">
            {icon}
        </div>
    </div>
    )
}

export const Textarea = ({ id, type, placeholder, label }) => {
    return (
      <div className="mt-4 ">
          <label for={id} className="block text-[#F5F5F5]">
              {label}
          </label>
          <textarea
              id={id}
              type={type}
              reqiured
              className="rounded mb-4 mt-1 focus:outline-none bg-transparent border p-2 text-[14px] w-full border-[#404040]"
              placeholder={placeholder}
          ></textarea>
      </div>
      )
  }

  export const Submit = ({ type, text }) => {
    return (
        <button
            type={type}
            className="block w-full text-md  bg-yellow mt-5 py-2 rounded-lg  hover:-translate-y-1 transition-all duration-500  mb-2"
        >
            {text}
        </button>
        
    )
  }