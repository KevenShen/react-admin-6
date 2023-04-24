import { createContext } from 'react'
import { useFullScreenHandle, FullScreen } from 'react-full-screen'

// 创建一个上下文
export const Box = createContext(null)

export const FullScreenBox = (props) => {
  const handle = useFullScreenHandle()
  const { children } = props

  return (
    <Box.Provider value={handle}>
      <FullScreen handle={handle}>{children}</FullScreen>
    </Box.Provider>
  )
}
