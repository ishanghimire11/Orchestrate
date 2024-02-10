import { getEventDetails } from "@/lib/actions/event.action";
import Link from "next/link";
import { SearchParamProps } from "@/types";
import { Event } from "@/types";
import {
  Banknote,
  CalendarRangeIcon,
  LinkIcon,
  LucideClock,
  MapIcon,
  Settings2,
  User2,
} from "lucide-react";
import { auth } from "@clerk/nextjs";

const EventDetails = async ({ params: { id } }: SearchParamProps) => {
  const event = (await getEventDetails(id)) as Event;

  const { sessionClaims } = auth();
  const isEventOrganizer =
    (sessionClaims?.userId &&
      // @ts-ignore
      sessionClaims.userId.userId.toString() ===
        event.organizer._id.toString()) ||
    false;

  const startDate = new Date(event.startDateTime).toLocaleString("default", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const endDate = new Date(event.endDateTime).toLocaleString("default", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const startTime = new Date(event.startDateTime).toLocaleString("default", {
    timeStyle: "short",
  });

  const endTime = new Date(event.endDateTime).toLocaleString("default", {
    timeStyle: "short",
  });

  return (
    <div className="max-w-4xl mx-auto py-10 lg:py-20 px-4 md:px-6">
      <div className="mb-6 relative  overflow-hidden">
        <img
          src={event.imageUrl}
          alt="event-image"
          className="rounded-md w-full h-full object-cover"
        />
      </div>

      <div>
        <div className="space-y-6">
          <div className="flex justify-between items-center gap-x-2">
            <div className="bg-blue-500 text-white px-4 py-2 text-sm w-fit rounded-full font-medium">
              <p>{event.category.name}</p>
            </div>
            {isEventOrganizer && (
              <Link
                href={`/events/${id}/update`}
                className="flex gap-x-2 border-gray-300 border rounded-md py-2 px-4 hover:border-gray-400"
              >
                <Settings2 className="text-gray-800 w-5 h-5" />
                Update
              </Link>
            )}
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-semibold capitalize">
              {event.title}
            </h1>
          </div>

          <p className="text-gray-400 flex gap-x-2 items-center">
            <User2 className="text-gray-400 w-5 h-5" />
            <span className="font-medium text-gray-800">
              {event.organizer.firstName} {event.organizer.lastName}
            </span>
          </p>

          <div className="flex flex-col md:divide-x-2 gap-6 justify-center items-start md:flex-row md:justify-start md:items-center">
            <div className="text-gray-400 flex items-center gap-x-2">
              <CalendarRangeIcon className="text-gray-400 w-5 h-5" />
              {startDate === endDate ? (
                <span className="text-gray-800 font-medium">{startDate}</span>
              ) : (
                <span className="text-gray-800 font-medium">
                  {startDate} to {endDate}
                </span>
              )}
            </div>

            <div className="text-gray-400 flex gap-x-2 items-center md:pl-6">
              <LucideClock className="text-gray-400 w-5 h-5" />
              <span className="text-gray-800 font-medium">
                {startTime} to {endTime}
              </span>
            </div>
          </div>
          <div className=" flex gap-x-2 items-center">
            <Banknote className="text-gray-400 w-5 h-5" />
            <span className="text-gray-800 font-medium">
              {event.isFree ? "Free" : `Rs ${event.price}`}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <MapIcon className="text-gray-400 w-5 h-5" />
            <span className="text-gray-800 font-medium">{event.location}</span>
          </div>

          <div className="pb-4">
            <Link
              href={`${event.eventUrl}`}
              target="_blank"
              className="flex items-center gap-x-2 w-fit underline"
            >
              <LinkIcon className="text-gray-400 w-5 h-5" />
              <span className="font-semibold text-gray-800">Learn more</span>
            </Link>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold pb-2 text-gray-800">
              What you'll learn
            </h2>
            <p className="text-lg">{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
