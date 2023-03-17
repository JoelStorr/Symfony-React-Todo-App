
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
       axios.post('/api/todo/create', todo)
        .then(response => {
            console.log(response.data)
            setTodo([...todos, response.data.todo]);
        }).catch(e=>console.error(e))
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
      axios.put('/api/todo/update/' + data.id, data)
        .then(res => {
            let tempTodos = [...todos];
            let todo = todos.find( todo => {
                return todo.id === data.id;
            });
            
            todo.name = data.name;

            setTodo(tempTodos);
        }).catch(error => {
            console.error(error);
        })
    }


    //Delete
   function deleteTodo(data){
        
        axios.delete('/api/todo/delete/' + data.id,  )
            .then((res)=>{
                       let tempTodos = [...todos];
                       let todo = tempTodos.find((todo) => {
                         return todo.id === data.id;
                       });
                       tempTodos.splice(tempTodos.indexOf(todo), 1);

                       setTodo(tempTodos);

            }).catch((e)=>{
                console.error(e);
            })
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