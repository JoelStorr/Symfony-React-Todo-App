import { Button, Snackbar, SnackbarContent } from "@material-ui/core";
import React, { useContext, Fragment } from "react";
import { TodoContext } from "../context/TodoContext";


function checkLevel(level){
    switch(level){
        case 'success':
            return 'green';
        case 'error':
            return 'red'
        default:
            return 'white';
    }
}



export default function AppSnackBar() {
  const context = useContext(TodoContext);

   


  return (
    <Snackbar autoHideDuration={6000} open={context.message.text !== undefined}>
      {context.message.text && (
        <SnackbarContent style={{backgroundColor: checkLevel(context.message.level)}}
          message={context.message.text.map((text, index) => (
            <Fragment key={index + " " + text}>
              <span>{text}</span>
              <br />
            </Fragment>
          ))}
          action={[
            <Button onClick={() => context.setMessage({})} key="dismiss" color='inherit'>
              Dismiss
            </Button>,
          ]}
        />
      )}
    </Snackbar>
  );
}
