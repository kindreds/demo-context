import { DELETE_EVENT, EDIT_EVENT, NEW_EVENT } from './types'

import { createTarea, deleteTarea, editTarea } from '../api/tareasAPI'

export const EventsActions = (state, dispatch) => {
  const addEvent = async (payload) => {
    const res = await createTarea(payload).catch(() => {
      console.log('ERROR AL CREAR')
    })
    dispatch({ type: NEW_EVENT, payload: res })
  }

  const editEvent = async (payload) => {
    await editTarea(payload).catch(() => console.log('ERROR AL EDITAR'))
    dispatch({ type: EDIT_EVENT, payload })
  }

  const deleteEvent = async (payload) => {
    await deleteTarea(payload.tareaId).catch(() => {
      console.log('ERROR AL ELIMINAR')
    })
    dispatch({ type: DELETE_EVENT, payload })
  }

  return { addEvent, editEvent, deleteEvent }
}
