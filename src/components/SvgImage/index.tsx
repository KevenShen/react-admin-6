import { useState, useEffect } from 'react'
import { ReactSVG } from 'react-svg'
import './index.less'
import '@/styles/font/iconfont'
const SvgImage = ({ name, size, fill }) => {
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
        fontSize: '20px',
        margin: '0 4px'
      }}
      className="icon"
      aria-hidden="true">
      <use xlinkHref="#icon-ancient-gate-fill"></use>
    </svg>
  )
}
export default SvgImage
