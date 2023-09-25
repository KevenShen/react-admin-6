import Panl from '@/components/TypingCard'
import { getRole, getMenu } from '@/api/login'
import AddUser from './AddUser'
import EditUser from './EditUser'
import { Button, Col, Row, Space, Table, Tree } from 'antd'
import Column from 'antd/es/table/Column'
import { useEffect, useRef, useState } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import './index.less'
import { getUserPosList } from '@/api/user'
const Role = () => {
  console.log('用户岗位 渲染')
  const adduser = useRef<{ showModal: () => void } | null>(null)
  const edituser = useRef<{ showModal: () => void } | null>(null)
  const [list, setList] = useState([])
  const [rowList, setrowList] = useState([])
  const getList = async () => {
    const { data } = await getUserPosList({
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
  const cardContent = '在这里，你可以对系统中的用户岗位进行管理，用户登录必须选择一个岗位。'
  return (
    <Panl title="岗位管理" source={cardContent}>
      <div className="app-card pos">
        <Space wrap>
          <Button type="primary" onClick={getList}>
            查询
          </Button>
          <Button type="primary" onClick={() => adduser?.current?.showModal()} className="btn-pink">
            新增
          </Button>
        </Space>
        <Table bordered dataSource={list} rowKey={(record) => record.id}>
          <Column
            title="用户id"
            dataIndex="user"
            key="user.id"
            render={(user) =>
              /* 确保 role 是一个对象并且有 name 属性 */
              typeof user === 'object' && user !== null && 'userId' in user ? user.userId : '未知'
            }
          />
          <Column
            title="用户名"
            dataIndex="user"
            key="user.nickname"
            render={(user) =>
              /* 确保 role 是一个对象并且有 name 属性 */
              typeof user === 'object' && user !== null && 'nickname' in user
                ? user.nickname
                : '未知'
            }
          />
          <Column
            title="登录名"
            dataIndex="user"
            key="user.username"
            render={(user) =>
              /* 确保 role 是一个对象并且有 name 属性 */
              typeof user === 'object' && user !== null && 'username' in user
                ? user.username
                : '未知'
            }
          />
          <Column
            title="更新时间"
            dataIndex="user"
            key="user.updateTime"
            render={(user) =>
              /* 确保 role 是一个对象并且有 name 属性 */
              typeof user === 'object' && user !== null && 'updateTime' in user
                ? user.updateTime
                : '未知'
            }
          />
          <Column
            title="创建时间"
            dataIndex="user"
            key="user.createTime"
            render={(user) =>
              /* 确保 role 是一个对象并且有 name 属性 */
              typeof user === 'object' && user !== null && 'createTime' in user
                ? user.createTime
                : '未知'
            }
          />
          <Column
            title="操作"
            key="action"
            render={(_: any, record: any) => (
              <Space>
                <Button
                  type="primary"
                  onClick={() => edituser?.current?.showModal(record.postList, record.user_id)}
                  shape="circle"
                  icon={<EditOutlined />}
                />
                <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} />
              </Space>
            )}
          />
        </Table>
      </div>

      <AddUser ref={adduser}></AddUser>
      <EditUser ref={edituser} getList={getList}></EditUser>
    </Panl>
  )
}

export default Role
