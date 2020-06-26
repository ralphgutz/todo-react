import React from "react"
import "./TodoItem.map.css"

const TodoItem = ({index, text, editFunc, deleteFunc}) => {
    return (
        <div key={index} className="item">
            <p>{text}</p>
            <div>
                <button onClick={() => editFunc(index)} title="Edit"><i class="fa fa-pencil-square-o" aria-hidden="true" ></i></button>
                <button onClick={() => deleteFunc(index)} title="Delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
            </div>
            
        </div>
    )
}

export default TodoItem