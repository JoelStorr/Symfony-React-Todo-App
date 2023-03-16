
import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';


export const TodoContext = createContext();



export default function TodoContextProvider({children}){

    const [todos, setTodo] = useState([]);


    useEffect(()=>{
        readTodos();
    },[])

    //Create
    function createTodo(e, todo){
        e.preventDefault();
        console.log('CreatTod Ran')
        setTodo([...todos, todo]);
    };


    //Read
    function readTodos(){
        axios.get('/api/todo/read')
            .then(response =>{
                setTodo(response.data)

                console.log(response.data);
            }).catch(e=>{console.error(e)})
    }


   


    //Update
    function updateTodo(data){
       let tempTodos = [...todos];
       let todo = tempTodos.find(todo => todo.id === data.id);
       todo.name = data.name;

       setTodo([...tempTodos]);
    }


    //Delete
   function deleteTodo(data){
        
        let tempTodos = [...todos];
        let todo = tempTodos.find((todo)=>{return todo.id === data.id})
        tempTodos.splice(tempTodos.indexOf(todo), 1);

        setTodo(tempTodos);

    }
    


    return(
        <TodoContext.Provider value={{
            todos, 
            createTodo,
            readTodos,
            updateTodo,
            deleteTodo
        }} >
            { children }
        </TodoContext.Provider>
    );
}