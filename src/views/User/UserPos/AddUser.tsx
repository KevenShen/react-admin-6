import { AutoComplete, Form, Input, Modal, Select, Upload, message } from 'antd'
import { forwardRef, useImperativeHandle, useState } from 'react'
import { getUserNameList } from '@/api/user'
import { delay } from '@/utils/const'
import useDebounce from '@/hooks/useDebounce'

const AddUser = (props, ref) => {
  const [form] = Form.useForm()
  const [value, setValue] = useState('')
  const [options, setOptions] = useState<{ value: string }[]>([])
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  useImperativeHandle(ref, () => ({
    // changeVal 就是暴露给父组件的方法
    showModal: (row) => {
      setOpen(true)
    }
  }))

  // 弹窗按钮提交表单
  const handleOk = async () => {
    try {
    } catch (errorInfo) {
      // 验证失败
      console.log('Failed:', errorInfo)
    }
  }

  useDebounce(value, 1000, async () => {
    const { data } = await getUserNameList({
      name: value
    })
    setOptions(
      data.map((item) => {
        return {
          label: item.username,
          value: item.username,
          id: item.id
        }
      })
    )
  })

  const onSelect = (data: string, option) => {
    setValue(option.label)
    form.setFieldsValue('userId', option.id)
    console.log(form.getFieldsValue(), option.id)
  }

  // 弹窗关闭
  const handleCancel = () => {}

  return (
    <Modal
      forceRender
      title="新增用户岗位"
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}>
      <Form
        form={form}
        style={{ padding: '10px 60px 10px 0' }}
        labelCol={{ span: 6 }}
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off">
        <Form.Item
          label="选择用户"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}>
          <AutoComplete
            options={options}
            onSelect={onSelect}
            onSearch={(text) => setValue(text)}
            placeholder="input here"
          />
        </Form.Item>
        <Form.Item name="userId" hidden />
        <Form.Item
          label="用户昵称"
          name="nickname"
          rules={[{ required: true, message: 'Please input your nickname!' }]}>
          <Input autoComplete="off" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default forwardRef(AddUser) // 必须使用forwardRef包裹组件才能暴露方法
