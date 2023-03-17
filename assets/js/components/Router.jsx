import TodoContextProvider from '../context/TodoContext.jsx';
import TodoTable from './TodoTable';
import { CssBaseline } from '@mui/material';
import AppSnackBar from './AppSnackBar';

import Navigation from './Navigation.jsx';

import React from 'react'

export default function Router() {
  return (
      <>

        <Navigation />
            <TodoContextProvider >
               <CssBaseline>
                    <TodoTable />
                    <AppSnackBar />
               </CssBaseline>      
            </TodoContextProvider>
      </>
       
    )
}
  