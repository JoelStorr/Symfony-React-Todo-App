
import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';


export const TodoContext = createContext();



export default function TodoContextProvider({children}){

    const [todos, setTodo] = useState([]);
    const [message, setMessage] = useState({})


    useEffect(()=>{
        readTodos();
    },[])

    //Create
    function createTodo(e, todo){
        e.preventDefault();
       axios.post('/api/todo/create', todo)
        .then(response => {
            console.log(response.data)
            if(response.data.message.level === 'success'){
                setTodo([...todos, response.data.todo]);
                setMessage(response.data.message);
            }else{
                setMessage(response.data.message);
            }
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

            if(res.data.message.level === 'error'){
                setMessage(res.data.message)
            }else{

                let tempTodos = [...todos];
                let todo = todos.find( todo => {
                    return todo.id === data.id;
                });

                todo.name = res.data.todo.name;
                todo.description = res.data.todo.description;
               
        
                setTodo(tempTodos);
                setMessage(res.data.message);
            }
            
        }).catch(error => {
            console.error(error);
        })
    }


    //Delete
   function deleteTodo(data){
        
        axios.delete('/api/todo/delete/' + data.id,  )
            .then((res)=>{

                if(res.data.message.level === 'error'){
                    setMessage(res.data.message)
                }else{

                       let tempTodos = [...todos];
                       let todo = tempTodos.find((todo) => {
                         return todo.id === data.id;
                       });
                       tempTodos.splice(tempTodos.indexOf(todo), 1);

                       setTodo(tempTodos);
                       setMessage(res.data.message);
                }

            }).catch((e)=>{
                console.error(e);
            })
    }
    


    return(
        <TodoContext.Provider value={{
            todos,
            message, 
            createTodo,
            readTodos,
            updateTodo,
            deleteTodo,
            setMessage
        }} >
            { children }
        </TodoContext.Provider>
    );
}