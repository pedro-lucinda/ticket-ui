'use client'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Button from '@/components/elements/button'
import { DescriptionItem } from '@/components/elements/description-item'
import { Input } from '@/components/elements/input'
import { IEvent } from '@/store'
import { utcToMDY } from '@/utils/date/utc-to-mdy'

type Props = {
  event: IEvent
  id: string
}

export const TicketView = ({ event, id }: Props) => {
  const [quantity, setQuantity] = useState(0)

  const location = `${event.city}, ${event.state.toUpperCase()}, ${
    event.country
  }`
  const price = `${event.price} ${event.currency.toUpperCase()}`

  function handlePurchase() {
    setQuantity(0)
    toast.success(
      `${quantity} ${
        quantity > 1 ? 'Tickets' : 'Ticket'
      } purchased successfully!`,
    )
  }

  return (
    <div className="w-full flex flex-col">
      <header className="bg-purpleGradient md:h-[229px] w-full text-white flex flex-col items-center py-10 px-2">
        <h1 className="md:text-3xl max-md:text-xl font-bold text-center">
          {event?.title}
        </h1>
        <p className="text-md font-medium text-center">{event?.city}</p>
      </header>

      <section className="md:max-w-[700px] mx-auto py-10">
        <p className="md: max-w-3xl">{event.description}</p>
        <div className="mt-5">
          <DescriptionItem label="Date" content={utcToMDY(event.date)} />
          <DescriptionItem label="Location" content={location} />
          <DescriptionItem label="Address" content={event.address} />
          <DescriptionItem label="Price" content={price} />
        </div>
      </section>
      <section className="flex items-center gap-2 mx-auto">
        <Button
          label="-"
          size="sm"
          onClick={() => setQuantity(quantity > 0 ? quantity - 1 : quantity)}
          disabled={quantity === 0}
        />

        <Input
          id="quantity"
          type="number"
          value={quantity}
          className="w-14 text-center"
          disabled={true}
        />
        <Button label="+" size="sm" onClick={() => setQuantity(quantity + 1)} />
      </section>
      <Button
        label="Buy"
        size="lg"
        className="w-[150px] mt-2 mx-auto mb-10"
        onClick={handlePurchase}
      />
    </div>
  )
}
