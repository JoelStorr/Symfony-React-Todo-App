import React from 'react';
import  ReactDOM  from 'react-dom/client';

import TodoContextProvider from './js/context/TodoContext';
import TodoTable from './js/components/TodoTable';
import { CssBaseline } from '@mui/material';
import AppSnackBar from './js/components/AppSnackBar';
import DefaultThemeProvider from './js/components/themes/DefaultThemeProvider';

function App(){

    return(
    
            <TodoContextProvider >
               
                    <TodoTable />
                    <AppSnackBar />
                
            </TodoContextProvider>
       
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<DefaultThemeProvider>
    <App/>
</DefaultThemeProvider>

);