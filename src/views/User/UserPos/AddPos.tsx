import { AutoComplete, Form, Input, Modal, Select, Upload, message } from 'antd'
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { posAll } from '@/api/menu'
import { addUserPos } from '@/api/user'

const AddPos = (props, ref) => {
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
      const values = await addUserPos({
        userpos: {
          user_id: props.id,
          posId: form.getFieldsValue().posid
        }
      })
    } catch (errorInfo) {
      // 验证失败
      console.log('Failed:', errorInfo)
    }
  }

  const getpos = async () => {
    const { data } = await posAll()
    setOptions(
      data.map((item) => {
        return {
          label: item.name,
          value: item.name,
          id: item.id
        }
      })
    )
  }

  useEffect(() => {
    getpos()
  }, [])

  const onSelect = (data: string, option) => {
    setValue(option.label)
    form.setFieldValue('posid', option.id)
  }

  // 弹窗关闭
  const handleCancel = () => {
    setOpen(false)
  }

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
          label="选择岗位"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}>
          <AutoComplete
            options={options}
            onSelect={onSelect}
            onSearch={(text) => setValue(text)}
            placeholder="input here"
          />
        </Form.Item>
        <Form.Item name="posid" hidden />
      </Form>
    </Modal>
  )
}

export default forwardRef(AddPos) // 必须使用forwardRef包裹组件才能暴露方法
