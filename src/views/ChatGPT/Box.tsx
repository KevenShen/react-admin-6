import { useEffect, useRef } from 'react'

import { useRecoilValue } from 'recoil'
import { messGPT } from '@/store/Module/chatGPT'

function Box() {
  const box = useRef(document.createElement('div')) // 获取内容盒子
  const aiImg =
    'https://img1.baidu.com/it/u=615087686,66411109&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
  const userImg =
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F30%2F20200330091314_yNVUZ.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1680767229&t=4b75ef7354567d561980ea4d10b3b521'
  const msgList = useRecoilValue(messGPT)

  useEffect(() => {
    const h = box.current.scrollHeight
    if (h) {
      box.current.scrollTo(0, h)
    }
  }, [msgList])
  return (
    <div className="content" ref={box}>
      {msgList.map((item) => {
        return (
          <div className={'infobox ' + (item.role === 'user' ? 'end' : 'start')} key={item.time}>
            {item.role === 'user' ? '' : <img style={{ marginRight: '10px' }} src={aiImg} />}
            <div
              className={
                'message prose text-slate break-words ' + (item.role === 'user' ? 'left' : 'right')
              }
              dangerouslySetInnerHTML={{ __html: item.content }}></div>
            {item.role === 'user' ? <img style={{ marginLeft: '10px' }} src={userImg} /> : ''}
          </div>
        )
      })}
    </div>
  )
}

export default Box
