import { Button, Checkbox, Form, Input } from 'antd'
import { getMenuById, userLogin } from '@/api/login'
import './index.less'
import { useSetRecoilState } from 'recoil'
import { menu, token, userInfo, router } from '@/store/Module/user'
import { useNavigate } from 'react-router-dom'

function Login() {
  const setText = useSetRecoilState(userInfo)
  const setTokenRec = useSetRecoilState(token)
  const setmenu = useSetRecoilState(menu)
  const navigate = useNavigate()
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const onFinish = async (values: any) => {
    const { data } = await userLogin({
      username: values.username,
      password: values.password
    })
    setText(data.user)
    setTokenRec(data.token)
    const { data: menu } = await getMenuById(data.user.role)
    setmenu(menu)
    navigate('/')
  }
  return (
    <div className="login">
      <Form
        className="login-form"
        name="basic"
        style={{ width: 400 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
          <Input placeholder="用户名" />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
          <Input.Password placeholder="密码" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
