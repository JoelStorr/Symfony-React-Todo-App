import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  IconButton,
  TextField,
} from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoTable() {
  const context = useContext(TodoContext);
  const [addTodo, setAddTodo] = useState('');

  return (
    <form onSubmit={(e)=>{context.createTodo(e, {name: addTodo})}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <TextField fullWidth={true} label="New Task" value={addTodo} onChange={(e)=>{setAddTodo(e.target.value)}}/>
            </TableCell>
            <TableCell align="right">
              <IconButton type="submit">
                <AddIcon />
              </IconButton>
            </TableCell>
          </TableRow>
          {context.todos.slice().reverse().map((todo, index) => (
            <TableRow key={'todo' + index}>
              <TableCell>{todo.name}</TableCell>
              <TableCell align="right">
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DeleteForeverIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </form>
  );
}
