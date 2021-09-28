import { createContext, useEffect, useReducer } from 'react'
import EventsReducer from './EventsReducer'
import { EventsActions } from './EventsActions'

import { LOAD_EVENTS } from './types'
import { getAllTareas } from '../api/tareasAPI'

export const EventsContext = createContext()

export const initialState = {
  events: []
}

const EventsState = ({ children }) => {
  const [state, dispatch] = useReducer(EventsReducer, initialState)

  useEffect(() => {
    getAllTareas().then(({ data }) => {
      dispatch({ type: LOAD_EVENTS, payload: data })
    })
  }, [])

  const props = {
    ...state,
    ...EventsActions(state, dispatch)
  }

  return (
    <EventsContext.Provider value={props}>{children}</EventsContext.Provider>
  )
}

export default EventsState
