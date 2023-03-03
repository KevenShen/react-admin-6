import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import '@/styles/index.less'
import defRouter, { filterAsyncRouter, mergeRouter, RR } from '@/router'
import { RecoilRoot } from 'recoil'
function App() {
  const [rout, setrout] = useState(defRouter)
  useEffect(() => {
    if (RR) {
      const end = mergeRouter(filterAsyncRouter(RR))
      setrout(end)
    }
  }, [RR])
  const element = useRoutes(rout)

  return <RecoilRoot>{element}</RecoilRoot>
}

export default App
