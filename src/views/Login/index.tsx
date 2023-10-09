import { Button, Checkbox, Form, Input, Select } from 'antd'
import { getMenuById, getPosList, userLogin } from '@/api/login'
import './index.less'
import { useSetRecoilState } from 'recoil'
import { menu, token, userInfo, router } from '@/store/Module/user'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LoginUser } from '@/Type'
const { useForm } = Form
const { Option } = Select

function Login() {
  const [form] = useForm()
  const setText = useSetRecoilState(userInfo)
  const setTokenRec = useSetRecoilState(token)
  const setmenu = useSetRecoilState(menu)
  const [list, setList] = useState<Array<LoginUser>>([])
  const navigate = useNavigate()
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = async (values: any) => {
    const { posId } = form.getFieldsValue()
    const obj = list.find((item) => item.id === posId) as LoginUser
    // const { data } = await userLogin({
    //   username: values.username,
    //   password: values.password,
    //   role_id: obj.role_id,
    //   pos_id: obj.id
    // })
    const { data } = {
      data: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksInVzZXJJZCI6IlUwMDAxOSIsInVzZXJuYW1lIjoiY2x3Iiwibmlja25hbWUiOiLotoXnuqfnrqHnkIblkZgiLCJhdmF0YXIiOiJodHRwczovL2dpdGVlLmNvbS9qaXV4aWFuZ3lhbmdndWFuZy9teWltZy9yYXcvbWFzdGVyL3RyZWUvbWFzdGVyL2M3NTllZjE4MjA0ODgxZmQ4NzBlMDQ1MGRkZjUwYjAuanBnMTY5NTY5NzkzNDM5MyIsImNyZWF0ZVRpbWUiOiIyMDIzLTA5LTI2VDAzOjEyOjE4LjEwMVoiLCJ1cGRhdGVUaW1lIjoiMjAyMy0wOS0yNlQwMzoxMjoxOC4wMDBaIiwicm9sZV9pZCI6MSwicG9zX2lkIjoxLCJpYXQiOjE2OTY4MTkwNjQsImV4cCI6MTY5Njg2MjI2NH0.DSNCmfjy7qiLXsosJBmRSzGhqMolY4Ta_OGYnrEZaOM',
        user: {
          id: 19,
          userId: 'U00019',
          username: 'clw',
          nickname: '超级管理员',
          avatar:
            'https://gitee.com/jiuxiangyangguang/myimg/raw/master/tree/master/c759ef18204881fd870e0450ddf50b0.jpg1695697934393',
          createTime: '2023-09-26T03:12:18.101Z',
          updateTime: '2023-09-26T03:12:18.000Z',
          role_id: 1,
          pos_id: 1
        }
      },
      code: 200,
      msg: '请求成功'
    }
    setText(data.user)
    setTokenRec(data.token)
    // const { data: menu } = await getMenuById(data.user.pos_id)
    const { data: menu } = {
      data: [
        {
          id: 8,
          name: '主页',
          icon: 'icon-aliens-fill',
          path: '/home',
          component: 'Home',
          sort_num: 1,
          redirectTo: '',
          parent_id: null,
          isShow: true,
          create_time: '2023-03-17T08:06:21.283Z'
        },
        {
          id: 1,
          name: 'CRM管理',
          icon: 'icon-ancient-gate-fill',
          path: '/user',
          component: 'User',
          sort_num: 2,
          redirectTo: '/user/manage',
          parent_id: null,
          isShow: true,
          create_time: '2023-03-17T07:51:18.181Z',
          children: [
            {
              id: 2,
              name: '用户管理',
              icon: 'icon-map-pin-user-fill',
              path: '/user/manage',
              component: 'User/Manage',
              sort_num: 1,
              redirectTo: '',
              parent_id: 1,
              isShow: true,
              create_time: '2023-03-17T07:49:34.098Z'
            },
            {
              id: 3,
              name: '菜单管理',
              icon: 'icon-menu-4-fill',
              path: '/user/menu',
              component: 'User/Menu',
              sort_num: 2,
              redirectTo: '',
              parent_id: 1,
              isShow: true,
              create_time: '2023-03-17T07:50:18.901Z'
            },
            {
              id: 4,
              name: '角色管理',
              icon: 'icon-map-pin-user-fill',
              path: '/user/role',
              component: 'User/Role',
              sort_num: 3,
              redirectTo: '',
              parent_id: 1,
              isShow: true,
              create_time: '2023-03-17T07:50:49.164Z'
            },
            {
              id: 10,
              name: '岗位管理',
              icon: 'icon-map-pin-user-fill',
              path: '/user/pos',
              component: 'User/Pos',
              sort_num: 4,
              redirectTo: '',
              parent_id: 1,
              isShow: true,
              create_time: '2023-04-12T09:45:42.512Z'
            },
            {
              id: 12,
              name: '用户岗位管理',
              icon: 'icon-ancient-gate-fill',
              path: '/user/userpos',
              component: 'User/UserPos',
              sort_num: 5,
              redirectTo: '',
              parent_id: 1,
              isShow: true,
              create_time: '2023-09-22T07:13:58.952Z'
            }
          ]
        },
        {
          id: 6,
          name: '关于',
          icon: 'icon-ghost-line',
          path: '/about',
          component: 'About',
          sort_num: 3,
          redirectTo: '',
          parent_id: null,
          isShow: true,
          create_time: '2023-03-17T07:52:54.176Z'
        },
        {
          id: 7,
          name: 'ChatGPT',
          icon: 'icon-ghost-line',
          path: '/chatgpt',
          component: 'ChatGPT',
          sort_num: 4,
          redirectTo: '',
          parent_id: null,
          isShow: true,
          create_time: '2023-03-17T07:53:13.806Z'
        },
        {
          id: 9,
          name: '日历',
          icon: 'icon-map-pin-user-fill',
          path: '/calendar',
          component: 'Calendar',
          sort_num: 4,
          redirectTo: '',
          parent_id: null,
          isShow: true,
          create_time: '2023-03-22T03:34:27.099Z'
        },
        {
          id: 11,
          name: '日志',
          icon: 'icon-ghost-line',
          path: '/logs',
          component: 'Logs',
          sort_num: 5,
          redirectTo: '',
          parent_id: null,
          isShow: true,
          create_time: '2023-04-24T09:47:41.190Z'
        }
      ],
      code: 200,
      msg: '请求成功'
    }
    setmenu(menu)
    navigate('/')
  }
  const onChange = () => {
    setmenu([])
    form.resetFields(['posId'])
  }
  const handleFocus = async () => {
    const { username } = form.getFieldsValue()
    if (!username) return
    // const { data } = await getPosList({
    //   username
    // })
    const { data } = {
      data: [
        {
          id: 1,
          name: '总部管理员',
          type: 1,
          role_id: 1,
          status: 2,
          description: '总部管理员',
          org_id: '0315',
          create_time: '2023-03-31T03:54:42.115Z',
          update_time: '2023-04-10T09:11:18.706Z'
        }
      ]
    }
    setList(data)
  }
  return (
    <div className="login">
      <Form
        form={form}
        className="login-form"
        name="basic"
        style={{ width: 400 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
          <Input placeholder="用户名" onChange={onChange} />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
          <Input.Password placeholder="密码" />
        </Form.Item>

        <Form.Item name="posId" rules={[{ required: true, message: '请选择岗位!' }]}>
          <Select onFocus={handleFocus} placeholder="请选择岗位">
            {list.map((item) => {
              return (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              )
            })}
          </Select>
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
