import { useState } from 'react'
import S3 from 'react-aws-s3'
import { v4 as uuidv4 } from 'uuid'

const REGION = process.env.REACT_APP_REGION ?? ''
const S3_BUCKET = process.env.REACT_APP_S3_BUCKET ?? ''
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY ?? ''
const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY ?? ''

const config = {
  bucketName: S3_BUCKET,
  dirName: 'images',
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY
  // s3Url: 'https:/your-custom-s3-url.com/', /* optional */
}

const ReactS3Client = new S3(config)

const useUploadImage = () => {
  // const [progress, setProgress] = useState(0)
  const [file, setFile] = useState(null)

  const handleFile = ({ target: { validity, files } }) => {
    if (validity && files.length !== 0) {
      const file = files[0]
      setFile(file)
    }
  }

  const clearFile = () => setFile(null)

  const uploadFile = async () => {
    // await sleep(3000)
    const newFileName = uuidv4()
    const res = await ReactS3Client.uploadFile(file, newFileName)
    if (!res.location) {
      console.log('ERROR AL SUBIR IMAGEN')
    }
    return { url: res.location }
  }

  return { file, handleFile, uploadFile, clearFile }
}

export default useUploadImage
