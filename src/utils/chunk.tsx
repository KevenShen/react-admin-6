import SparkMD5 from 'spark-md5'
export const computeHash = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    const spark = new SparkMD5.ArrayBuffer()

    fileReader.onload = (event: ProgressEvent<FileReader>) => {
      if (event.target?.result) {
        spark.append(event.target.result as ArrayBuffer)
        const hash = spark.end()
        resolve(hash)
      }
    }

    fileReader.onerror = (error: ProgressEvent<FileReader>) => {
      reject(error)
    }

    fileReader.readAsArrayBuffer(file)
  })
}
