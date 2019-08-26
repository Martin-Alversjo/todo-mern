import React from 'react';
import axios from 'axios';
import Todo from '../components/Todo/Todo';
import classes from './Todos.module.css';
import Columns from 'react-bulma-components/lib/components/columns';
import Button from 'react-bulma-components/lib/components/button';
import Box from 'react-bulma-components/lib/components/box';

import {
    Field,
    Control,
    Input,
    Label,
  } from 'react-bulma-components/lib/components/form';

  const btnClasses = ["is-success", classes.todos__add].join(" ");

class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            inputValue: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    componentDidMount() {
        axios.get('/api/todos/test')
            .then(response => {
                const todos = [...response.data];
                this.setState({ todos });
            })            
            .catch(error => {
                console.log(error);
            })
    };

    handleChange(event) {
        this.setState({inputValue: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.inputValue);
        event.preventDefault();
      }

    render() {

        return(
            <>
            <Columns>
                <Columns.Column size="half" offset="one-quarter">
                    {/* Make this later it's own component */}
                    <form onSubmit={this.handleSubmit}>
                    <Field>
                        <Label>Add a task:</Label>
                        <Control>
                            <Input type="text" value={this.state.inputValue} onChange={this.handleChange} placeholder="Type here" />
                        </Control>
                        <Button className={btnClasses} type="submit">Add to list</Button>
                    </Field>
                    </form>
                </Columns.Column>
            </Columns>

            <Columns>
                <Columns.Column>
                    <Box>
                        <h2>Todos:</h2>
                        <ul className={classes.todos__list}>
                            {this.state.todos.map(({ id, ...todo }) => { return todo.isDone ? null : <Todo key={id} {...todo} /> }) }     
                        </ul>
                    </Box>
                </Columns.Column>

                <Columns.Column>
                    <Box>
                        <h2>Is done:</h2>
                        <ul className={classes.todos__list}>
                            {this.state.todos.map(({ id, ...todo }) => { return todo.isDone ? <Todo key={id} {...todo} /> : null } )} 
                        </ul>
                    </Box>
                </Columns.Column>
            </Columns>
        </>
        )
        
    }
}

export default Todos;