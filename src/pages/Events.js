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
import { motion } from "framer-motion";
const Events = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex relative max-h-[468px]"
      >
        <div className="mt-14  absolute bottom-6 right-0 left-0">
          <div className="px-3 sm:px-6 max-w-[1240px] mx-auto ">
            <h4 className="text-head_white text-3xl break-words  font-audio small_l:text-5xl sm:text-7xl">
              <span className="block">The Unbroken</span> Events
            </h4>
          </div>
        </div>
        <div className=" -z-10 flex-1">
          <img
            className="h-full w-full object-cover"
            src={eventimage}
            alt="events"
          />
        </div>
        <div className=" -z-50 flex flex-1 overflow-hidden">
          <img
            className="w-full   object-cover"
            src={eventimage1}
            alt="events"
          />
          <img
            className="w-full   object-cover"
            src={eventimage2}
            alt="events"
          />
          <img
            className="w-full   object-cover"
            src={eventimage3}
            alt="events"
          />
          <img
            className="w-full   object-cover"
            src={eventimage4}
            alt="events"
          />
        </div>
      </motion.div>
      <div className="mt-14 flex flex-col  px-3 sm:px-6 max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-14 "
        >
          <h4 className="  font-audio text-2xl text-head_white">
            Current Events
          </h4>
          {currentEventData.length > 0 && (
            <div className="mt-6 flex gap-4  flex-wrap">
              {currentEventData.map((data) => (
                <EventCard key={data.date} {...data} text="Remind me" />
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-14 "
        >
          <h4 className=" font-audio text-2xl text-head_white">Past Events</h4>
          {pastEventData.length > 0 && (
            <div className="mt-6  flex gap-4 flex-wrap">
              {pastEventData.map((data) => (
                <EventCard key={data.date} {...data} text="Replay" />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
