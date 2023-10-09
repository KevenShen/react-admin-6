import { copy } from 'fs-extra'

async function copyDist() {
  console.log('拷贝开始')
  try {
    await copy('./dist', './docs')
    console.log('拷贝完成')
  } catch (err) {
    console.error(err)
  }
}

copyDist()
