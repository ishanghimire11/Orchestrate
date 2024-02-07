import React from "react";
import Image from "next/image";
import Link from "next/link";

import heroImage from "@/app/heroImage1.jpg";
import { Button } from "@/components/ui/button";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Section from "@/components/shared/Section";
import { getAllEvents } from "@/lib/actions/event.action";
import { formattedDateAndTime } from "@/lib/utils";
import { ArrowRight, Heart } from "lucide-react";





const EventList = async () => {
  const events = await getAllEvents();
  return (
    <Section id="eventList" className="py-24">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <h2 className="text-3xl md:text-4xl font-medium">Our Events</h2>
        <Link
          href="/events"
          className="flex hover:underline text-sm md:text-base gap-x-1 items-center px-4 py-1.5 border border-gray-300 rounded-md"
        >
          <span className="font-medium">See More</span>
          <ArrowRight className="w-4 h-4 *:md:w-5 md:h-5" />
        </Link>
      </div>

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
                    <span>
                      <Heart className="w-5 h-5" />
                    </span>
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

const Hero = () => {
  return (
    <div>
      <div className="h-[100vh] object-cover flex items-center justify-center relative px-8 md:px-12 lg:px-16">
        <Image
          src={heroImage}
          width={1920}
          height={1080}
          alt="hero"
          className="h-full w-full object-cover absolute z-0 hero-image"
        />
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="z-20 text-center">
          <h1 className="text-5xl md:text-7xl text-white">
            Orchestrate your vision. Elevate your event.
          </h1>
        </div>

        <Button
          type="button"
          className="w-fit z-20 p-0 hover:bg-transparent absolute bottom-24"
          variant={"ghost"}
        >
          <Link
            href="#eventList"
            className="text-white flex flex-col justify-center items-center"
          >
            <CaretDownIcon className="w-16 h-16 animate-bounce" />
            <span>Our Events</span>
          </Link>
        </Button>
      </div>

      <EventList />
    </div>
  );
};

export default Hero;
