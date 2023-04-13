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
    const { data } = await userLogin({
      username: values.username,
      password: values.password,
      role_id: obj.role_id,
      pos_id: obj.id
    })
    setText(data.user)
    setTokenRec(data.token)
    const { data: menu } = await getMenuById(data.user.pos_id)
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
    const { data } = await getPosList({
      username
    })
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
