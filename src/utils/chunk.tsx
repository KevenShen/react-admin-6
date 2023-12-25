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

export const RequestQueue = (num) => {
  const taskList = [] // 待执行任务数组
  let curNum = 0 // 当前运行阀值

  // 添加任务
  const addTask = (fun) => {
    taskList.push(fun)
    runTask()
  }

  // 执行任务
  const runTask = async () => {
    if (curNum >= num || !taskList.length) return
    curNum++
    const fun = taskList.shift()
    await fun()
    curNum--
    runTask()
  }

  return { addTask }
}
// 使用
