import React, {useState, useEffect, useRef, useLayoutEffect} from "react"
import Header from "./Header"
import TodoItem from "./TodoItem"
import "./App.css"

const App = () => {
    const firstRender = useRef(true)  // flag for first render
    const localData = localStorage.getItem("todos")  // getting items in local storage
    const [todo, setTodo] = useState("")
    const [todoItems, setTodoItems] = useState(
        (firstRender) ? JSON.parse(localData) : []
    )

    useLayoutEffect(() => {
        if(firstRender.current)
            firstRender.current = false
    })

    // used to set items in local storage
    useEffect(() => {
        localStorage.setItem("todos", [JSON.stringify(todoItems)])
    }, [todoItems])

    // function to set/update the list items
    const setList = () => setTodoItems([...todoItems])

    const handleOnchange = (e) => setTodo(e.target.value)

    // function to add entries from value of input to the array
    const handleSubmit = (e) => {
        e.preventDefault()

        if(todo){
            todoItems.push(todo)
            setList()
        }

        setTodo("") 
    }

    const handleDelete = (index) => {
        todoItems.splice(index, 1)
        setList()
    }

    const handleEdit = (index) => {
        const edit = prompt("Enter change:", todoItems[index])

        if(edit !== null && edit.length > 0)
            setTodoItems([todoItems.splice(index, 1, edit)])

        setList()
    }

    const deleteAll = () => {
        if(window.confirm("Clear all entries?"))
            setTodoItems([])
    }

    return (
        <>
        <Header todo={todo} handleSubmit={handleSubmit} handleOnchange={handleOnchange} />
        <br />
        <div className="todo-container">
            <p>What to do:</p>
            {
                (todoItems) ? todoItems.map((item, index) => {
                    return <TodoItem key={index} text={item} editFunc={() => handleEdit(index)} deleteFunc={() => handleDelete(index)} />
                }) : null
            }
            <div className="clear">
            {
                (todoItems.length > 0) ? <button onClick={deleteAll} title="Clear all entries">Clear</button> : null
            }
            </div>
        </div>
        </>
    )
}

export default App