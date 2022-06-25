import React from 'react'
import { connect } from 'react-redux'
import { Task } from '../models/Task'

// Components
import TaskItem from './Taskitem'

// Types
interface Props {
  tasklist: Task[]
}

const TaskPane: React.FC<Props> = ({ tasklist }) => {
  return (
    <div>
      {tasklist?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  tasklist: state.task.tasklist,
})

export default connect(mapStateToProps)(TaskPane)
