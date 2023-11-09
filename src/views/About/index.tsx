import Panl from '@/components/Panl'

const About = () => {
  console.log('about')

  return (
    <Panl title="关于我" source={'关于我的信息'}>
      <div className="app-card chat" style={{ height: '2000px' }}>
        关于
      </div>
    </Panl>
  )
}

export default About
