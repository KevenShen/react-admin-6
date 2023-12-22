import { uploadChunk } from '@/api/upload'
import { computeHash } from '@/utils/chunk'
import { UploadOutlined } from '@ant-design/icons'
import { Upload, UploadProps } from 'antd'

function Recorded() {
  const props: UploadProps = {
    multiple: false, // 只允许上传一个文件
    maxCount: 1,
    showUploadList: {
      showRemoveIcon: false
    },
    onRemove: (file) => {},
    beforeUpload: async (file) => {
      const chunkSize = 10024 * 10024 // 1MB
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
          await uploadChunk(formData)
          localStorage.setItem(hash, end.toString())

          start = end
        }

        if (start >= file.size) {
          localStorage.removeItem(hash)
        }
      } catch (error) {
        console.error('Upload failed', error)
      }
      return false
    }
  }
  return (
    <>
      <div className="Recorded">
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
    </>
  )
}

export default Recorded
