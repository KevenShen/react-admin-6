import getGPT from '@/api/chatgpt'
import Panl from '@/components/TypingCard'
import { Input } from 'antd'
import MarkdownIt from 'markdown-it'
import mdKatex from 'markdown-it-katex'
import mdHighlight from 'markdown-it-highlightjs'
import rehypeHighlight from 'rehype-highlight'
import ReactMarkdown from 'react-markdown'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import ClipboardJS from 'clipboard'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { useRef } from 'react'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import 'github-markdown-css'

// "react-markdown": "7.1.0", // Markdown预览
// "rehype-katex": "^6.0.2", // 数学公式katex语法
// "rehype-raw": "^6.1.1", // 支持HTML语法解析
// "remark-math": "^5.1.1" // 支持数学公式
const { Search } = Input
function ChatGPT() {
  const onSearch = async (value: string) => {
    const messages = [
      {
        role: 'user',
        content: value
      }
    ]
    const response = await getGPT(messages)
  }
  const message =
    "\n\nNestJS 是一个基于 TypeScript 的 Node.js 框架，它提供了一种简单、可扩展的方式来构建高效、可维护的应用程序。NestJS 基于模块化的架构，使得开发者可以轻松地组织代码，并且可以使用现代的开发工具和技术来构建应用程序。\n\n下面是 NestJS 的使用步骤：\n\n1. 安装 NestJS\n\n使用 npm 安装 NestJS：\n\n```\nnpm install -g @nestjs/cli\n```\n\n2. 创建一个新的 NestJS 应用程序\n\n使用 NestJS CLI 创建一个新的应用程序：\n\n```\nnest new my-app\n```\n\n3. 运行应用程序\n\n进入应用程序目录并运行：\n\n```\ncd my-app\nnpm run start\n```\n\n4. 创建一个控制器\n\n使用 NestJS CLI 创建一个控制器：\n\n```\nnest generate controller cats\n```\n\n这将在应用程序中创建一个名为 `cats` 的控制器。\n\n5. 创建一个服务\n\n使用 NestJS CLI 创建一个服务：\n\n```\nnest generate service cats\n```\n\n这将在应用程序中创建一个名为 `cats` 的服务。\n\n6. 注册控制器和服务\n\n在 `app.module.ts` 文件中注册控制器和服务：\n\n```typescript\nimport { Module } from '@nestjs/common';\nimport { CatsController } from './cats/cats.controller';\nimport { CatsService } from './cats/cats.service';\n\n@Module({\n  imports: [],\n  controllers: [CatsController],\n  providers: [CatsService],\n})\nexport class AppModule {}\n```\n\n7. 编写控制器和服务\n\n在 `cats.controller.ts` 文件中编写控制器：\n\n```typescript\nimport { Controller, Get } from '@nestjs/common';\nimport { CatsService } from './cats.service';\n\n@Controller('cats')\nexport class CatsController {\n  constructor(private readonly catsService: CatsService) {}\n\n  @Get()\n  findAll(): string {\n    return this.catsService.findAll();\n  }\n}\n```\n\n在 `cats.service.ts` 文件中编写服务：\n\n```typescript\nimport { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class CatsService {\n  private readonly cats: string[] = ['Tom', 'Jerry', 'Garfield'];\n\n  findAll(): string {\n    return this.cats.join(', ');\n  }\n}\n```\n\n8. 测试应用程序\n\n使用浏览器或者 curl 命令测试应用程序：\n\n```\ncurl http://localhost:3000/cats\n```\n\n这将返回 `Tom, Jerry, Garfield`。\n\n以上就是 NestJS 的使用步骤，希望对你有所帮助。"
  const htmlString = (message) => {
    const md = MarkdownIt().use(mdKatex).use(mdHighlight)

    if (typeof message === 'string') {
      return md.render(message)
    }
    return ''
  }
  const codeBlockRef = useRef(null)
  const renderCodeBlock = (props) => {
    const { language, value } = props
    return (
      <div>
        <pre>
          <code ref={codeBlockRef} className={`language-${language}`}>
            {value}
          </code>
        </pre>
        <button className="copy-button">复制代码</button>
      </div>
    )
  }
  return (
    <Panl title="openAI 交互" source={'ChatGPT模型'}>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <div className="message prose text-slate break-words overflow-hidden">
        <ReactMarkdown
          children={message}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              console.log(node, match)
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={tomorrow}
                  language={match[1]}
                  {...props}
                />
              ) : (
                <code className={className + ' hljs language-javsscript'} {...props}>
                  {children}
                </code>
              )
            }
          }}
        />
      </div>
    </Panl>
  )
}

export default ChatGPT
