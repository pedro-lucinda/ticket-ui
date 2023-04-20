'use client'

import Button from '@/components/elements/button'

export const HomeHeader = () => {
  return (
    <div className="bg-home-hero w-full md:h-[562px] bg-no-repeat bg-cover max-md:p-4">
      <div className="flex md:max-screen-size mx-auto w-full md:pt-60 max-md:pt-20 px-5">
        <section className="flex flex-col md:max-w-[500px] text-white gap-2">
          <h1 className="font-bold text-3xl max-md:text-center">
            Get your tickets
          </h1>
          <p className="max-md:text-center max-md:max-w-md">
            Secure your spot at the most popular events in town with our
            easy-to-use ticket booking platform
          </p>
          <Button
            variant="purple"
            label="Get Started"
            size="md"
            className="mt-4 max-md:mx-auto"
          />
        </section>
      </div>
    </div>
  )
}
