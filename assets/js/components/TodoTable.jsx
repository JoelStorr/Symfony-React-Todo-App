import React, { useContext } from "react"
import { TodoContext } from "../context/TodoContext"


 export default function TodoTable (){

    const context = useContext(TodoContext);

    return (
        <div>{context.todos.map(todo=>(
            <div>{todo.task}</div>
        ))}</div>
    )
}