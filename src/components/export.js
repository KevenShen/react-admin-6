import { readdirSync, statSync, writeFileSync } from 'fs'
import { join } from 'path'

// 获取components文件夹下的所有子文件夹
const dirs = readdirSync('./').filter((file) => {
  return statSync(join('./', file)).isDirectory()
})

// 创建一个index.ts文件
let content = ''

dirs.forEach((dir) => {
  // 为每个子文件夹的index.tsx文件创建一个导入和导出语句
  content += `export { default as ${dir} } from './${dir}';\n`
})

// 将内容写入index.ts文件
writeFileSync('./index.tsx', content)
