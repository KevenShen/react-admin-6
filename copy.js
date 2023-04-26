import { copy } from 'fs-extra'

async function copyDist() {
  try {
    await copy('./dist', './docs')
    console.log('拷贝完成')
  } catch (err) {
    console.error(err)
  }
}

copyDist()
