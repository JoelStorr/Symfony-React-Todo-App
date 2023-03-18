
//React
import React from 'react';

//Router
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes, Redirect, Navigate } from 'react-router-dom';


// MUI
import { CssBaseline } from '@mui/material';

// Routes
import NotFound from './NotFound';
import TodoContextProvider from '../context/TodoContext';
import AppSnackBar from './AppSnackBar';
import Navigation from './Navigation';
import TodoTable from './TodoTable';
import TagList from './TagList';



function TodoList(){
  return(
    <TodoContextProvider>
      <CssBaseline>
        <TodoTable />
        <AppSnackBar />
      </CssBaseline>
    </TodoContextProvider>
  )
}






export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <div style={{height: '65px'}}></div>
        <Routes>
          <Route path="/" element={<Navigate replace to="/todo-list" />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/tag-list" element={<TagList />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
  