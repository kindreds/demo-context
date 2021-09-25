import { FiEdit } from 'react-icons/fi'
import { GoTrashcan } from 'react-icons/go'

const Item = ({ value, onEdit = () => {}, onDelete = () => {} }) => {
  return (
    <li style={{ listStyle: 'none' }}>
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="h4">{value.msg}</h2>
        <div>
          <button onClick={onEdit} className="btn btn-outline-info">
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
