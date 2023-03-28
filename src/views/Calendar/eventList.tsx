import CollCard from '@/components/CollCard'
import { TaskList } from '@/Type'

const EventList = (props) => {
  const { taskList } = props
  return (
    <CollCard title="任务清单" style={{ width: 300 }}>
      <div id="sortable">
        {taskList.map((item: TaskList) => {
          return (
            <p key={item.color} className="task" style={{ backgroundColor: item.color }}>
              {item.value}
            </p>
          )
        })}
      </div>
    </CollCard>
  )
}

export default EventList
