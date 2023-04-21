import { useState, useEffect } from 'react'
import { ReactSVG } from 'react-svg'
import './index.less'
import '@/styles/font/iconfont'
interface Props {
  name: string
  size?: string
  fill?: string
}
const SvgImage = ({ name, size = '14px', fill = '#000' }: Props) => {
  // const [imgUrl, setImgUrl] = useState('')

  // useEffect(() => {
  //   async function loadSvg() {
  //     const url = new URL(`/src/assets/svg/${name}.svg`, import.meta.url)
  //     console.log(url, import.meta.url)
  //     const module = await import(/* @vite-ignore */ url.pathname)
  //     setImgUrl(module.default)
  //   }
  //   loadSvg()
  // }, [name])
  return (
    <svg
      style={{
        width: size,
        height: size,
        fill,
        fontSize: '20px'
      }}
      className="icon"
      aria-hidden="true">
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}
export default SvgImage
