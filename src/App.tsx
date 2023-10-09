import '@/styles/index.less'
import Router from '@/router'
import { RecoilRoot } from 'recoil'
import Auth from './Auth'
import { AliveScope } from 'react-activation'
function App() {
  console.log('APP 渲染')
  return (
    <RecoilRoot>
      <Auth>
        <Router></Router>
      </Auth>
    </RecoilRoot>
  )
}

export default App
