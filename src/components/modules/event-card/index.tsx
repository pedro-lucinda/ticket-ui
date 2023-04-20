'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { IEvent } from '@/store/events-store'
import { MONTHS_NUMBER } from '@/utils/date/months.enum'
import { reduceText } from '@/utils/text/reduce-text'

export const EventCard = ({ id, date, description, image, title }: IEvent) => {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/tickets/${id}`)}
      className="flex flex-col items-center rounded-2xl w-[300px] h-[360px] md:w-[340px] md:h-[340px] bg-white cursor-pointer hover:scale-95 hover:shadow-sm transition-all duration-200"
    >
      <img
        src={image}
        alt={title}
        className="w-full rounded-tr-2xl rounded-tl-2xl h-[200px] object-cover"
      />

      <div className=" flex gap-4 px-2 py-4 align-top justify-start">
        <section className="flex flex-col items-center gap-0">
          <p
            role="Month"
            className="uppercase text-purple500 text-2xs font-bold"
          >
            {MONTHS_NUMBER[new Date(date).getMonth() + 1]}
          </p>
          <h2 className="font-bold text-xl" role="Day">
            {new Date(date).getDate()}
          </h2>
        </section>
        <section className="flex flex-col align-top overflow-y-hidden">
          <h3 className="font-bold text-md">{title}</h3>
          <p className="text-sm">{reduceText(description, 70)}</p>
        </section>
      </div>
    </div>
  )
}
