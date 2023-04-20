import { LOGO } from '@/constants'

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full bg-purple900 gap-10 p-10">
      <section className="flex flex-col items-center  text-white">
        <img src={LOGO} alt="Ticket logo" />
        <p className="font-bold text-xs">Fake ticket website</p>
      </section>

      <section className="flex flex-col items-center  text-white">
        <p className="text-xs">Pedro Lucinda 2023</p>
        <p className="font-bold  text-xs">pedrolucinda96@gmail.com</p>
      </section>
    </footer>
  )
}
