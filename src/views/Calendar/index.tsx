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

const { Search } = Input

const Calendar = () => {
  const [taskList, setTaskList] = useState([])
  const [taskInput, setTaskInput] = useState('')
  const [calendarEvents, setCalendarEvents] = useState([])
  const searchBox = useRef<InputRef>(null)
  const [colorList] = useState(['#007bff', '#ffc107', '#dc3545', '#6c757d'])
  const handleAddTask = () => {
    if (taskInput) {
      setTaskList([...taskList, taskInput])
      setTaskInput('')
    }
  }
  const onSearch = () => {}
  const colorClick = (item: string) => {
    console.log(item)
    const child: any = searchBox?.current?.input?.parentNode?.nextSibling?.firstChild
    child.style.backgroundColor = item
    console.dir(child)
  }

  const handleEventDrop = (info) => {
    const newEvents = [...calendarEvents]
    newEvents.push({
      title: info.draggedEl.innerText,
      start: info.date
    })
    setCalendarEvents(newEvents)
  }

  return (
    <Panl title="工作日历" source={'工作日历'} className="calendar">
      <div className="eventList">
        <Card title="今天" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="昨天" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="添加事件" bordered={false} style={{ width: 300 }}>
          <div className="icon-block">
            {colorList.map((item) => {
              return (
                <p
                  onClick={() => colorClick(item)}
                  key={item}
                  className="son"
                  style={{ backgroundColor: item }}></p>
              )
            })}
          </div>
          <Search
            ref={searchBox}
            placeholder="添加事件"
            allowClear
            enterButton="添加"
            size="large"
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
