import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Container from '@mui/material/Container'
import './App.css'

// Components
import InputField from './components/InputField'
import TaskPane from './components/TaskPane'

// Redux
import store from './store'
import { Provider } from 'react-redux'
import { addTask } from './actions/itemActions'

const App: React.FC = () => {
  const [taskInput, setTaskInput] = useState<string>('')

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (taskInput) {
      store.dispatch(
        addTask({
          id: uuidv4(),
          title: taskInput,
          isCompleted: false,
        })
      )
      setTaskInput('')
    } else {
      // @todo: Add error message
    }
  }

  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <h1 style={{ fontSize: '2.2rem', padding: '1.5rem 0rem' }}>
          tasklist.
        </h1>
        <InputField
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          handleAddTask={handleAddTask}
        />
        <TaskPane />
      </Container>
    </Provider>
  )
}

export default App
