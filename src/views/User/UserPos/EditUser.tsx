import { Button, Modal, Popconfirm, Space, Table } from 'antd'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { delUserPos } from '@/api/user'
import AddPos from './AddPos'
const { Column } = Table

const EditUser = (props, ref) => {
  const addPos = useRef<{ showModal: () => void } | null>(null)
  const [list, setList] = useState([])
  const [open, setOpen] = useState(false)
  const [user_id, setuser_id] = useState('')
  const [confirmLoading, setConfirmLoading] = useState(false)
  useImperativeHandle(ref, () => ({
    // changeVal 就是暴露给父组件的方法
    showModal: (rowlist = [], user_id) => {
      setOpen(true)
      setList(rowlist)
      setuser_id(user_id)
    }
  }))

  // 弹窗按钮提交表单
  const delPos = async (row) => {
    try {
      await delUserPos({
        userpos: { user_id: user_id, posId: row.id }
      })
      console.log(props)
      props.getList()
      setOpen(false)
    } catch (errorInfo) {
      // 验证失败
      console.log('Failed:', errorInfo)
    }
  }

  // 弹窗关闭
  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <Modal
      title="用户岗位设置"
      open={open}
      confirmLoading={confirmLoading}
      getContainer={false}
      destroyOnClose
      onCancel={handleCancel}
    >
      <Space wrap>
        <Button type="primary" onClick={() => addPos.current?.showModal()} className="btn-pink">
          新增
        </Button>
      </Space>
      <Table bordered dataSource={list} rowKey={(record) => record.id}>
        <Column title="岗位名称" dataIndex="name" key="name" />
        <Column title="岗位id" dataIndex="id" key="id" />
        <Column title="岗位描述" dataIndex="description" key="description" />
        <Column title="岗位状态" dataIndex="status" key="status" />

        <Column
          title="操作"
          key="action"
          render={(_: any, record) => (
            <Space>
              <Popconfirm
                title="是否确定删除该岗位?"
                onConfirm={() => delPos(record)}
                okText="确定"
                cancelText="取消"
              >
                <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} />
              </Popconfirm>
            </Space>
          )}
        />
      </Table>

      <AddPos ref={addPos} id={user_id}></AddPos>
    </Modal>
  )
}

export default forwardRef(EditUser) // 必须使用forwardRef包裹组件才能暴露方法
