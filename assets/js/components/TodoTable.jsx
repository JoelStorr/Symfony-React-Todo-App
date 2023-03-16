import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  IconButton,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import React, { Fragment, useContext, useState } from "react";

//NOTE: My Imports
import { TodoContext } from "../context/TodoContext";
import DeleteDialog from "./DeleteDialog";


export default function TodoTable() {
  const context = useContext(TodoContext);
  const [addTodo, setAddTodo] = useState('');

  const [eidtIsShown, setEditIsShown] = useState(false)
  const [editTodo, setEditTodo] = useState('');
  const [deleteConfirmationIsShown, setDeleteConfirmationIsShown] = useState(false)

  return (
    <Fragment>

    <form
      onSubmit={(e) => {
        context.createTodo(e, { name: addTodo });
      }}
    >
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
              <TextField
                fullWidth={true}
                label="New Task"
                value={addTodo}
                onChange={(e) => {
                  setAddTodo(e.target.value);
                }}
              />
            </TableCell>
            <TableCell align="right">
              <IconButton type="submit">
                <AddIcon />
              </IconButton>
            </TableCell>
          </TableRow>
          {context.todos
            .slice()
            .reverse()
            .map((todo, index) => (
              <TableRow key={"todo" + index}>
                <TableCell>
                  {eidtIsShown === todo.id ? (
                    <TextField
                      fullWidth={true}
                      value={editTodo}
                      onChange={(e) => setEditTodo(e.target.value)}
                      InputProps={{
                        endAdornment: (
                            <>
                                <IconButton onClick={
                                    ()=> setEditIsShown(false)}
                                >
                                    <CloseIcon />
                                </IconButton>
                                <IconButton onClick={()=>{
                                        context.updateTodo({id: todo.id, name: editTodo});
                                        setEditIsShown(false);
                                    }

                                    }
                                >
                                    <DoneIcon />
                                </IconButton>
                            </>
                        ),
                      }}
                    />
                  ) : (
                    todo.name
                  )}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => {
                      setEditIsShown(todo.id);
                      setEditTodo(todo.name);
                    }}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton onClick={()=>{setDeleteConfirmationIsShown(true)}}>
                    <DeleteForeverIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </form>
        
      <DeleteDialog open={deleteConfirmationIsShown, setDeleteConfirmationIsShown} />



    </Fragment>
  );
}
