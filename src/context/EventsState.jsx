import { createContext, useReducer } from 'react'
import EventsReducer from './EventsReducer'
import { EventsActions } from './EventsActions'

export const EventsContext = createContext()

export const initialState = {
  events: []
}

const EventsState = ({ children }) => {
  const [state, dispatch] = useReducer(EventsReducer, initialState)

  const props = {
    ...state,
    ...EventsActions(state, dispatch)
  }

  return (
    <EventsContext.Provider value={props}>{children}</EventsContext.Provider>
  )
}

export default EventsState
