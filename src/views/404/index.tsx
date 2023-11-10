import { Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import './index.less'

const Error = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="该页面不存在或与管理员联系配置权限"
        extra={
          <Button onClick={() => navigate('/home')} type="primary">
            回到首页
          </Button>
        }
      />
    </div>
  )
}

export default Error
