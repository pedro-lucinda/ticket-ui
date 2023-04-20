'useClient'

import { EventCard } from '@/components/modules/event-card'
import { useEventStore } from '@/store'

export const TicketsView = () => {
  const events = useEventStore.getState().events
  return (
    <div className="flex flex-col gap-5 md:max-screen-size py-10">
      <h1 className="text-center font-bold text-3xl">Tickets</h1>
      <section className="flex md:flex-wrap max-md:flex-col max-md:items-center w-full gap-10 my-10 mx-auto justify-center">
        {events?.map((event) => (
          <EventCard {...event} key={event.id} />
        ))}
      </section>
    </div>
  )
}
