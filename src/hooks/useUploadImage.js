import { useState } from 'react'
// import { uploadFile as S3uploadFile } from 'react-s3'
import AWS from 'aws-sdk'
import { sleep } from '../utils/sleep'

const url = ''

const config = {
  bucketName: 'innova-s3-bucket-test',
  dirName: 'test' /* optional */,
  region: 'us-east-1',
  accessKeyId: 'AKIAYKCJVU3SC253KDHN',
  secretAccessKey: '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'
  // s3Url: 'https://innova-s3-bucket-test.s3.amazonaws.com/test/' /* optional */
}

const REGION = config.region;
const S3_BUCKET = config.bucketName;

AWS.config.update({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey
})

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
})



const useUploadImage = () => {
  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(0)

  const handleFile = ({ target: { validity, files } }) => {
    if (validity && files.length !== 0) {
      const file = files[0]

      const params = {
        ACL: 'public-read',
        Body: file,
        Bucket: S3_BUCKET,
        Key: file.name
      }

      myBucket.putObject(params)
        .on('httpUploadProgress', (evt) => {
            setProgress(Math.round((evt.loaded / evt.total) * 100))
        })
        .send((err) => {
            if (err) {
              Object.keys(err).forEach((e) => console.log(e, err[e]))
            }
        })

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
