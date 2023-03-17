import React from 'react';
import  ReactDOM  from 'react-dom/client';

import TodoContextProvider from './js/context/TodoContext';
import TodoTable from './js/components/TodoTable';
import { CssBaseline } from '@mui/material';
import AppSnackBar from './js/components/AppSnackBar';

function App(){

    return(
        <TodoContextProvider >
        <CssBaseline>
            <TodoTable />
            <AppSnackBar />
        </CssBaseline>
        </TodoContextProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);