import { DELETE_EVENT, EDIT_EVENT, NEW_EVENT } from './types'

export const EventsActions = (state, dispatch) => {
  const addEvent = (payload) => {
    dispatch({ type: NEW_EVENT, payload })
  }
  const editEvent = (payload) => {
    dispatch({ type: EDIT_EVENT, payload })
  }
  const deleteEvent = (payload) => {
    dispatch({ type: DELETE_EVENT, payload })
  }

  return { addEvent, editEvent, deleteEvent }
}
