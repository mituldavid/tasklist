import React from 'react'

// MUI
import { TextField, IconButton } from '@mui/material'
import { Add } from '@mui/icons-material'

// Types
interface Props {
  taskInput: string
  setTaskInput: React.Dispatch<React.SetStateAction<string>>
  handleAddTask: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({
  taskInput,
  setTaskInput,
  handleAddTask,
}) => {
  return (
    <form
      onSubmit={(e) => {
        handleAddTask(e)
      }}
      style={{ marginBottom: '1.5rem' }}
    >
      <TextField
        fullWidth
        label="Task"
        placeholder="Add new task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          style: { fontSize: 20, fontFamily: 'monospace', fontWeight: 'bold' },
          endAdornment: (
            <IconButton type="submit" aria-label="add">
              <Add />
            </IconButton>
          ),
        }}
      />
    </form>
  )
}

export default InputField
