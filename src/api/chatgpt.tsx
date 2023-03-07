import axios from 'axios'

const config = {
  model: 'gpt-3.5-turbo',
  max_tokens: 1000,
  temperature: 0
}
// 设置请求头
const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer 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'
}
const service = axios.create({
  baseURL: 'https://api.openai.com/v1/chat/completions', // api 的 base_url
  timeout: 5000, // request timeout
  headers
})

export default function getGPT(messages) {
  const data = { ...config, messages }
  return axios.post('https://api.openai.com/v1/chat/completions', data, {
    headers
  })
}
