
import React, {createContext, useState} from 'react';


export const TodoContext = createContext();



export default function TodoContextProvider({children}){

    const [todos, setTodo] = useState([{task: 'do something'}]);

    //Create
    const createTodo = (val)=>setTodo([...todos, val]);


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