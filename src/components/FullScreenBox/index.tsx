import { createContext } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

// 创建一个上下文
export const Box = createContext(null)
const FullScreenBox = (props) => {
  const handle = useFullScreenHandle()
  const { children } = props

  return (
    <Box.Provider value={handle}>
      <FullScreen handle={handle}>{children}</FullScreen>
    </Box.Provider>
  )
}

export default FullScreenBox
