import { GoPlus } from 'react-icons/go'

// components
import Item from './components/Item'
import Empty from './components/Empty'
import CheckButton from './components/CheckButton'
import UploadButton from './components/UploadButton'

// utils
import useCreateItem from './hooks/useCreateItem'
import useUploadImage from './hooks/useUploadImage'
import { useState } from 'react'
import Spinner from './components/Spinner'
import Alert from './components/Alert'
import { FiEdit } from 'react-icons/fi'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({ ok: true })

  // Hook para subir imagenes
  const { file, handleFile, uploadFile, clearFile } = useUploadImage()

  // Hook para crear el item
  const { events, text, isEdit, handleAdd, ...actions } = useCreateItem()

  const handleCreateItem = async () => {
    if (!file) {
      setErrors({ ok: false, msg: 'Recuerda adjuntar la imagen' })
      return
    }

    setErrors({ ok: true })

    setIsLoading(true)
    // Subida del archivo: URL
    const res = await uploadFile()
    if (res.url) {
      handleAdd(res.url)
      clearFile()
    } else {
      console.log('Error al subir imagen')
    }
    setIsLoading(false)
  }

  const handleEditItem = async () => {
    if (file) {
      setIsLoading(true)
      const res = await uploadFile()
      if (res.url) {
        handleAdd(res.url)
        clearFile()
      } else {
        console.log('Error al subir imagen')
      }
      setIsLoading(false)
    } else {
      handleAdd()
    }
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div>
        <h1 className="display-1 mb-5">DEMO CONTEXT</h1>

        {!errors.ok ? <Alert content={errors.msg} /> : null}

        <div className="d-flex align-items-center mb-4">
          <input
            type="text"
            value={text}
            placeholder="Agregar titulo"
            className="form-control mr-4"
            onChange={actions.handleChangeText}
            onKeyDown={({ key }) => {
              if (key === 'Enter') {
                return isEdit ? handleEditItem() : handleCreateItem()
              }
            }}
          />
          {file ? <CheckButton /> : <UploadButton onChangeFile={handleFile} />}
          <button
            disabled={isLoading}
            className="btn btn-primary p-0 py-1 px-2"
            onClick={isEdit ? handleEditItem : handleCreateItem}
          >
            {
              /* eslint-disable */
              isLoading ? (
                <Spinner />
              ) : isEdit ? (
                <FiEdit size={25} />
              ) : (
                <GoPlus size={25} />
              )
              /* eslint-enable */
            }
          </button>
        </div>

        <ul className="p-0">
          {events.map((item) => (
            <Item
              value={item}
              key={item.id}
              onEdit={() => actions.handleEdit(item)}
              onDelete={() => actions.handleDelete(item)}
            />
          ))}
        </ul>

        {events.length === 0 ? <Empty /> : null}
      </div>
    </div>
  )
}

export default App
