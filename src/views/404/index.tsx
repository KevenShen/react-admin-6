import Panl from '@/components/TypingCard'
import './index.less'
import error from '@/assets/images/error-404.png'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()

  return (
    <div>
      <p>404</p>
      <p className="info">该页面不存在或与管理员联系配置权限</p>
      <p className="jump" onClick={() => navigate('/login')}>
        重新登录
      </p>
    </div>
  )
}

export default Error
