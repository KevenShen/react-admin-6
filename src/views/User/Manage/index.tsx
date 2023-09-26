import Panl from '@/components/TypingCard'
import { Avatar, Button, Space, Table, TablePaginationConfig } from 'antd'
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
  const [row, setRow] = useState({})
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10
  })
  const getList = async (page: TablePaginationConfig = pagination) => {
    console.log(page)
    setPagination(page)
    const { data } = await getUserList({
      param: {},
      pageInfo: {
        pageNum: page.current,
        pageSize: page.pageSize
      }
    })
    setList(data)
  }
  // 修改
  const edit = async (row) => {
    from?.current.showModal(row)
  }

  const imgacc = (acc) => {
    if (!acc) return ''
    if (acc.includes('http')) return acc
    return 'http://' + window.document.location.host + '/api' + acc
  }
  // 挂载时运行一次
  useEffect(() => {
    getList(pagination)
  }, [])
  return (
    <Panl title="用户管理" source={cardContent}>
      <div className="app-card">
        {' '}
        <Space wrap>
          <Button type="primary" onClick={() => getList()}>
            查询
          </Button>
          <Button type="primary" onClick={() => from?.current.showModal()} className="btn-pink">
            新增
          </Button>
        </Space>
        <Table
          bordered
          dataSource={list}
          onChange={getList}
          pagination={{
            ...pagination,
            pageSizeOptions: [5, 10],
            showTotal: (total) => `共 ${total} 条`,
            showSizeChanger: true
          }}
          rowKey={(record) => record.id}>
          <Column title="用户名称" dataIndex="username" key="username" />
          <Column title="用户昵称" dataIndex="nickname" key="nickname" />
          <Column
            title="头像"
            dataIndex="avatar"
            key="avatar"
            render={(_: any, record) => (
              <img
                style={{ width: '64px', height: '64px' }}
                src={imgacc(record.avatar)}
                alt="avatar"
              />
            )}
          />
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
              <Space>
                <Button
                  type="primary"
                  shape="circle"
                  onClick={() => edit(record)}
                  icon={<EditOutlined />}
                />
                <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} />
              </Space>
            )}
          />
        </Table>
        <Edituser ref={from} getList={() => getList()}></Edituser>
      </div>
    </Panl>
  )
}

export default Manage
