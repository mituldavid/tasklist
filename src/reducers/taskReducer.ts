import { AnyAction } from 'redux'
import { Task } from '../models/Task'

// Types
type Reducer<S = any> = (state: S | undefined, action: AnyAction) => S
interface State {
  tasklist: Task[]
}

const initialState: State = {
  tasklist: [],
}

export const taskReducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasklist: [...state.tasklist, action.payload],
      }

    case 'EDIT_TASK':
      return {
        ...state,
        tasklist: state.tasklist.map((task) =>
          task.id === action.payload.id
            ? { ...task, task: action.payload.task }
            : task
        ),
      }

    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        tasklist: state.tasklist.map((task) =>
          task.id === action.payload
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        ),
      }

    case 'DELETE_TASK':
      return {
        ...state,
        tasklist: state.tasklist.filter((task) => task.id !== action.payload),
      }

    default:
      return state
  }
}
