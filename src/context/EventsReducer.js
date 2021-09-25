import { NEW_EVENT, EDIT_EVENT, DELETE_EVENT } from '../context/types'

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
        events: events.map((e) => (e.id === payload.id ? payload : e))
      }

    case DELETE_EVENT:
      return {
        ...state,
        events: events.filter((e) => e.id !== payload.id)
      }

    default:
      return state
  }
}

export default EventsReducer
