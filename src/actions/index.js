import { NEW_EVENT, EDIT_EVENT, DELETE_EVENT } from '../types'

export const addEvent = (payload) => ({
  type: NEW_EVENT,
  payload
})

export const editEvent = (payload) => ({
  type: EDIT_EVENT,
  payload
})

export const deleteEvent = (payload) => ({
  type: DELETE_EVENT,
  payload
})
