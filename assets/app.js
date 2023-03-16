import React from 'react';
import  ReactDOM  from 'react-dom/client';

import TodoContextProvider from './js/context/TodoContext';
import TodoTable from './js/components/TodoTable';
import { CssBaseline } from '@mui/material';

 function App(){

    return(
        <TodoContextProvider >
        <CssBaseline>
            <TodoTable />
        </CssBaseline>
        </TodoContextProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);