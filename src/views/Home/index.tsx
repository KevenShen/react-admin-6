import Panl from '@/components/TypingCard'
import { token, userInfo } from '@/store/Module/user'
import { useRecoilValue, useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { generateSignature } from '@/utils/crypto'

function Home() {
  const [text, setText] = useRecoilState(userInfo)
  const tokenRec = useRecoilValue(token)
  const jiami = async () => {
    const sign = await generateSignature({
      t: 1678087258258,
      m: '翻译code'
    })
    console.log(sign)
  }
  jiami()
  return (
    <Panl title="主页" source={'图表及配置信息'}>
      图表及配置信息
    </Panl>
  )
}

export default Home
