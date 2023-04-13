import { Form, Modal, Tree } from 'antd'
import { Key, forwardRef, memo, useEffect, useImperativeHandle, useState } from 'react'
import { getMenu, getMenuById } from '@/api/login'
const EditMenu = (props, ref) => {
  console.log('编辑弹窗刷新')
  const [form] = Form.useForm()
  const [open, setOpen] = useState(false)
  const [treeData, settreeData] = useState([])
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([])
  const [confirmLoading, setConfirmLoading] = useState(false)
  useImperativeHandle(ref, () => ({
    // changeVal 就是暴露给父组件的方法
    showModal: (id) => {
      getMenuId(id)
      setOpen(true)
    }
  }))
  const getmenyList = async () => {
    const { data } = await getMenu()
    settreeData(data)
  }
  // 根据岗位id获取菜单
  const getMenuId = async (id) => {
    const { data: menu } = await getMenuById(id)
    const menuIds: any[] | ((prevState: Key[]) => Key[]) = []
    menu.forEach((item) => {
      menuIds.push(item.id)
      if (item.children) menuIds.push(...item.children.map((child) => child.id))
    })
    setCheckedKeys(menuIds)
  }

  // 挂载时运行一次 获取所有菜单
  useEffect(() => {
    getmenyList()
  }, [])

  // 更新权限菜单
  const handleOk = async () => {}
  // 弹窗关闭
  const handleCancel = () => {
    setOpen(false)
    setCheckedKeys([])
  }
  const onCheck = () => {}

  return (
    <Modal
      forceRender
      title="编辑"
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}>
      <Tree
        checkable
        blockNode
        fieldNames={{ title: 'name', key: 'id' }}
        onCheck={onCheck}
        defaultExpandAll
        checkedKeys={checkedKeys}
        treeData={treeData}
      />
    </Modal>
  )
}

export default memo(forwardRef(EditMenu)) // 必须使用forwardRef包裹组件才能暴露方法
