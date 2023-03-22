import { useRef, useState } from 'react'
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate
} from '@fullcalendar/core'
import { Card, Input, InputRef } from 'antd'
import zhLocale from '@fullcalendar/core/locales/zh-cn'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import './index.less'
import Panl from '@/components/TypingCard'
import { Color, TaskList } from '@/Type'

const { Search } = Input

const Calendar = () => {
  const [taskList, setTaskList] = useState<Array<TaskList>>([])
  const [currentColor, setCurrentColor] = useState<Color>({
    color: '#007bff',
    name: 'health',
    describe: '正常'
  })
  const [calendarEvents, setCalendarEvents] = useState([])
  const searchBox = useRef<InputRef>(null)
  const [colorList] = useState<Array<Color>>([
    {
      color: '#007bff',
      name: 'health',
      describe: '正常'
    },
    {
      color: '#ffc107',
      name: 'same',
      describe: '一般'
    },
    {
      color: '#dc3545',
      name: 'warn',
      describe: '警告'
    },
    {
      color: '#6c757d',
      name: 'ordinary',
      describe: '普通'
    }
  ])
  // const handleAddTask = () => {
  //   if (taskInput) {
  //     setTaskList([...taskList, taskInput])
  //     setTaskInput('')
  //   }
  // }
  const onSearch = (item: string) => {
    setTaskList([...taskList, { ...currentColor, value: item }])
    console.log(taskList)
  }
  const colorClick = (item: Color) => {
    setCurrentColor(item)
    const child: any = searchBox?.current?.input?.parentNode?.nextSibling?.firstChild
    child.style.backgroundColor = item.color
  }

  // const handleEventDrop = (info) => {
  //   const newEvents = [...calendarEvents]
  //   newEvents.push({
  //     title: info.draggedEl.innerText,
  //     start: info.date
  //   })
  //   setCalendarEvents(newEvents)
  // }

  return (
    <Panl title="工作日历" source={'工作日历'} className="calendar">
      <div className="eventList">
        <Card title="今天" bordered={false} style={{ width: 300 }}>
          {taskList.map((item) => {
            return (
              <p key={item.color} className="task" style={{ backgroundColor: item.color }}>
                {item.value}
              </p>
            )
          })}
        </Card>
        <Card title="昨天" bordered={false} style={{ width: 300 }}></Card>
        <Card title="添加事件" bordered={false} style={{ width: 300 }}>
          <div className="icon-block">
            {colorList.map((item) => {
              return (
                <p
                  onClick={() => colorClick(item)}
                  key={item.name}
                  className="son"
                  style={{ backgroundColor: item.color }}></p>
              )
            })}
          </div>
          <Search
            ref={searchBox}
            className={currentColor.name}
            placeholder="添加事件"
            allowClear
            enterButton="添加"
            size="middle"
            onSearch={onSearch}
          />
        </Card>
      </div>
      <div className="app-card demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          locale={zhLocale}
          // weekends={weekendsVisible}
          // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          // select={handleDateSelect}
          // eventContent={renderEventContent} // custom render function
          // eventClick={handleEventClick}
          // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
        />
      </div>
    </Panl>
  )
}

export default Calendar
