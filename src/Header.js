import React from "react"
import "./App.css"

const Header = ({todo, handleSubmit, handleOnchange}) => {
    return (
        <>
        <div>
            <h1>Todo App</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} placeholder="Enter an activity" onChange={handleOnchange} autoFocus/>
            <button>Add</button>
        </form>
        </>
    )
}

export default Header