import { BASE_URL } from './contants'

const getAllTareas = async () => {
  const url = `${BASE_URL}/tareas`
  const req = await fetch(url).then((res) => res.json())
  return req
}

const createTarea = async (payload) => {
  const url = `${BASE_URL}/tareas`
  const req = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  const res = await req.json()
  return res
}

const editTarea = async (payload) => {
  const url = `${BASE_URL}/tareas/${payload.tareaId}`
  const req = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  const res = await req.json()
  return res
}

const deleteTarea = async (id) => {
  const url = `${BASE_URL}/tareas/${id}`
  const req = await fetch(url, {
    method: 'DELETE'
  })

  const res = await req.json()
  console.log(res)
  return res
}

export { getAllTareas, deleteTarea, createTarea, editTarea }
