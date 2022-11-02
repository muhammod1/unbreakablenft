import React from "react";

const SalesSection = ({ title, desc, buttonText }) => {
  return (
    <div>
      <div className="mt-14 flex flex-col sm:flex-row justify-between gap-2 px-4 py-2 sm:px-6 rounded-md items-center mx-2 min-h-[110px] bg-yellow">
        <div className="flex flex-col lg:gap-10 lg:flex-row lg:justify-between lg:items-center">
          <h4 className="font-audio text-2xl">
            <span className="inline sm:block">{title}</span>
          </h4>
          <p className="text-[#262626] max-w-[583px] w-full text-lg">{desc}</p>
        </div>
        <button className="bg-[#262626] p-3 w-full sm:w-fit rounded-md text-yellow text-sm">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SalesSection;
