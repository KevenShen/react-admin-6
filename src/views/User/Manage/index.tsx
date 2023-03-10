import Panl from '@/components/TypingCard'
import { Button, Space, Table, Tag } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useEffect, useRef, useState } from 'react'
import { getUserList } from '@/api/user'
import Edituser from './editUser'
const { Column } = Table
const cardContent =
  '在这里，你可以对系统中的用户进行管理，例如添加一个新用户，或者修改系统中已经存在的用户。'
const Manage = () => {
  console.log('Manage 渲染')

  const from = useRef(null)
  const [list, setList] = useState([])
  const getList = async () => {
    console.log('发请求')
    const { data } = await getUserList({
      param: {},
      pageInfo: {
        pageNum: 1,
        pageSize: 10
      }
    })
    setList(data)
  }
  // 挂载时运行一次
  useEffect(() => {
    getList()
  }, [])
  return (
    <Panl title="用户管理" source={cardContent}>
      <Space wrap>
        <Button type="primary" onClick={getList}>
          查询
        </Button>
        <Button type="primary" onClick={() => from?.current.showModal()} className="btn-pink">
          新增
        </Button>
      </Space>
      <Table bordered dataSource={list} rowKey={(record) => record.id}>
        <Column title="用户名称" dataIndex="username" key="username" />
        <Column title="用户昵称" dataIndex="nickname" key="nickname" />
        <Column title="头像" dataIndex="avatar" key="avatar" />
        <Column title="角色" dataIndex="role" key="role" />
        {/* <Column
          title="角色"
          dataIndex="role"
          key="role"
          render={(role: string[]) => (
            <>
              {role.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        /> */}
        <Column
          title="操作"
          key="action"
          render={(_: any, record: DataType) => (
            <Space size="middle">
              <Button type="primary" shape="circle" icon={<EditOutlined />} />
              <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} />
            </Space>
          )}
        />
      </Table>
      <Edituser ref={from}></Edituser>
    </Panl>
  )
}

export default Manage
