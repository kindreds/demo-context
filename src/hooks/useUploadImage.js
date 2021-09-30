import { useState } from 'react'
import S3 from 'react-aws-s3'
import { v4 as uuidv4 } from 'uuid'

import { sleep } from '../utils/sleep'

const url = ''

const REGION = process.env.REACT_APP_REGION ?? ''
const S3_BUCKET = process.env.REACT_APP_S3_BUCKET ?? ''
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY ?? ''
const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY ?? ''

const config = {
  bucketName: S3_BUCKET,
  dirName: 's3://yarmo-bucket',
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

      const newFileName = uuidv4()

      ReactS3Client.uploadFile(file, newFileName)
        .then((data) => console.log(data))
        .catch((err) => console.error(err))
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
