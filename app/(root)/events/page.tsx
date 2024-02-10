import React from "react";
import Link from "next/link";

import { PlusIcon } from "lucide-react";
import { formattedDateAndTime } from "@/lib/utils";
import { getAllEvents } from "@/lib/actions/event.action";
import Section from "@/components/shared/Section";

const Events = async () => {
  const events = await getAllEvents();
  return (
    <Section id="eventList" className="py-16 md:py-20 lg:py-24">
      <div className="flex justify-end gap-x-4 items-center mb-4">
        <Link
          href="/events/create"
          className="inline-flex gap-x-1 font-semibold items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 border border-blue-600 text-white"
        >
          <PlusIcon className="w-5 h-5" />
          <span>Create Event</span>
        </Link>
      </div>

      <h2 className="text-3xl md:text-4xl font-medium pb-8">Our Events</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-16">
        {events &&
          events.map((event) => {
            const startDate = formattedDateAndTime(event.startDateTime);
            return (
              <Link
                href={`/events/${event._id}`}
                key={event._id}
                className="group transition-all duration-300"
              >
                <img
                  src={event.imageUrl}
                  alt="Event Photo"
                  className="rounded-md h-48 w-full object-cover"
                />

                <div className="pt-2">
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
          })}
      </div>
    </Section>
  );
};

export default Events;
