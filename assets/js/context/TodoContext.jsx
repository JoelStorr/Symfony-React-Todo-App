
import React, {createContext, useState} from 'react';


export const TodoContext = createContext();



export default function TodoContextProvider({children}){

    const [todos, setTodo] = useState([
        {id: 1, name: 'do something'},
        {id: 2, name: 'do something'},
        {id: 3, name: 'do something'},
        {id: 4, name: 'do something'},
        {id: 5, name: 'do something'},
        
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
    function updateTodo(data){
       let tempTodos = [...todos];
       let todo = tempTodos.find(todo => todo.id === data.id);
       todo.name = data.name;

       setTodo([...tempTodos]);
    }


    //Delete
    const deleteTdo = ()=>{}
    


    return(
        <TodoContext.Provider value={{
            todos, 
            createTodo,
            readTodo,
            updateTodo,
            deleteTdo
        }} >
            { children }
        </TodoContext.Provider>
    );
}