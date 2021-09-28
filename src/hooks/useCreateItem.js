import { useState } from 'react'
import useEvents from './useEvents'

const useCreateItem = () => {
  const [text, setText] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [itemSelected, setItemSelected] = useState({ id: null })

  // GLOBAL STATE
  const { events, ...actions } = useEvents()

  const handleAdd = async (fileUrl) => {
    if (text.trim() === '') return

    if (isEdit && itemSelected.tareaId) {
      const { url } = itemSelected
      actions.editEvent({
        ...itemSelected,
        titulo: text,
        url: fileUrl ?? url
      })
      setText('')
      return setIsEdit(false)
    }

    const payload = {
      titulo: text,
      link: fileUrl
    }

    actions.addEvent(payload)

    setText('')
  }

  const handleDelete = (payload) => {
    actions.deleteEvent(payload)
  }

  const handleEdit = (payload) => {
    setIsEdit(true)
    setText(payload.titulo)
    setItemSelected(payload)
  }

  const handleChangeText = ({ target: { value } }) => {
    setText(value)
  }

  return {
    // state
    text,
    events,
    isEdit,
    itemSelected,
    // functions
    setText,
    handleAdd,
    handleEdit,
    handleDelete,
    handleChangeText
  }
}

export default useCreateItem
