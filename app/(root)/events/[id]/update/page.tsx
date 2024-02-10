import React from "react";
import { auth } from "@clerk/nextjs";
import EventForm from "@/components/shared/EventForm";
import Section from "@/components/shared/Section";
import { SearchParamProps } from "@/types";
import { getEventDetails } from "@/lib/actions/event.action";

const UpdateEvent = async ({ params: { id } }: SearchParamProps) => {
  const { sessionClaims } = auth();
  //@ts-ignore
  const userId = sessionClaims.userId.userId as string;

  const event = await getEventDetails(id);

  return (
    <Section className="py-12 md:py-16 lg:py-20">
      <h3 className="text-2xl font-bold lg:text-3xl w-full mb-8 md:mb-16">
        Update Event
      </h3>

      <div>
        {event._id && (
          <EventForm
            userId={userId}
            type="update"
            eventId={event._id}
            event={event}
          />
        )}
      </div>
    </Section>
  );
};

export default UpdateEvent;
