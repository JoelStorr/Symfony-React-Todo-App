//React
import React, { useState } from "react";

//MUI Components
import {
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,


} from "@material-ui/core";

//MUI Icons
import { Menu as MenuIcon, List as ListIcon, Label as LabelIcon } from "@mui/icons-material";

export default function Navigation() {

    //State
    const [drawerOpen, setDrawerOpen] = useState(false)


    //functions
    function toggleDraw(){
        setDrawerOpen(!drawerOpen);
    }


    const drawerItems = [
        {text: 'Todo List', icon: <ListIcon />},
        {text: 'Tags', icon: <LabelIcon />}
    ]
 
  return (
    <AppBar position="fixed" style={{backgroundColor: 'lightgray'}}>
        <Toolbar>
           <IconButton edge="start">
            <MenuIcon />
           </IconButton>     
            <Box style={{flexGrow: 1}}/>
            <Link href="/" variant='h6' color="textPrimary" underline="none">TodoApp</Link>
            <Box style={{flexGrow: 1}}/>
            <Button size="large" > Login </Button>
        </Toolbar>
    </AppBar>
  );
}
