import React from 'react';
import { deleteTodo } from '../actions/todos';
import { ListItem, ListItemText, IconButton, ListItemAvatar, ListItemButton, Avatar } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({ id, title }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={title ? 'TODO description' : null}
        />
        <IconButton edge="end" aria-label="delete" sx={{ mr: 1 }} onClick={() => deleteTodo(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemButton>
    </ListItem>
  )
}

export default Todo;