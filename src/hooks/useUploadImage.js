import { useState } from 'react'
import { sleep } from '../../utils/sleep'

const url =
  'https://images.pexels.com/photos/7690954/pexels-photo-7690954.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'

const useUploadImage = () => {
  const [file, setFile] = useState(null)

  const handleFile = ({ target: { validity, files } }) => {
    if (validity) {
      console.log(files[0])
      setFile(files[0])
    }
  }

  const clearFile = () => setFile(null)

  const uploadFile = async () => {
    await sleep(3000)
    return { url }
  }

  return { file, handleFile, uploadFile, clearFile }
}

export default useUploadImage
