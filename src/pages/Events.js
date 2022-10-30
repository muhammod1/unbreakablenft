import React from "react";
import { pastEventData, currentEventData } from "../assets/data";
import { EventCard } from "../components";

const Events = () => {
  return (
    <div className="mt-14 mx-6 md:mx-20">
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
  );
};

export default Events;
