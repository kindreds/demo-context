import { useState } from 'react'
import { sleep } from '../utils/sleep'

const url = ''

const REGION = process.env.REACT_APP_REGION ?? ''
const S3_BUCKET = process.env.REACT_APP_S3_BUCKET ?? ''
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY ?? ''
const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY ?? ''

const useUploadImage = () => {
  const [file, setFile] = useState(null)
  // const [progress, setProgress] = useState(0)

  console.log({ REGION, S3_BUCKET, ACCESS_KEY, SECRET_ACCESS_KEY })

  const handleFile = ({ target: { validity, files } }) => {
    if (validity && files.length !== 0) {
      const file = files[0]

      console.log(file)
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
