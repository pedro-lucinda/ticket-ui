import { EventList } from './components/event-list'
import { HomeHeader } from './components/header'

export const HomeView = () => {
  return (
    <div className="flex flex-col items-center">
      <HomeHeader />
      <EventList showAll={false} numberOfEventsToDisplay={8} />
    </div>
  )
}
