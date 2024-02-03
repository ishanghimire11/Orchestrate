import React from "react";
import { auth } from "@clerk/nextjs";
import EventForm from "@/components/shared/EventForm";
import Section from "@/components/shared/Section";

const UpdateEvent = () => {
  const gg = auth();
  const { sessionClaims } = auth();
  const userId = sessionClaims?.sub as string;

  return (
    <Section className="py-8">
      <h3 className="text-2xl font-bold lg:text-3xl w-full text-center">
        Update Event
      </h3>

      <div>
        <EventForm userId={userId} type="update" />
      </div>
    </Section>
  );
};

export default UpdateEvent;
