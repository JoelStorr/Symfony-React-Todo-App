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

  const [eidtIsShown, setEditIsShown] = useState(false);
  const [editTodo, setEditTodo] = useState('');
  const [deleteConfirmationIsShown, setDeleteConfirmationIsShown] = useState(false);
  const [todoToBeDeleted ,setTodoToBeDeleted] = useState(null);

  function onCreateSubmit(event){
    event.preventDefault();
    context.createTodo(event, { name: addTodo })
    setAddTodo('');
  }

  function onEditSubmit(todoId, event){
     event.preventDefault();
       context.updateTodo({
         id: todoId,
         name: editTodo,
       });
       setEditIsShown(false);
  }



  return (
    <Fragment>
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
              <form onSubmit={onCreateSubmit}>
                <TextField
                  fullWidth={true}
                  label="New Task"
                  value={addTodo}
                  onChange={(e) => {
                    setAddTodo(e.target.value);
                  }}
                />
              </form>
              </TableCell>
              <TableCell align="right">
                <IconButton type="submit" onClick={onCreateSubmit}>
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
                      <form onSubmit={onEditSubmit.bind(this, todo.id)}>

                      <TextField
                        type="text"
                        fullWidth={true}
                        autoFocus={true}
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                        InputProps={{
                          endAdornment: (
                            <>
                              <IconButton onClick={() => setEditIsShown(false)}>
                                <CloseIcon />
                              </IconButton>
                              <IconButton type="submit">
                                <DoneIcon />
                              </IconButton>
                            </>
                          ),
                        }}
                      />
                      </form>
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

                    <IconButton
                      onClick={() => {
                        setDeleteConfirmationIsShown(true);
                        setTodoToBeDeleted(todo);
                      }}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>



      {deleteConfirmationIsShown && (
        <DeleteDialog
          todo={todoToBeDeleted}
          open={deleteConfirmationIsShown}
          setDeletConfirmationIsShown={setDeleteConfirmationIsShown}
        />
      )}


    </Fragment>
  );
}
