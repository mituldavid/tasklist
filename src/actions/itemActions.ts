import { Task } from '../models/Task'

export const addTask = (task: Task) => {
  return {
    type: 'ADD_TASK',
    payload: task,
  }
}

export const editTask = (id: String, title: String) => {
  return {
    type: 'EDIT_TASK',
    payload: { id, title },
  }
}

export const toggleComplete = (id: String) => {
  return {
    type: 'TOGGLE_COMPLETE',
    payload: id,
  }
}

export const deleteTask = (id: String) => {
  return {
    type: 'DELETE_TASK',
    payload: id,
  }
}
