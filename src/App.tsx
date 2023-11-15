import Router from '@/router'
import '@/styles/index.less'
import { RecoilRoot } from 'recoil'
import Auth from './Auth'
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
