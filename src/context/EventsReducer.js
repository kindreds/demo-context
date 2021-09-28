import {
  NEW_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
  LOAD_EVENTS
} from '../context/types'

const initialState = {
  events: []
}

const EventsReducer = (state = initialState, { type, payload }) => {
  const { events } = state

  switch (type) {
    case NEW_EVENT:
      return { ...state, events: [...events, payload] }

    case EDIT_EVENT:
      return {
        ...state,
        events: events.map((e) => (e.tareaId === payload.tareaId ? payload : e))
      }

    case DELETE_EVENT:
      return {
        ...state,
        events: events.filter((e) => e.tareaId !== payload.tareaId)
      }

    case LOAD_EVENTS:
      return {
        ...state,
        events: payload
      }

    default:
      return state
  }
}

export default EventsReducer
