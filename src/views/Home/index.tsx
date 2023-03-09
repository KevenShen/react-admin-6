import Panl from '@/components/TypingCard'
import { token, userInfo } from '@/store/Module/user'
import { memo } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'

const Home = memo(() => {
  console.log('home')
  return (
    <Panl title="主页" source={'图表及配置信息'}>
      图表及配置信息
    </Panl>
  )
})

export default Home
