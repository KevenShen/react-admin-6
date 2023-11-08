import Panl from '@/components/TypingCard'
import { Button, Space, Table } from 'antd'
import Column from 'antd/es/table/Column'
import { useEffect, useRef, useState } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import './index.less'
import { posAll } from '@/api/menu'
import EditMenu from './editMenu'
import EditPos from './editPos'
const Role = () => {
  console.log('岗位 渲染')
  const from = useRef(null)
  const editPos = useRef(null) // 编辑与新增岗位
  const [list, setList] = useState([])
  const getList = async () => {
    const { data } = await posAll()
    setList(data)
  }
  // 挂载时运行一次
  useEffect(() => {
    getList()
  }, [])
  const cardContent =
    '在这里，你可以对系统中的岗位进行管理，岗位对应一个角色,默认拥有角色对应菜单,管理员可以根据岗位定制化菜单(只会修改岗位,不会修改角色对应菜单)。'
  return (
    <Panl title="岗位管理" source={cardContent}>
      <div className="app-card pos">
        <Space wrap>
          <Button type="primary" onClick={getList}>
            查询
          </Button>
          {/* <Button type="primary" onClick={() => from?.current.showModal()} className="btn-pink">
            新增
          </Button> */}
        </Space>
        <Table bordered dataSource={list} rowKey={(record) => record.id}>
          <Column title="岗位名称" dataIndex="name" key="name" />
          <Column title="岗位代码" dataIndex="id" key="id" />
          <Column title="岗位类型" dataIndex="role_id" key="role_id" />
          <Column title="机构ID" dataIndex="org_id" key="org_id" />
          <Column title="岗位描述" dataIndex="description" key="description" />
          <Column
            title="角色类型"
            dataIndex="role"
            key="role.name"
            render={(role) =>
              /* 确保 role 是一个对象并且有 name 属性 */
              typeof role === 'object' && role !== null && 'name' in role ? role.name : '未知'
            }
          />
          <Column
            title="操作"
            key="action"
            render={(_: any, record: any) => (
              <Space>
                <Button
                  type="primary"
                  onClick={() => from?.current.showModal(record.id)}
                  shape="circle"
                  icon={<EditOutlined />}
                />
                <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} />
              </Space>
            )}
          />
        </Table>
      </div>
      <EditMenu ref={from} getList={getList}></EditMenu>
      <EditPos ref={editPos}></EditPos>
    </Panl>
  )
}

export default Role
