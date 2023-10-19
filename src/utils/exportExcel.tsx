import * as XLSX from 'xlsx'
function exportToExcel(data, fileName) {
  // 定义字段和表头的映射
  const headerMap = { name: '姓名', age: '年龄', city: '城市' }

  // 将数据转换为新的格式
  const newData = data.map((item) => {
    const newItem = {}
    for (const key in item) {
      newItem[headerMap[key] || key] = item[key]
    }
    return newItem
  })

  const ws = XLSX.utils.json_to_sheet(newData, {
    header: ['姓名', '年龄', '城市']
  })

  // 设置列宽为自适应
  ws['!cols'] = Object.keys(ws).map(() => ({ wch: 15 }))
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
  XLSX.writeFile(wb, fileName)
}

export default exportToExcel
