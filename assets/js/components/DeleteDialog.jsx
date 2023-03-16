import { DialogContent, Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

 function DeleteDialog({ open, setDeletConfirmationIsShown }) {

    const context = useContext(TodoContext);

    const hide = ()=>{setDeletConfirmationIsShown(false);}

   return (
     <Dialog onClose={hide} fullWidth={true} maxWidth="sm" open={open}>
       <DialogTitle>
         Are you shure that you want to delete this to-do?
       </DialogTitle>
       <DialogContent>//task</DialogContent>
       <DialogActions>
         <Button onClick={hide}>Cancle</Button>
         <Button onClick={()=>{context.deleteTodo({id: 0, name:''})}}>Delete</Button>
       </DialogActions>
     </Dialog>
   );
 }

DeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setDeletConfirmationIsShown: PropTypes.func.isRequired,
}

export default DeleteDialog;