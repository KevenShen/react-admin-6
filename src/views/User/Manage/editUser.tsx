import { Form, Input, Modal, Upload, message } from 'antd'
import { forwardRef, memo, useEffect, useImperativeHandle, useState } from 'react'
import { sign, update } from '@/api/user'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import type { RcFile } from 'antd/es/upload/interface'
import { upload } from '@/api/upload'

const Edituser = (props, ref) => {
  console.log('编辑弹窗刷新')
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [row, setRow] = useState({})
  const [imageUrl, setImageUrl] = useState<string>('')
  const [file, setFile] = useState<Blob | string>('')
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  useImperativeHandle(ref, () => ({
    // changeVal 就是暴露给父组件的方法
    showModal: (row) => {
      if (row) {
        setRow(row)
        form.setFieldsValue({ username: row.username, nickname: row.nickname })
        setImageUrl(row.avatar)
      }
      setOpen(true)
    }
  }))

  // 弹窗按钮提交表单
  const handleOk = async () => {
    try {
      const values = await form.validateFields()
      setConfirmLoading(true)
      if (row.id) {
        await update({
          ...values,
          id: row.id,
          avatar: imageUrl || ''
        }).catch(() => {
          setConfirmLoading(false)
        })
      } else {
        await sign({
          ...values,
          avatar: imageUrl || ''
        }).catch(() => {
          setConfirmLoading(false)
        })
      }
      props.getList()
      message.success('创建成功')
      setOpen(false)
    } catch (errorInfo) {
      // 验证失败
      console.log('Failed:', errorInfo)
    }
  }

  // 选择头像时显示加载动画
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传</div>
    </div>
  )
  // 验证图片格式
  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('文件格式应为 JPG/PNG !')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('文件不能超过2MB!')
    }
    if (isJpgOrPng && isLt2M) {
      setImageUrl('') // 清除之前的图片地址
      setLoading(true) // 等待上传loading
      setFile(file)
    }
    return false
  }
  useEffect(() => {
    if (file) {
      handleImgChange()
    }
  }, [file])
  useEffect(() => {
    if (!open) {
      setLoading(false)
      setImageUrl('')
      setFile('')
      setConfirmLoading(false)
      form.resetFields()
      setRow({})
    }
  }, [open])

  // 上传头像
  const handleImgChange = async () => {
    const formdata = new FormData()
    formdata.append('avatar', file)
    const { data } = await upload(formdata)
    setLoading(false)
    setImageUrl(data)
  }

  // from表单选择文件
  const normFile = (e: any) => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  }

  // 弹窗关闭
  const handleCancel = () => {
    setLoading(false)
    setImageUrl('')
    setOpen(false)
    form.resetFields()
  }

  return (
    <Modal
      title="编辑"
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      destroyOnClose
      getContainer={false}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        style={{ padding: '10px 60px 10px 0' }}
        labelCol={{ span: 6 }}
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="用户名称"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item
          label="用户昵称"
          name="nickname"
          rules={[{ required: true, message: 'Please input your nickname!' }]}
        >
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item
          label="用户密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password autoComplete="off" />
        </Form.Item>
        <Form.Item
          label="用户头像"
          name="avatar"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: false, message: 'Please input your avatar!' }]}
        >
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: '100%', height: '100%' }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default memo(forwardRef(Edituser)) // 必须使用forwardRef包裹组件才能暴露方法
