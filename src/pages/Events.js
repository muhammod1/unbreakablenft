import React from "react";
import { pastEventData, currentEventData } from "../assets/data";
import { EventCard } from "../components";
import {
  eventimage1,
  eventimage,
  eventimage2,
  eventimage3,
  eventimage4,
} from "../assets";
const Events = () => {
  return (
    <div>
      <div className="flex relative max-h-[468px]">
        <div className="mt-14 mx-6 absolute bottom-6  md:mx-20">
          <h4 className="text-head_white font-audio text-5xl sm:text-7xl">
            <span className="block">The Unbroken</span> Events
          </h4>
        </div>
        <div className=" flex-1">
          <img
            className="h-full w-full object-cover"
            src={eventimage}
            alt="events"
          />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <img className="w-full object-cover" src={eventimage1} alt="events" />
          <img className="w-full object-cover" src={eventimage2} alt="events" />
          <img className="w-full object-cover" src={eventimage3} alt="events" />
          <img className="w-full object-cover" src={eventimage4} alt="events" />
        </div>
      </div>
      <div className="mt-14 mx-6  md:mx-20">
        <div className="mb-14 ">
          <h4 className="self-start font-audio text-2xl text-head_white">
            Current Events
          </h4>
          {currentEventData.length > 0 && (
            <div className="mt-6 flex gap-4  flex-wrap">
              {currentEventData.map((data) => (
                <EventCard key={data.date} {...data} />
              ))}
            </div>
          )}
        </div>
        <div className="mb-14">
          <h4 className="self-start font-audio text-2xl text-head_white">
            Past Events
          </h4>
          {pastEventData.length > 0 && (
            <div className="mt-6 flex gap-4 flex-wrap">
              {pastEventData.map((data) => (
                <EventCard key={data.date} {...data} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;