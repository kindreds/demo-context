import { useContext } from 'react'
import { EventsContext } from '../context/EventsState'

const useEvents = () => {
  const { events, addEvent, editEvent, deleteEvent } = useContext(EventsContext)
  return {
    events,
    addEvent,
    editEvent,
    deleteEvent
  }
}

export default useEvents
