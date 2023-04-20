'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useMemo } from 'react'
import Button from '@/components/elements/button'
import { EventCard } from '@/components/modules/event-card'
import { useEventStore } from '@/store'

type Props = {
  showAll?: boolean
  numberOfEventsToDisplay?: number
}
export const EventList = ({
  showAll = true,
  numberOfEventsToDisplay = 8,
}: Props) => {
  const router = useRouter()
  const events = useEventStore((state) => state.events)

  const eventsList = useMemo(() => {
    if (showAll) return events

    return events && events?.length > 0
      ? events?.slice(0, numberOfEventsToDisplay)
      : null
  }, [events, numberOfEventsToDisplay, showAll])

  return (
    <div className="flex flex-col w-full md:max-screen-size mx-auto my-10">
      <section className="flex md:align-baseline max-md:mx-auto">
        <h1 className="font-bold text-2xl max-md:text-center">
          Upcoming Events
        </h1>
      </section>
      <section className="flex md:flex-wrap max-md:flex-col max-md:items-center w-full gap-4 my-10">
        {eventsList?.map((event) => (
          <EventCard {...event} key={event.id} />
        ))}
      </section>
      {!showAll && (
        <Button
          variant="outlinePurple"
          label="See More"
          size="md"
          className="self-center w-[200px]"
          onClick={() => router.push('/tickets')}
        />
      )}
    </div>
  )
}
