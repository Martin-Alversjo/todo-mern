import React from 'react';
import classes from './Todo.module.css';


const Todo = (props) => {
    return <li className={classes.todo}>{props.todo}</li>;
}

export default Todo;