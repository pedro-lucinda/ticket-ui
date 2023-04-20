import { useMemo } from 'react'
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
  const event = useMemo(() => events?.find((e) => e.id === id), [])

  return <>{event && <TicketView id={id} event={event} />}</>
}
