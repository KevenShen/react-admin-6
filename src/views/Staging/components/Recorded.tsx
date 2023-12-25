import { uploadChunk } from '@/api/upload'
import { computeHash } from '@/utils/chunk'
import { CheckCircleTwoTone, LoadingOutlined, UploadOutlined } from '@ant-design/icons'
import { Button, Progress, Space, Upload, message } from 'antd'

function Recorded() {
  const [spinning, setSpinning] = useState(false)
  const [len, setLen] = useState(0)
  const props = {
    multiple: false,
    maxCount: 1,
    showUploadList: {
      showRemoveIcon: false
    },
    onRemove: (file) => {},
    beforeUpload: async (file) => {
      if (spinning) return false
      setSpinning(true)
      setLen(0)
      if (file.size > 1024 * 1024 * 500) {
        message.error('文件大小不能超过500MB')
        return false
      }

      const chunkSize = 1024 * 1024 * 10
      try {
        const hash = await computeHash(file)
        let start = parseInt(localStorage.getItem(hash) || '0')
        while (start < file.size) {
          const end = start + chunkSize < file.size ? start + chunkSize : file.size
          const chunk = file.slice(start, end)
          const formData = new FormData()
          formData.append('file', chunk)
          formData.append('start', start.toString())
          formData.append('end', (start + chunk.size).toString())
          formData.append('total', file.size.toString())
          formData.append('name', file.name)
          formData.append('hash', hash)
          const {
            data: { flag, save, path }
          } = await uploadChunk(formData)
          console.log(path)
          setLen(+((start * 100) / file.size).toFixed(2))
          start = end
          if (flag) localStorage.setItem(hash, end.toString())
          if (save) start = file.size
        }

        // const queue = RequestQueue(6)

        // while (start < file.size) {
        //   const end = start + chunkSize < file.size ? start + chunkSize : file.size
        //   const chunk = file.slice(start, end)
        //   const formData = new FormData()
        //   formData.append('file', chunk)
        //   formData.append('start', start.toString())
        //   formData.append('end', (start + chunk.size).toString())
        //   formData.append('total', file.size.toString())
        //   formData.append('name', file.name)
        //   queue.addTask(() => uploadChunk(formData))
        //   // const { data: flag } = await uploadChunk(formData)
        //   // if (flag) localStorage.setItem(hash, end.toString())
        //   setLen(+((start * 100) / file.size).toFixed(2))
        //   start = end
        // }

        if (start >= file.size) {
          setSpinning(false)
          setLen(100)
          localStorage.removeItem(hash)
          // 上传成功反馈
          message.success('上传成功')
        }
      } catch (error) {
        console.error('Upload failed', error)
        // 错误处理
        setSpinning(false)
        setLen(0)
        message.error('上传失败，请重试')
      }
      return false
    }
  }

  return (
    <div className="Recorded">
      <Upload {...props}>
        <Space wrap>
          <Button icon={spinning ? <LoadingOutlined /> : <UploadOutlined />}>
            {spinning ? '上传中...' : '上传'}
          </Button>
          {len === 100 ? (
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          ) : spinning ? (
            <Progress type="circle" percent={len} size={20} />
          ) : null}
        </Space>
      </Upload>
    </div>
  )
}

export default Recorded
