import React from 'react';
import  ReactDOM  from 'react-dom/client';

import TodoContextProvider from './js/context/TodoContext';
import TodoTable from './js/components/TodoTable';

 function App(){

    return(
        <TodoContextProvider >
            <TodoTable />
        </TodoContextProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);