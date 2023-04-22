import { getMenu } from '@/api/login'
import Panl from '@/components/TypingCard'
import { Button, Space, Table } from 'antd'
import Column from 'antd/es/table/Column'
import { useEffect, useRef, useState } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

const Menu = () => {
  console.log('Menu 渲染')

  const from = useRef(null)
  const [list, setList] = useState([])
  const getList = async () => {
    const { data } = await getMenu()
    setList(data)
  }
  // 挂载时运行一次
  useEffect(() => {
    getList()
  }, [])
  const cardContent =
    '在这里，你可以对系统中的用户进行管理，例如添加一个新用户，或者修改系统中已经存在的用户。'
  return (
    <Panl title="菜单管理" source={cardContent}>
      <div className="app-card">
        <Space wrap>
          <Button type="primary" onClick={getList}>
            查询
          </Button>
          {/* <Button type="primary" onClick={() => from?.current.showModal()} className="btn-pink">
          新增
        </Button> */}
        </Space>
        <Table bordered dataSource={list} rowKey={(record) => record.id}>
          <Column title="菜单名称" dataIndex="name" key="name" />
          <Column title="图标" dataIndex="icon" key="icon" />
          <Column title="路径" dataIndex="path" key="path" />
          <Column title="组件路径" dataIndex="component" key="component" />
          <Column title="显示" dataIndex="isShow" key="isShow" />
          <Column title="排序" dataIndex="sort_num" key="sort_num" />

          <Column
            title="操作"
            key="action"
            render={(_: any, record: DataType) => (
              <Space>
                <Button type="primary" shape="circle" icon={<EditOutlined />} />
                <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} />
              </Space>
            )}
          />
        </Table>
      </div>
    </Panl>
  )
}

export default Menu
