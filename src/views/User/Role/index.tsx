import { getMenu, getRole } from '@/api/login'
import { editmenu, getmenu } from '@/api/menu'
import Panl from '@/components/Panl'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Col, Row, Space, Table, Tree } from 'antd'
import Column from 'antd/es/table/Column'
import { Key, useEffect, useState } from 'react'

import './index.less'
const Role = () => {
  console.log('Role 渲染')

  const [list, setList] = useState([])
  const [treeData, settreeData] = useState([])
  const [halfCheckedKeys, setHalfCheckedKeys] = useState([])
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([])
  const [rowValue, setRowValue] = useState<React.Key[]>([])
  const getList = async () => {
    const { data } = await getRole()
    setList(data)
  }
  const getmenyList = async () => {
    const { data } = await getMenu()
    settreeData(data)
  }

  const onCheck = (checkedKeysValue: any, e: { halfCheckedKeys: [] }) => {
    setHalfCheckedKeys(e.halfCheckedKeys)
    setCheckedKeys(checkedKeysValue)
  }

  const update = async () => {
    const { data } = await editmenu({
      id: rowValue[0],
      menu: [...checkedKeys, ...halfCheckedKeys]
    })
  }
  // 点击角色菜单选中
  const inversemenu = async () => {
    const { data } = await getmenu(rowValue[0])
    const ketList: any[] | ((prevState: Key[]) => Key[]) = []
    data.forEach((item) => {
      if (item.children) return ketList.push(...item.children.map((child) => child.id))
      ketList.push(item.id)
    })
    setCheckedKeys(ketList)
  }
  // 挂载时运行一次
  useEffect(() => {
    getList()
    getmenyList()
  }, [])
  useEffect(() => {
    if (rowValue.length) inversemenu()
  }, [rowValue])
  const cardContent =
    '在这里，你可以对系统中的用户进行管理，例如添加一个新用户，或者修改系统中已经存在的用户。'
  return (
    <Panl title="角色管理" source={cardContent}>
      <div className="app-card role">
        <div className="role-info">
          <Row justify="space-between" align="middle">
            <Col>角色列表</Col>
            <Col>
              <Button type="primary" onClick={getList}>
                查询
              </Button>
            </Col>
          </Row>
          <Table
            bordered
            dataSource={list}
            rowSelection={{
              type: 'radio',
              selectedRowKeys: rowValue,
              onChange: (e, row: any) => setRowValue([row[0].id])
            }}
            onRow={(record: any) => ({
              onClick: () => {
                setRowValue([record.id])
              }
            })}
            rowKey={(record) => record.id}>
            <Column title="角色名称" dataIndex="name" key="name" />
            <Column title="角色代码" dataIndex="code" key="code" />
            <Column title="角色等级" dataIndex="level" key="level" />
            <Column title="角色描述" dataIndex="description" key="description" />

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
        <div className="role-menu">
          <Row justify="space-between" align="middle">
            <Col>角色列表</Col>
            <Col>
              {' '}
              <Button type="primary" disabled={!rowValue[0]} onClick={update}>
                保存
              </Button>
            </Col>
          </Row>
          <Tree
            checkable
            blockNode
            fieldNames={{ title: 'name', key: 'id' }}
            onCheck={onCheck}
            selectedKeys={[1, 2, 3]}
            checkedKeys={checkedKeys}
            treeData={treeData}
          />
        </div>
      </div>
    </Panl>
  )
}

export default Role
