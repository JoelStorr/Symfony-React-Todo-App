import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  IconButton,
  TextField,
  InputAdornment,
  Typography
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
  const [addTodotask, setAddTodotask] = useState('');
  const [addTodoDescription, setAddTodoDescription] = useState('');

  const [eidtIsShown, setEditIsShown] = useState(false);

  const [editTodotask, setEditTodotask] = useState('');
  const [editTodoDescription, setEditTodoDescription] = useState("");
 




  const [deleteConfirmationIsShown, setDeleteConfirmationIsShown] = useState(false);
  const [todoToBeDeleted ,setTodoToBeDeleted] = useState(null);

  function onCreateSubmit(event){
    event.preventDefault();
    context.createTodo(event, { task: addTodotask, description: addTodoDescription })
    setAddTodotask('');
    setAddTodoDescription('');
  }

  function onEditSubmit(todoId, event){
     event.preventDefault();
       context.updateTodo({
         id: todoId,
         task: editTodotask,
         description: editTodoDescription,
       });
       setEditIsShown(false);
  }

 


  return (
    <Fragment>
      <Table>
        {/* Head */}
        <TableHead>
          <TableRow >
            <TableCell>Task</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>

        {/* Body */}
        <TableBody>
          {/* Add */}
          {/* task */}
          <TableRow>
            <TableCell>
              <form onSubmit={onCreateSubmit}>
                <TextField
                  fullWidth={true}
                  label="New Task"
                  value={addTodotask}
                  onChange={(e) => {
                    setAddTodotask(e.target.value);
                  }}
                />
              </form>
            </TableCell>

            {/* Description */}
            <TableCell>
              <form>
                <TextField
                  type="text"
                  value={addTodoDescription}
                  onChange={(e) => setAddTodoDescription(e.target.value)}
                  label="Description"
                  fullWidth={true}
                  multiline={true}
                />
              </form>
            </TableCell>

            <TableCell align="right">
              <IconButton type="submit" onClick={onCreateSubmit}>
                <AddIcon />
              </IconButton>
            </TableCell>
          </TableRow>

          {/* Data */}
          {context.todos
            .slice()
            .reverse()
            .map((todo, index) => (
              <TableRow key={"todo" + index}>
                {/* task */}
                <TableCell>
                  {eidtIsShown === todo.id ? (
                    <form onSubmit={onEditSubmit.bind(this, todo.id)}>
                      <TextField
                        type="text"
                        fullWidth={true}
                        autoFocus={true}
                        value={editTodotask}
                        onChange={(e) => setEditTodotask(e.target.value)}
                      />
                    </form>
                  ) : (
                    <Typography>{todo.task}</Typography>
                  )}
                </TableCell>

                {/* Description */}
                <TableCell>
                  {eidtIsShown === todo.id ? (
                    <TextField
                      type="text"
                      fullWidth={true}
                      value={editTodoDescription}
                      onChange={(e) => setEditTodoDescription(e.target.value)}
                      multiline={true}
                    />
                  ) : (
                    <Typography style={{ whiteSpace: "pre-wrap" }}>
                      {todo.description}
                    </Typography>
                  )}
                </TableCell>

                {/* Edit Buttons */}
                <TableCell align="right">
                  {eidtIsShown ? (
                    <Fragment>
                      <IconButton onClick={onEditSubmit.bind(this, todo.id)}>
                        <DoneIcon />
                      </IconButton>
                      <IconButton onClick={() => setEditIsShown(false)}>
                        <CloseIcon />
                      </IconButton>
                    </Fragment>
                  ) : (
                    <Fragment>
                     <IconButton
                    onClick={() => {
                      setEditIsShown(todo.id);
                      setEditTodotask(todo.task);
                      setEditTodoDescription(todo.description);
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

                    </Fragment>
                  )}
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
