import { Suspense, useMemo } from 'react'
import { LoadingComponent } from '@/components/modules/loading'
import { useEventStore } from '@/store'
import { TicketView } from '@/views/tickets/ticket'

interface ITicketProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ITicketProps) {
  return { title: `product ${params.id}` }
}

export default function Ticket({ params }: ITicketProps) {
  const { id } = params
  const events = useEventStore.getState().events
  const event = useMemo(() => events?.find((e) => e.id === id), [events, id])

  return (
    <>
      <Suspense fallback={<LoadingComponent />}>
        {event && <TicketView id={id} event={event} />}
      </Suspense>
    </>
  )
}
