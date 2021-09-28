import { FaCheck } from 'react-icons/fa'

const CheckButton = ({ disabled = true }) => {
  return (
    <button
      disabled={disabled}
      className="btn btn-outline-success p-0 py-1 px-2 mx-2"
    >
      <FaCheck size={25} />
    </button>
  )
}

export default CheckButton
