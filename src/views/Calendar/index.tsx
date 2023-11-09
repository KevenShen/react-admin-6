import { Color } from '@/Type'
import CollCard from '@/components/CollCard'
import Panl from '@/components/Panl'
import { calendar } from '@/store/Module/user'
import {
  DateSelectArg,
  EventApi,
  EventChangeArg,
  EventClickArg,
  EventContentArg
} from '@fullcalendar/core'
import zhLocale from '@fullcalendar/core/locales/zh-cn'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Card, Input, InputRef } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import Sortable from 'sortablejs'
import './index.less'

const { Search } = Input

const recursiveQuery = (e): Date => {
  if ([...e.classList].includes('fc-daygrid-day')) {
    return new Date(e.getAttribute('data-date'))
  } else {
    return recursiveQuery(e.parentElement)
  }
}
const Calendar = () => {
  const [taskList, setTaskList] = useState([])
  const [currentColor, setCurrentColor] = useState<Color>({
    color: '#007bff',
    name: 'health',
    describe: '正常'
  })
  const searchBox = useRef<InputRef>(null)
  const [events, setEvents] = useRecoilState<EventApi[]>(calendar) // 事件列
  const [dragging, setDragging] = useState<any>({}) // 当前选择的
  const [selectEve, setSelectEve] = useState<DateSelectArg>() // 当前选择的
  const [dstDom, setDstDom] = useState() // 目标dom
  const calendarRef = useRef(null)

  const handleDragOnEnd = (event: any) => {
    const dstDom = event.originalEvent // 目标dom
    setDstDom(dstDom)
  }

  const handleDragOnStart = (event: any) => {
    const srcDom = event.item // 原dom
    const dra = { value: srcDom.innerHTML, color: srcDom.style.backgroundColor }
    setDragging(dra)
  }

  useEffect(() => {
    if (dstDom) {
      handleDrop(dstDom)
    }
  }, [dstDom])
  useEffect(() => {
    const sortable = document.getElementById('sortable')
    new Sortable(sortable, {
      animation: 150,
      forceFallback: true,
      fallbackClass: 'dragged-item',
      onEnd: handleDragOnEnd,
      onStart: handleDragOnStart
    })
    colorClick(currentColor)
  }, [])

  // 增加事件
  const handleDrop = (e) => {
    try {
      e.preventDefault()
      const id = new Date().toISOString()
      const ev: EventApi = {
        id,
        title: dragging.value,
        backgroundColor: dragging.color,
        borderColor: dragging.color
      }
      if (selectEve) {
        ev.start = selectEve.startStr
        ev.end = selectEve.endStr
        ev.allDay = selectEve.allDay
        setSelectEve(null)
      } else {
        ev.start = recursiveQuery(e.target)
        ev.allDay = true
      }
      if (dragging) {
        setEvents([...events, ev])
        // setDragging(null)
      }
    } catch (e) {
      console.log(e)
    }
  }
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
  // 添加事件到列表
  const onSearch = (item: string) => {
    if (!item) return
    setTaskList([...taskList, { ...currentColor, value: item }])
  }
  // 选择颜色
  const colorClick = (item: Color) => {
    setCurrentColor(item)
    const child: any = searchBox?.current?.input?.parentNode?.nextSibling?.firstChild
    child.style.backgroundColor = item.color
    const span: any = searchBox?.current?.input?.parentNode
    span.style.borderColor = item.color
  }

  // 日历选择
  const handleSelect = (selectInfo: DateSelectArg) => {
    setSelectEve(selectInfo)
    const calendarApi = selectInfo.view.calendar
    // calendarApi.unselect() // 清除页面选中的框框
    // calendarApi.addEvent({
    //   id: Math.random() + '',
    //   title: '事件事件',
    //   start: selectInfo.startStr,
    //   end: selectInfo.endStr,
    //   allDay: selectInfo.allDay,
    //   classNames: ['ggg']
    // })
  }
  // 日历渲染
  const renderEventContent = (eventContent: EventContentArg) => {
    return (
      <div
        style={{
          backgroundColor: eventContent.backgroundColor,
          width: '100%',
          borderRadius: '3px',
          color: '#fff'
        }}>
        <b>{eventContent.timeText}</b>
        &nbsp;
        <i>{eventContent.event.title}</i>
      </div>
    )
  }

  // 点击删除事件
  const handleEventClick = (clickInfo: EventClickArg) => {
    // clickInfo.event.remove()
    // setEvents(events.filter((item) => item.id !== clickInfo.event.id))
  }
  // 事件改变 -- 日历拖拽时更新
  const eventChange = (event: EventChangeArg) => {
    const arr = events.map((item) => {
      if (item.id === event.event.id) {
        item.start = event.event.start
        return item
      } else {
        return item
      }
    })
    setEvents(arr)
  }

  return (
    <Panl title="工作日历" source={'工作日历'} className="calendar">
      <div className="eventList" style={{ position: 'sticky', top: '10px' }}>
        <CollCard title="任务清单" style={{ width: 300 }}>
          <div id="sortable">
            {taskList.map((item) => {
              return (
                <p key={item.color} className="task" style={{ backgroundColor: item.color }}>
                  {item.value}
                </p>
              )
            })}
          </div>
        </CollCard>
        {/* <Card title="回收站" bordered={false} style={{ width: 300 }}>
          <div onDrop={handleDelDrop} onDragOver={(e) => e.preventDefault()}>
            烦烦烦威威温热微软
          </div>
        </Card> */}
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
            onSearch={onSearch}
          />
        </Card>
      </div>
      <div id="sortable2" className="app-card demo-app-main">
        <FullCalendar
          ref={calendarRef}
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
          events={events}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          select={handleSelect}
          eventChange={eventChange} // 事件改变时触发
          // eventReceive={eventChange} // 创建新事件触发
          // weekends={weekendsVisible}
          // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          // select={handleDateSelect}
          // eventContent={renderEventContent} // custom render function
          // eventClick={handleEventClick}
          // eventsSet={handleEvents} // 事件改变时自动修改事件  不能与events={events} 同时使用
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
