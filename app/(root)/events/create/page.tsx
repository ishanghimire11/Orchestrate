import React from 'react'
import { auth } from '@clerk/nextjs'
import EventForm from '@/components/shared/EventForm'
import Section from '@/components/shared/Section'

const CreateEvent = () => {
  const gg = auth();
  const { sessionClaims } = auth();
  const userId = sessionClaims?.sub as String;

  return (
    <Section className='py-20'>
      <h3 className='text-2xl font-bold lg:text-3xl w-full mb-16'>Create Event</h3>
      
      <div>
        <EventForm userId={userId} type="create"/>
      </div>
    </Section>
  )
}

export default CreateEvent;