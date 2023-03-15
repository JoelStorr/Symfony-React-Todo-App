import { Table, TableCell, TableHead, TableRow, TableBody, IconButton } from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useContext } from "react"
import { TodoContext } from "../context/TodoContext"


 export default function TodoTable (){

    const context = useContext(TodoContext);

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {context.todos.map((todo) => (
            <TableRow>
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
    );
}