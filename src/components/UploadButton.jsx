import { BiCloudUpload } from 'react-icons/bi'

const UploadButton = ({ onChangeFile = () => {} }) => {
  return (
    <label
      htmlFor="image_upload"
      className="btn btn-outline-primary p-0 py-1 px-2 mx-2"
    >
      <BiCloudUpload size={25} />
      <input type="file" id="image_upload" onChange={onChangeFile} hidden />
    </label>
  )
}

export default UploadButton
