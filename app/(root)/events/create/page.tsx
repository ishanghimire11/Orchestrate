import React from "react";
import { auth } from "@clerk/nextjs";
import EventForm from "@/components/shared/EventForm";
import Section from "@/components/shared/Section";

const CreateEvent = () => {
  const { sessionClaims } = auth();
  //@ts-ignore
  const userId = sessionClaims.userId.userId as string;

  return (
    <Section className="py-12 md:py-16 lg:py-20">
      <h3 className="text-2xl font-bold lg:text-3xl w-full mb-8 md:mb-16">
        Create Event
      </h3>

      <div>
        <EventForm userId={userId} type="create" />
      </div>
    </Section>
  );
};

export default CreateEvent;
