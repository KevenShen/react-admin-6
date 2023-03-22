import { Button, Checkbox, Form, Input } from 'antd'
import { getMenuById, userLogin } from '@/api/login'
import './index.less'
import { useSetRecoilState } from 'recoil'
import { menu, token, userInfo, router } from '@/store/Module/user'
import { useNavigate } from 'react-router-dom'

function Login() {
  const setText = useSetRecoilState(userInfo)
  const setTokenRec = useSetRecoilState(token)
  const setmenu = useSetRecoilState(menu)
  const navigate = useNavigate()
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const onFinish = async (values: any) => {
    const { data } = await userLogin({
      username: values.username,
      password: values.password
    })
    setText(data.user)
    setTokenRec(data.token)
    const { data: menu } = await getMenuById(data.user.role)
    setmenu(menu)
    navigate('/')
  }
  return (
    <div className="login">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="400px"
          height="400px"
          viewBox="0 0 700 700">
          <g style={{ transform: 'translate(-75px, 11px) scale(1.22)' }}>
            <path d="m584.12 45.883c30.598 30.574 45.883 70.688 45.883 110.78s-15.309 80.184-45.883 110.78c-30.574 30.574-70.688 45.883-110.78 45.883s-80.184-15.309-110.78-45.883l10.117-10.117c27.801 27.801 64.23 41.688 100.66 41.688 36.43 0 72.863-13.891 100.66-41.688 27.801-27.801 41.688-64.23 41.688-100.66 0-36.43-13.91-72.863-41.688-100.66z" />
            <path d="m566.5 63.5c25.715 25.715 38.582 59.438 38.582 93.164 0 33.703-12.867 67.449-38.582 93.164s-59.438 38.582-93.164 38.582c-33.703 0-67.426-12.867-93.164-38.582l10.117-10.117c22.941 22.941 52.984 34.391 83.047 34.391 30.043 0 60.105-11.469 83.023-34.391 22.941-22.941 34.41-52.984 34.41-83.047s-11.469-60.105-34.391-83.047l10.117-10.117z" />
            <path d="m548.88 81.117c20.855 20.855 31.285 48.191 31.285 75.547 0 27.336-10.43 54.668-31.285 75.547-20.855 20.855-48.191 31.285-75.547 31.285-27.336 0-54.668-10.43-75.547-31.285l10.117-10.117c18.059 18.059 41.758 27.113 65.43 27.113 23.672 0 47.348-9.0508 65.43-27.113 18.059-18.059 27.09-41.758 27.09-65.43 0-23.672-9.0312-47.348-27.09-65.43z" />
            <path d="m531.25 98.754c15.996 15.996 23.984 36.965 23.984 57.906 0 20.965-7.9883 41.934-23.984 57.93s-36.965 23.984-57.906 23.984c-20.965 0-41.934-8.0078-57.93-23.984l10.117-10.117c13.203 13.203 30.508 19.789 47.812 19.789 17.305 0 34.613-6.6133 47.789-19.789 13.203-13.203 19.812-30.508 19.812-47.812 0-17.305-6.6133-34.613-19.812-47.789z" />
            <path d="m513.61 116.37c11.137 11.137 16.73 25.738 16.73 40.293 0 14.578-5.5703 29.176-16.684 40.293-11.117 11.117-25.715 16.684-40.293 16.684s-29.176-5.5703-40.293-16.684l10.117-10.117c8.3438 8.3438 19.258 12.512 30.176 12.512 10.914 0 21.855-4.1719 30.176-12.492 8.3438-8.3438 12.512-19.258 12.512-30.195s-4.1719-21.875-12.469-30.176l10.051-10.117z" />
            <path d="m496.01 133.99c6.2578 6.2578 9.3867 14.465 9.3867 22.676 0 8.2109-3.1289 16.418-9.3867 22.676-6.2578 6.2578-14.465 9.3867-22.676 9.3867-8.2109 0-16.418-3.1289-22.676-9.3867l10.117-10.117c3.4609 3.4844 8.0078 5.2148 12.559 5.2148 4.5469 0 9.0977-1.7305 12.559-5.2148 3.4609-3.4609 5.2148-8.0078 5.2148-12.559 0-4.5469-1.7305-9.0977-5.2148-12.559z" />
            <path d="m239.22 390.78c-30.574-30.598-45.883-70.688-45.883-110.78s15.309-80.184 45.883-110.78c30.598-30.574 70.688-45.883 110.78-45.883s80.184 15.309 110.78 45.883l-10.117 10.117c-27.801-27.801-64.23-41.688-100.66-41.688-36.43 0-72.863 13.91-100.66 41.688-27.801 27.801-41.688 64.23-41.688 100.66 0 36.43 13.91 72.863 41.688 100.66z" />
            <path d="m256.84 373.16c-25.715-25.715-38.582-59.438-38.582-93.164 0-33.723 12.867-67.449 38.582-93.164 25.715-25.715 59.438-38.582 93.164-38.582 33.723 0 67.449 12.867 93.164 38.582l-10.117 10.117c-22.918-22.941-52.984-34.391-83.047-34.391s-60.105 11.469-83.047 34.391c-22.941 22.918-34.391 52.984-34.391 83.047s11.469 60.105 34.391 83.047z" />
            <path d="m274.45 355.55c-20.855-20.855-31.285-48.191-31.285-75.523 0-27.336 10.43-54.668 31.285-75.523s48.211-31.285 75.547-31.285 54.668 10.43 75.523 31.285l-10.117 10.117c-18.059-18.059-41.758-27.09-65.43-27.09-23.672 0-47.348 9.0312-65.406 27.09-18.059 18.082-27.113 41.758-27.113 65.43s9.0312 47.348 27.09 65.406l-10.117 10.117z" />
            <path d="m292.07 337.93c-15.996-15.996-23.984-36.965-23.984-57.93s8.0078-41.934 23.984-57.93c15.996-15.996 36.965-23.984 57.93-23.984s41.934 8.0078 57.93 23.984l-10.117 10.117c-13.203-13.203-30.508-19.812-47.789-19.812-17.305 0-34.613 6.6133-47.789 19.812-13.203 13.203-19.812 30.508-19.812 47.789 0 17.305 6.6133 34.613 19.812 47.789z" />
            <path d="m309.71 320.27c-11.117-11.117-16.684-25.691-16.684-40.27s5.5703-29.133 16.684-40.27c11.117-11.16 25.715-16.73 40.293-16.73s29.176 5.5703 40.293 16.684l-10.117 10.117c-8.3203-8.3438-19.258-12.492-30.176-12.492-10.914 0-21.855 4.1719-30.176 12.492-8.3438 8.3203-12.492 19.258-12.492 30.176 0 10.938 4.1719 21.875 12.492 30.219l-10.117 10.051z" />
            <path d="m327.32 302.68c-6.2578-6.2578-9.3867-14.488-9.3867-22.676 0-8.2109 3.1289-16.418 9.3867-22.676 6.2578-6.2578 14.488-9.3867 22.676-9.3867 8.2109 0 16.418 3.1289 22.676 9.3867l-10.117 10.117c-3.4609-3.4844-8.0078-5.2148-12.559-5.2148-4.5469 0-9.0977 1.7305-12.559 5.1914-3.4844 3.4844-5.2148 8.0312-5.2148 12.559 0 4.5469 1.7305 9.0977 5.1914 12.559l-10.117 10.117z" />
            <path d="m318.76 131.32c2.5977-15.887 7.6562-31.484 15.176-46.148 7.2773-14.199 16.84-27.488 28.621-39.27 30.598-30.598 70.688-45.883 110.78-45.883s80.184 15.309 110.78 45.883l-10.117 10.117c-27.801-27.801-64.23-41.688-100.66-41.688-36.43 0-72.863 13.91-100.66 41.688-10.805 10.805-19.504 22.875-26.07 35.656-6.8125 13.312-11.426 27.469-13.777 41.957l-14.066-2.2852z" />
            <path d="m344.52 129.04c2.5977-12.18 6.9648-24.094 13.066-35.32 5.9023-10.848 13.422-21.035 22.586-30.176 25.691-25.738 59.438-38.605 93.141-38.605 33.723 0 67.449 12.867 93.164 38.582l-10.117 10.117c-22.941-22.941-52.984-34.391-83.047-34.391s-60.125 11.469-83.047 34.391c-8.2109 8.1641-14.934 17.238-20.168 26.891-5.4141 9.9609-9.2969 20.566-11.625 31.484l-13.977-2.9727z" />
            <path d="m369.61 131.19c2.2852-9.2969 5.8359-18.371 10.672-26.934 4.6602-8.3203 10.516-16.109 17.527-23.117 20.855-20.855 48.211-31.285 75.547-31.285s54.691 10.43 75.547 31.285l-10.117 10.117c-18.059-18.059-41.734-27.09-65.43-27.09-23.672 0-47.348 9.0312-65.43 27.09-6.125 6.1016-11.203 12.848-15.219 19.992-4.1914 7.3672-7.2773 15.242-9.2305 23.32l-13.867-3.3516z" />
            <path d="m393.66 137.65c1.707-7.1875 4.4375-14.242 8.1641-20.922 3.5938-6.4805 8.1445-12.535 13.578-17.973 15.996-15.996 36.965-23.984 57.93-23.984 20.965 0 41.934 7.9883 57.906 23.984l-10.117 10.117c-13.203-13.203-30.508-19.812-47.789-19.812-17.305 0-34.613 6.6133-47.812 19.812-4.5273 4.5273-8.2773 9.5195-11.227 14.82-3.0625 5.4141-5.3008 11.25-6.7227 17.262z" />
            <path d="m416.87 149.12c0.82031-6.1016 2.6172-12.113 5.3906-17.707 2.6836-5.4141 6.2773-10.496 10.805-15.02 11.117-11.137 25.691-16.707 40.27-16.707 14.555 0 29.152 5.5703 40.293 16.73l-10.117 10.051c-8.2969-8.3203-19.234-12.469-30.176-12.469-10.914 0-21.855 4.1719-30.176 12.492-3.418 3.3711-6.1016 7.168-8.0977 11.227-2.0859 4.2148-3.4375 8.6992-4.0391 13.246l-14.133-1.8398z" />
            <path d="m450.66 179.34c-6.2578-6.2578-9.3867-14.465-9.3867-22.676 0-8.2109 3.1289-16.418 9.3867-22.676 6.2578-6.2578 14.465-9.3867 22.676-9.3867 8.2109 0 16.418 3.1289 22.676 9.3867l-10.117 10.117c-3.4609-3.4609-8.0078-5.2148-12.559-5.2148-4.5469 0-9.0977 1.7305-12.559 5.2148-3.4844 3.4609-5.2148 8.0078-5.2148 12.559 0 4.5469 1.7305 9.0977 5.2148 12.559z" />
            <path d="m337.44 292.56c30.574 30.598 45.883 70.688 45.883 110.78s-15.309 80.184-45.883 110.78c-30.598 30.598-70.688 45.883-110.78 45.883s-80.184-15.285-110.78-45.883l10.117-10.117c27.801 27.801 64.23 41.688 100.66 41.688 36.43 0 72.863-13.91 100.66-41.688 27.801-27.801 41.711-64.23 41.711-100.66 0-36.43-13.91-72.863-41.711-100.66z" />
            <path d="m319.82 310.18c25.715 25.738 38.582 59.438 38.582 93.164 0 33.703-12.867 67.426-38.582 93.164-25.715 25.715-59.438 38.582-93.164 38.582-33.703 0-67.449-12.867-93.164-38.582l10.117-10.117c22.941 22.941 52.984 34.391 83.047 34.391s60.125-11.469 83.047-34.391c22.941-22.941 34.391-52.984 34.391-83.047 0-30.043-11.469-60.105-34.391-83.023l10.117-10.117z" />
            <path d="m302.19 327.81c20.855 20.855 31.285 48.191 31.285 75.547 0 27.336-10.43 54.668-31.285 75.547-20.855 20.855-48.191 31.285-75.547 31.285-27.336 0-54.668-10.43-75.547-31.285l10.117-10.117c18.059 18.059 41.758 27.09 65.43 27.09s47.371-9.0312 65.43-27.09c18.059-18.059 27.113-41.758 27.113-65.43s-9.0312-47.371-27.113-65.43z" />
            <path d="m284.57 345.43c15.996 15.996 23.984 36.965 23.984 57.93s-7.9883 41.934-23.984 57.906c-15.996 15.996-36.965 23.984-57.93 23.984s-41.934-7.9883-57.906-23.984l10.117-10.117c13.203 13.203 30.508 19.812 47.789 19.812 17.305 0 34.613-6.6133 47.812-19.812 13.203-13.203 19.789-30.508 19.789-47.789 0-17.305-6.6133-34.613-19.789-47.812z" />
            <path d="m266.95 363.05c11.117 11.137 16.684 25.715 16.684 40.293s-5.5703 29.176-16.684 40.293c-11.137 11.117-25.715 16.684-40.312 16.684-14.555 0-29.133-5.5703-40.27-16.684l10.051-10.117c8.3203 8.3438 19.258 12.492 30.195 12.492 10.914 0 21.855-4.1719 30.176-12.492 8.3438-8.3438 12.512-19.258 12.512-30.176 0-10.914-4.1719-21.855-12.492-30.176l10.117-10.117z" />
            <path d="m249.34 380.66c6.2578 6.2578 9.3867 14.465 9.3867 22.676 0 8.2109-3.1289 16.418-9.3867 22.676-6.3008 6.2578-14.488 9.3867-22.676 9.3867s-16.395-3.1289-22.652-9.3867l10.051-10.117c3.4844 3.4609 8.0312 5.2148 12.602 5.2148 4.5469 0 9.0977-1.7305 12.578-5.1914 3.4609-3.4844 5.1914-8.0312 5.1914-12.578s-1.7305-9.0977-5.2148-12.559z" />
            <path d="m203.61 262.85c-14.488 2.3516-28.645 6.9648-41.957 13.777-12.781 6.5664-24.828 15.242-35.656 26.07-27.801 27.801-41.688 64.23-41.688 100.66 0 36.43 13.91 72.863 41.688 100.66l-10.117 10.117c-30.598-30.574-45.883-70.688-45.883-110.78s15.285-80.184 45.883-110.78c11.805-11.805 25.07-21.344 39.27-28.621 14.664-7.5195 30.262-12.578 46.148-15.176l2.2852 14.066z" />
            <path d="m201.99 288.5c-10.895 2.3281-21.52 6.2109-31.484 11.625-9.6523 5.2578-18.727 11.957-26.891 20.145-22.941 22.965-34.391 53.027-34.391 83.066 0 30.062 11.469 60.105 34.391 83.047l-10.117 10.117c-25.715-25.715-38.582-59.438-38.582-93.164 0-33.723 12.867-67.449 38.582-93.164 9.1641-9.1406 19.348-16.664 30.195-22.562 11.227-6.1016 23.141-10.473 35.32-13.066l2.9727 13.977z" />
            <path d="m204.54 313.48c-8.0742 1.9766-15.93 5.0352-23.32 9.207-7.1445 4.0391-13.867 9.1172-19.992 15.242-18.059 18.059-27.09 41.734-27.09 65.43 0 23.672 9.0312 47.348 27.09 65.43l-10.117 10.117c-20.855-20.855-31.285-48.211-31.285-75.547s10.43-54.691 31.285-75.547c7.0352-7.0117 14.82-12.867 23.117-17.551 8.5625-4.8164 17.637-8.3633 26.934-10.648l3.3516 13.867z" />
            <path d="m210.93 337.6c-6.0117 1.4219-11.848 3.6602-17.285 6.6992-5.2812 2.9727-10.273 6.7227-14.797 11.25-13.203 13.203-19.812 30.508-19.812 47.812s6.6133 34.59 19.812 47.789l-10.117 10.117c-15.996-15.996-23.984-36.965-23.984-57.906 0-20.965 7.9883-41.934 23.984-57.93 5.4375-5.4375 11.492-9.9844 17.926-13.578 6.6992-3.7266 13.758-6.4805 20.965-8.1641l3.3047 13.91z" />
            <path d="m220.94 361.03c-4.5469 0.59766-9.0312 1.9531-13.246 4.0391-4.0586 1.9961-7.8555 4.7031-11.227 8.0742-8.3438 8.3633-12.492 19.301-12.492 30.219 0 10.938 4.1719 21.875 12.492 30.195l-10.117 10.051c-11.117-11.117-16.684-25.691-16.684-40.27 0-14.578 5.5703-29.176 16.684-40.293 4.5273-4.5039 9.6055-8.0977 15.02-10.781 5.6133-2.7734 11.605-4.5703 17.707-5.3906l1.8398 14.133z" />
            <path d="m239.22 390.78c-3.4609-3.4844-8.0078-5.2148-12.559-5.2148-4.5469 0-9.0977 1.7305-12.559 5.2148-3.4844 3.4609-5.2148 8.0078-5.2148 12.559 0 4.5703 1.7305 9.1172 5.2148 12.602l-10.117 10.051c-6.2578-6.2578-9.3867-14.465-9.3867-22.652s3.1289-16.395 9.3867-22.652c6.2578-6.3008 14.465-9.4297 22.676-9.4297 8.2109 0 16.418 3.1289 22.676 9.3867l-10.117 10.117z" />
            <path d="m504.58 305.36c-2.5977 15.887-7.6562 31.484-15.176 46.148-7.3008 14.199-16.84 27.488-28.621 39.293-11.805 11.805-25.07 21.344-39.293 28.621-14.664 7.5195-30.262 12.578-46.148 15.176l-2.2852-14.09c14.488-2.3516 28.645-6.9648 41.957-13.777 12.801-6.5469 24.848-15.242 35.656-26.07 10.805-10.805 19.504-22.852 26.07-35.656 6.832-13.312 11.426-27.469 13.777-41.957l14.09 2.2852z" />
            <path d="m478.82 307.64c-2.5977 12.18-6.9648 24.094-13.09 35.32-5.9023 10.848-13.422 21.035-22.562 30.176l-0.023437 0.023437c-9.1406 9.1406-19.324 16.664-30.176 22.562-11.227 6.1016-23.141 10.496-35.32 13.09l-2.9727-13.977c10.895-2.3281 21.5-6.2109 31.484-11.625 9.6289-5.2578 18.727-11.98 26.914-20.145 8.1875-8.1875 14.91-17.285 20.145-26.914 5.4141-9.9609 9.2969-20.566 11.625-31.484z" />
            <path d="m453.72 305.49c-2.2852 9.2969-5.8359 18.371-10.672 26.934-4.7031 8.3438-10.539 16.129-17.527 23.117-6.9883 6.9883-14.777 12.824-23.117 17.527-8.5625 4.8359-17.637 8.3867-26.934 10.672l-3.3516-13.867c8.0742-1.9766 15.93-5.0586 23.32-9.207 7.0781-3.9922 13.824-9.0742 19.992-15.242 6.168-6.168 11.25-12.914 15.242-19.992 4.1719-7.3672 7.2344-15.242 9.207-23.32l13.867 3.3516z" />
            <path d="m429.67 299.02c-1.7305 7.2344-4.4375 14.289-8.1641 20.965-3.6367 6.4805-8.1641 12.535-13.578 17.949-5.4141 5.4141-11.469 9.9414-17.949 13.555-6.6562 3.75-13.734 6.4805-20.945 8.1875l-3.2852-13.91c5.9688-1.4219 11.805-3.6602 17.262-6.7227 5.2578-2.9297 10.25-6.6797 14.797-11.227s8.2969-9.5391 11.227-14.777c3.0625-5.4805 5.3008-11.316 6.7227-17.305l13.91 3.2852z" />
            <path d="m406.46 287.57c-0.79688 6.125-2.5977 12.113-5.3906 17.707-2.707 5.457-6.3008 10.539-10.781 15.043-4.4805 4.4805-9.5859 8.0742-15.043 10.781-5.6133 2.7734-11.605 4.5703-17.707 5.3906l-1.8398-14.133c4.5469-0.59766 9.0078-1.9531 13.246-4.0391 4.0156-1.9766 7.832-4.6797 11.227-8.0977 3.418-3.418 6.125-7.2109 8.0977-11.227 2.0859-4.2148 3.4375-8.6992 4.0391-13.246l14.133 1.8398z" />
            <path d="m372.68 257.32c6.2578 6.2578 9.3867 14.488 9.3867 22.676 0 8.2109-3.1289 16.418-9.3867 22.676-6.2578 6.2578-14.488 9.3867-22.676 9.3867-8.2109 0-16.418-3.1289-22.676-9.3867l10.117-10.117c3.4609 3.4844 8.0078 5.2148 12.559 5.2148 4.5469 0 9.0977-1.7305 12.559-5.1914 3.4844-3.4844 5.2148-8.0312 5.2148-12.559 0-4.5469-1.7305-9.0977-5.1914-12.559l10.117-10.117z" />
            <path d="m584.12 514.12c-30.574 30.598-70.688 45.883-110.78 45.883s-80.184-15.285-110.78-45.883c-3.2852-3.2852-6.5234-6.8555-9.7188-10.695-3.0625-3.6836-5.9688-7.543-8.7188-11.516l11.738-8.0547c2.418 3.5273 5.0586 7.0352 7.9219 10.449 2.6172 3.1523 5.5898 6.3906 8.875 9.6953 27.801 27.801 64.23 41.688 100.66 41.688 36.43 0 72.863-13.91 100.66-41.688l10.117 10.117z" />
            <path d="m566.5 496.5c-25.715 25.715-59.438 38.582-93.164 38.582-33.703 0-67.449-12.867-93.164-38.582-4.4805-4.5273-8.6289-9.3203-12.379-14.332-3.8398-5.125-7.2344-10.449-10.207-15.906l12.512-6.8125c2.6641 4.9023 5.7031 9.6523 9.0977 14.176 3.3047 4.4141 6.9883 8.6992 11.07 12.758 22.965 22.941 53.027 34.391 83.066 34.391 30.062 0 60.105-11.469 83.047-34.391l10.117 10.117z" />
            <path d="m548.88 478.88c-20.855 20.855-48.191 31.285-75.547 31.285-27.336 0-54.668-10.43-75.547-31.285-6.9453-6.9453-12.781-14.711-17.484-23.031-4.8359-8.543-8.3867-17.57-10.672-26.801l13.867-3.418c1.9961 8.0742 5.0586 15.887 9.207 23.23 3.9922 7.0547 9.0508 13.758 15.199 19.879 18.059 18.059 41.758 27.09 65.43 27.09 23.672 0 47.348-9.0312 65.43-27.09l10.117 10.117z" />
            <path d="m531.25 461.27c-15.996 15.996-36.965 23.984-57.906 23.984-20.965 0-41.934-7.9883-57.93-23.984-5.4141-5.4141-9.9414-11.449-13.535-17.859-3.6836-6.5664-6.4102-13.602-8.1445-20.879l13.867-3.2852c1.4219 5.8789 3.6602 11.672 6.7461 17.172 2.9492 5.2578 6.6797 10.227 11.184 14.73 13.203 13.203 30.508 19.812 47.812 19.812 17.305 0 34.613-6.6133 47.789-19.812l10.117 10.117z" />
            <path d="m513.63 443.63c-11.117 11.117-25.715 16.684-40.293 16.684-14.555 0-29.133-5.5703-40.27-16.684-4.5039-4.4609-8.0977-9.5391-10.781-14.977-2.7734-5.5898-4.5703-11.559-5.3906-17.617l14.133-1.9062c0.62109 4.5469 1.9766 9.0078 4.0586 13.203 1.9766 3.9922 4.6797 7.7891 8.0742 11.184 8.3203 8.3438 19.258 12.492 30.176 12.492 10.914 0 21.855-4.1719 30.176-12.492l10.117 10.117z" />
            <path d="m495.99 426.04c-6.2578 6.2578-14.465 9.3867-22.652 9.3867s-16.395-3.1289-22.652-9.3867c-6.3008-6.2578-9.4297-14.465-9.4297-22.676s3.1289-16.418 9.3867-22.676l10.117 10.117c-3.4844 3.4609-5.2148 8.0078-5.2148 12.559 0 4.5469 1.7305 9.0977 5.2148 12.559 3.4375 3.4844 8.0078 5.2148 12.559 5.2148 4.5703 0 9.1172-1.7305 12.602-5.2148l10.051 10.117z" />
            <path d="m561.91 274.12c3.8594 2.6406 7.6992 5.5703 11.516 8.7422 3.8398 3.1953 7.4102 6.4336 10.695 9.7188 30.598 30.598 45.883 70.688 45.883 110.78s-15.309 80.184-45.883 110.78l-10.117-10.117c27.801-27.801 41.688-64.23 41.688-100.66 0-36.43-13.91-72.863-41.688-100.66-3.2852-3.2852-6.5234-6.2578-9.6953-8.8984-3.3047-2.75-6.7891-5.3906-10.449-7.8984l8.0547-11.781z" />
            <path d="m536.26 287.59c5.457 2.9727 10.781 6.3672 15.887 10.207 5.1016 3.8164 9.8945 7.9414 14.332 12.379 25.715 25.715 38.582 59.438 38.582 93.164 0 33.703-12.867 67.449-38.582 93.164l-10.117-10.117c22.941-22.941 34.391-52.984 34.391-83.047s-11.469-60.125-34.391-83.047c-4.1484-4.1484-8.4102-7.8555-12.758-11.117-4.5273-3.3945-9.2734-6.4102-14.176-9.0742l6.8125-12.512z" />
            <path d="m498.81 299.61c9.2969 2.2852 18.371 5.8359 26.934 10.672 8.3203 4.6602 16.109 10.516 23.117 17.527 20.855 20.855 31.285 48.191 31.285 75.547 0 27.336-10.43 54.668-31.285 75.547l-10.117-10.117c18.059-18.059 27.09-41.758 27.09-65.43s-9.0312-47.371-27.09-65.43c-6.1016-6.125-12.848-11.203-19.992-15.219-7.3672-4.1914-15.242-7.2773-23.32-9.2305l3.3516-13.867z" />
            <path d="m492.35 323.66c7.1875 1.707 14.242 4.4375 20.945 8.1641 6.4805 3.5938 12.512 8.1445 17.973 13.578 15.996 15.996 23.984 36.965 23.984 57.93 0 20.965-7.9883 41.934-23.984 57.906l-10.117-10.117c13.203-13.203 19.812-30.508 19.812-47.789 0-17.305-6.6133-34.613-19.812-47.812-4.5273-4.5273-9.5195-8.2773-14.797-11.227-5.4375-3.0625-11.27-5.3008-17.262-6.7227l3.2852-13.91z" />
            <path d="m480.9 346.89c6.1016 0.82031 12.113 2.6172 17.707 5.3906 5.457 2.707 10.539 6.3008 15.02 10.781 11.117 11.16 16.684 25.738 16.684 40.293 0 14.578-5.5703 29.176-16.684 40.293l-10.117-10.117c8.3438-8.3438 12.492-19.258 12.492-30.176 0-10.938-4.1719-21.875-12.469-30.176-3.4375-3.418-7.2344-6.1016-11.25-8.0977-4.2148-2.0859-8.6992-3.4375-13.223-4.0391l1.8398-14.133z" />
            <path d="m450.66 380.66c6.2578-6.2578 14.465-9.3867 22.676-9.3867 8.2109 0 16.418 3.1289 22.676 9.3867 6.2578 6.2578 9.3867 14.465 9.3867 22.676 0 8.2109-3.1289 16.418-9.3867 22.676l-10.117-10.117c3.4609-3.4609 5.2148-8.0078 5.2148-12.559 0-4.5469-1.7305-9.0977-5.2148-12.559-3.4609-3.4844-8.0078-5.2148-12.559-5.2148-4.5469 0-9.0977 1.7305-12.559 5.2148z" />
            <path d="m138.09 285.88c-3.9922-2.75-7.832-5.6562-11.516-8.7188-3.8398-3.1953-7.4102-6.4336-10.695-9.7188-30.598-30.598-45.883-70.688-45.883-110.78s15.285-80.184 45.883-110.78l10.117 10.117c-27.801 27.801-41.688 64.23-41.688 100.66 0 36.43 13.91 72.863 41.688 100.66 3.2852 3.2852 6.5234 6.2578 9.6953 8.875 3.4375 2.8633 6.9219 5.5039 10.449 7.9219l-8.0547 11.738z" />
            <path d="m163.74 272.41c-5.457-2.9727-10.781-6.3906-15.906-10.207-5.0156-3.75-9.8086-7.875-14.312-12.402-25.738-25.691-38.605-59.438-38.605-93.141 0-33.723 12.867-67.449 38.582-93.164l10.117 10.117c-22.941 22.941-34.391 52.984-34.391 83.047s11.469 60.125 34.391 83.047c4.0586 4.1055 8.3438 7.7891 12.758 11.094 4.5273 3.3945 9.2734 6.4102 14.176 9.0977l-6.8125 12.512z" />
            <path d="m200.95 260.34c-9.2305-2.2852-18.262-5.8359-26.801-10.672-8.2969-4.7031-16.062-10.539-23.031-17.484-20.855-20.855-31.285-48.211-31.285-75.547s10.43-54.691 31.285-75.547l10.117 10.117c-18.059 18.059-27.09 41.734-27.09 65.43 0 23.672 9.0312 47.348 27.09 65.43 6.1445 6.1445 12.848 11.203 19.879 15.199 7.3438 4.1484 15.152 7.2109 23.23 9.207l-3.418 13.867z" />
            <path d="m207.49 236.27c-7.2539-1.7305-14.312-4.4609-20.879-8.1445-6.4102-3.5938-12.445-8.1211-17.859-13.535-15.996-15.996-23.984-36.965-23.984-57.93s7.9883-41.934 23.984-57.906l10.117 10.117c-13.203 13.203-19.812 30.508-19.812 47.789 0 17.305 6.6133 34.613 19.812 47.812 4.5039 4.5039 9.4727 8.2305 14.73 11.184 5.5039 3.0859 11.293 5.3477 17.172 6.7461l-3.2852 13.867z" />
            <path d="m218.96 213.11c-6.0781-0.82031-12.047-2.6172-17.617-5.3906-5.4375-2.6836-10.516-6.2773-14.977-10.738-11.117-11.16-16.684-25.738-16.684-40.293 0-14.578 5.5703-29.176 16.684-40.293l10.117 10.117c-8.3438 8.3203-12.492 19.258-12.492 30.176 0 10.938 4.1719 21.875 12.492 30.195 3.418 3.3945 7.1875 6.0781 11.184 8.0547 4.1914 2.0859 8.6758 3.4375 13.203 4.0586l-1.9062 14.133z" />
            <path d="m249.34 179.34c-6.2578 6.2578-14.465 9.3867-22.676 9.3867-8.2109 0-16.418-3.1289-22.676-9.3867-6.2578-6.3008-9.3867-14.488-9.3867-22.676s3.1289-16.395 9.3867-22.652l10.117 10.051c-3.4609 3.4844-5.2148 8.0312-5.2148 12.602 0 4.5469 1.7305 9.1172 5.1914 12.578 3.4844 3.4609 8.0312 5.1914 12.578 5.1914s9.0977-1.7305 12.559-5.2148z" />
            <path d="m344.1 76.145c-2.5078-3.6602-5.1484-7.1445-7.8984-10.449-2.6406-3.1523-5.5898-6.3906-8.8984-9.6953-27.801-27.801-64.23-41.688-100.66-41.688-36.43 0-72.863 13.91-100.66 41.688l-10.117-10.117c30.574-30.598 70.688-45.883 110.78-45.883s80.184 15.309 110.78 45.883c3.2852 3.2852 6.5234 6.8555 9.7188 10.695 3.1719 3.8164 6.0781 7.6562 8.7422 11.516l-11.781 8.0547z" />
            <path d="m329.88 100.55c-2.6641-4.9023-5.7031-9.6523-9.0742-14.176-3.2617-4.3477-6.9648-8.6094-11.117-12.758-22.918-22.941-52.984-34.391-83.047-34.391s-60.105 11.469-83.047 34.391l-10.117-10.117c25.715-25.715 59.438-38.582 93.164-38.582 33.723 0 67.449 12.867 93.164 38.582 4.4375 4.4375 8.5625 9.2305 12.379 14.332 3.8398 5.1016 7.2344 10.43 10.207 15.887l-12.512 6.8125z" />
            <path d="m316.52 134.54c-1.9766-8.0742-5.0352-15.93-9.207-23.32-4.0391-7.1445-9.1172-13.867-15.242-19.992-18.059-18.059-41.734-27.09-65.43-27.09-23.672 0-47.348 9.0312-65.43 27.09l-10.117-10.117c20.855-20.855 48.211-31.285 75.547-31.285s54.691 10.43 75.547 31.285c7.0117 7.0352 12.867 14.82 17.551 23.117 4.8164 8.5625 8.3633 17.637 10.648 26.934l-13.867 3.3516z" />
            <path d="m292.43 140.93c-1.4219-6.0117-3.6602-11.848-6.6992-17.285-2.9727-5.2812-6.7227-10.273-11.25-14.797-13.203-13.203-30.508-19.812-47.812-19.812-17.305 0-34.59 6.6133-47.789 19.812l-10.117-10.117c15.996-15.996 36.965-23.984 57.906-23.984 20.965 0 41.934 7.9883 57.93 23.984 5.4375 5.4375 9.9844 11.492 13.578 17.926 3.7266 6.6992 6.4805 13.758 8.1641 20.965l-13.91 3.2852z" />
            <path d="m268.97 150.94c-0.59766-4.5273-1.9531-9.0078-4.0391-13.223-1.9961-4.0156-4.6797-7.832-8.0977-11.227-8.2969-8.3438-19.234-12.492-30.176-12.492-10.914 0-21.855 4.1719-30.176 12.492l-10.117-10.117c11.117-11.137 25.715-16.684 40.293-16.684 14.555 0 29.133 5.5703 40.27 16.707 4.5039 4.4609 8.0977 9.5625 10.805 15.02 2.7734 5.5898 4.5703 11.605 5.3906 17.707l-14.133 1.8398z" />
            <path d="m239.22 169.22c3.4844-3.4609 5.2148-8.0078 5.2148-12.559 0-4.5469-1.7305-9.0977-5.2148-12.559-3.4609-3.4609-8.0078-5.2148-12.559-5.2148-4.5469 0-9.0977 1.7305-12.559 5.2148l-10.117-10.117c6.2578-6.2578 14.465-9.3867 22.676-9.3867 8.2109 0 16.418 3.1289 22.676 9.3867 6.2578 6.2578 9.3867 14.465 9.3867 22.676 0 8.2109-3.1289 16.418-9.3867 22.676z" />
          </g>
        </svg>
      </div>
      <Form
        className="login-form"
        name="basic"
        style={{ width: 400 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
          <Input placeholder="用户名" />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
          <Input.Password placeholder="密码" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
