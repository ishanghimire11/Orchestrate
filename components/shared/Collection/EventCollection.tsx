import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { formattedDateAndTime } from "@/lib/utils";
import Section from "../Section";
import { IEvent } from "@/lib/database/models/event.model";

type EventCollectionProps = {
  data?: IEvent[];
  limit?: number;
  page?: number | string;
  totalPage?: number;
};

const EventCollection = async ({
  data,
  limit,
  page,
  totalPage,
}: EventCollectionProps) => {
  const events = data;

  return (
    <Section id="eventList" className="py-24">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <h2 className="text-3xl md:text-4xl font-medium">Our Events</h2>
        {events && events.length > 0 && (
          <Link
            href="/events"
            className="flex hover:underline text-sm md:text-base gap-x-1 items-center px-4 py-1.5 border border-gray-300 rounded-md"
          >
            <span className="font-medium">See More</span>
            <ArrowRight className="w-4 h-4 *:md:w-5 md:h-5" />
          </Link>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-16">
        {events && events?.length > 0 ? (
          events.map((event) => {
            const startDate = formattedDateAndTime(event.startDateTime);
            return (
              <Link
                href={`/events/${event._id && event._id}`}
                key={event._id}
                className="group transition-all duration-300"
              >
                <img
                  src={event.imageUrl}
                  alt="Event Photo"
                  className="rounded-md h-48 w-full object-cover"
                />

                <div className="pt-2">
                  <div className="gap-x-2 my-2 flex items-center">
                    <p className="bg-green-200 text-green-900 font-semibold rounded-full py-1 px-2 w-fit text-xs">
                      {event.isFree ? "Free" : `Rs. ${event.price}`}
                    </p>
                    <p className="bg-gray-300 text-gray-900 rounded-full py-1 px-2 w-fit text-xs">
                      {event.category.name}
                    </p>
                  </div>
                  <div className="flex space-x-4 justify-between items-center">
                    <h3 className="font-medium tracking-wide text-xl group-hover:underline">
                      {event.title}
                    </h3>
                  </div>

                  <p className="text-blue-600 font-medium text-sm">
                    <span className="pr-2">{startDate.formatedDate}</span>
                    <span className="pl-2 border-l border-l-blue-600 leading-1">
                      {startDate.formatedTime}
                    </span>
                  </p>
                </div>
              </Link>
            );
          })
        ) : (
          <div>
            <p>No events found.</p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default EventCollection;
