//React
import React, { useState } from "react";
import { Link } from "react-router-dom";

//MUI Components
import {
  AppBar,
  Toolbar,
  IconButton,

  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
Typography

} from "@material-ui/core";

//MUI Icons
import { Menu as MenuIcon, List as ListIcon, Label as LabelIcon } from "@mui/icons-material";



const LinkStyle={
    textDecoration:'none',
    color: 'darkgray'
}




export default function Navigation() {

    //State
    const [drawerOpen, setDrawerOpen] = useState(false)


    //functions
    function toggleDrawer(){
        setDrawerOpen(!drawerOpen);
    }


    const drawerItems = [
        {text: 'Todo List', icon: <ListIcon />, link: 'todo-list'},
        {text: 'Tags', icon: <LabelIcon />, link: 'tag-list'}
    ]
 
  return (
    <AppBar position="fixed" style={{ backgroundColor: "lightgray" }}>
      <Toolbar>
        <IconButton edge="start" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Box style={{ flexGrow: 1 }} />
        <Link to="/" style={LinkStyle}>
          <Typography variant="h6" color="textPrimary" underline="none">
            TodoApp
          </Typography>
        </Link>
        <Box style={{ flexGrow: 1 }} />
        <Button size="large"> Login </Button>
      </Toolbar>
      <Drawer variant="temporary" onClose={toggleDrawer} open={drawerOpen}>
        <List style={{ width: "200px" }}>
          {drawerItems.map((prop) => (
            <Link to={prop.link} key={prop.text} style={LinkStyle}>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>{prop.icon}</ListItemIcon>
                <ListItemText>{prop.text}</ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
