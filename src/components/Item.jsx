import { FiEdit } from 'react-icons/fi'
import { BsEyeFill } from 'react-icons/bs'
import { GoTrashcan } from 'react-icons/go'

const Item = ({ value, onEdit = () => {}, onDelete = () => {} }) => {
  return (
    <li style={{ listStyle: 'none' }}>
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="h4">{value.titulo}</h2>
        <div>
          <a
            target="_blank"
            href={value.link}
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            <BsEyeFill />
          </a>
          <button onClick={onEdit} className="btn btn-outline-primary mx-2">
            <FiEdit />
          </button>
          <button onClick={onDelete} className="btn btn-outline-danger">
            <GoTrashcan />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default Item
