import { getLogdetail } from '@/api/logs'
import Panl from '@/components/TypingCard'

const About = () => {
  console.log('about')
  const text = ''
  const getDetail = async () => {
    const eventSource = new EventSource('api/logs/detail?name=access.202306.log')
    eventSource.onmessage = (event) => {
      console.log(text + event.data)
    }

    return () => {
      eventSource.close()
    }
  }
  getDetail()
  return (
    <Panl title="关于我" source={'关于我的信息'}>
      <div className="app-card chat" style={{ height: '2000px' }}>
        关于
      </div>
    </Panl>
  )
}

export default About
