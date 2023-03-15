
import React, {createContext, useState} from 'react';


export const TodoContext = createContext();



export default function TodoContextProvider({children}){

    const [todos, setTodo] = useState([
        {name: 'do something'},
        {name: 'do something'},
        {name: 'do something'},
        {name: 'do something'},
        {name: 'do something'},
        {name: 'do something'},
        {name: 'do something'},
        {name: 'do something'},
        {name: 'do something'},
    ]);

    //Create
    function createTodo(e, todo){
        e.preventDefault();
        console.log('CreatTod Ran')
        setTodo([...todos, todo]);
    };


    //Read
    const readTodo = ()=>{};


    //Update
    const upadteTodo = ()=>{}


    //Delete
    const deleteTdo = ()=>{}
    


    return(
        <TodoContext.Provider value={{
            todos, 
            createTodo,
            readTodo,
            upadteTodo,
            deleteTdo
        }} >
            { children }
        </TodoContext.Provider>
    );
}