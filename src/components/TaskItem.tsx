import React, { useState } from 'react'
import { Task } from '../models/Task'

// MUI
import { Paper, Checkbox, IconButton, TextField, Grid } from '@mui/material'
import {
  Edit,
  Done,
  Delete,
  CheckCircle,
  CircleOutlined,
} from '@mui/icons-material'

// Redux
import { connect } from 'react-redux'
import { editTask, deleteTask, toggleComplete } from '../actions/itemActions'

// Types
interface Props {
  task: Task
  editTask: Function
  deleteTask: Function
  toggleComplete: Function
}

const TaskItem: React.FC<Props> = ({
  task,
  editTask,
  deleteTask,
  toggleComplete,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [editInput, setEditInput] = useState<string>(task.title)

  const handleEditTask = (e: React.FormEvent, id: string) => {
    e.preventDefault()
    if (editInput) editTask(id, editInput)
    setEditMode(false)
  }

  const handleDeleteTask = (id: string) => {
    deleteTask(id)
  }

  const handleToggleComplete = (e: React.FormEvent, id: string) => {
    e.stopPropagation()
    toggleComplete(id)
  }

  return (
    <Paper
      variant="outlined"
      style={{
        backgroundColor: task.isCompleted ? '#e2f7de' : 'white',
        marginBottom: '1rem',
        transition: '0.5s',
      }}
    >
      <Grid
        container
        alignItems="center"
        style={{ padding: '0 0.7rem 0 0.7rem' }}
      >
        <Grid item xs={9} sm={11}>
          {editMode ? (
            <form
              onSubmit={(e) => handleEditTask(e, task.id)}
              style={{ margin: '1.5rem 1rem' }}
            >
              <TextField
                autoFocus
                variant="standard"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
                InputProps={{
                  style: {
                    fontSize: 20,
                    fontFamily: 'Montserrat, monospace',
                    fontWeight: '600',
                  },
                  endAdornment: (
                    <IconButton type="submit" aria-label="edit">
                      <Done />
                    </IconButton>
                  ),
                }}
              />
            </form>
          ) : (
            <h2
              onClick={(e) => handleToggleComplete(e, task.id)}
              style={{ fontSize: 22, fontWeight: 600 }}
            >
              <Checkbox
                color="success"
                icon={<CircleOutlined />}
                checkedIcon={<CheckCircle />}
                checked={task.isCompleted}
                onClick={(e) => handleToggleComplete(e, task.id)}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }}
              />
              {task.title}
            </h2>
          )}
        </Grid>
        <Grid item xs={3} sm={1} textAlign="center">
          <IconButton
            size="small"
            aria-label="edit"
            onClick={() => {
              if (!editMode) {
                setEditMode(!editMode)
              }
            }}
          >
            <Edit />
          </IconButton>

          <IconButton
            size="small"
            aria-label="delete"
            color={task.isCompleted ? 'default' : 'error'}
            style={{ transition: '0.5s' }}
            onClick={() => handleDeleteTask(task.id)}
          >
            <Delete />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default connect(null, { editTask, deleteTask, toggleComplete })(TaskItem)
