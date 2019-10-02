import React from "react";

const TodoItem = (props) => {
    const completedStyle = {
        color: "#0033cc"
    };
    return(
        <div>
            <input 
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleClick(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
            
        </div>
    );
}

export default TodoItem;