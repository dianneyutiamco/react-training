import React from 'react';
// import logo from './logo.svg';
import './App.css';

import todos from './todoData';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
// import { isMetaProperty } from '@babel/types';

class App extends React.Component {
  constructor() {
    super(); // super(props)
    this.state = {
      todos,
      character: {},
      isLoading: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState(prevState => {
      let updatedTodos = prevState.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });

      return {
        todos: updatedTodos
      };
    });
  }

  componentDidMount() {
    // fetching data from an API
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => this.setState({character: data, isLoading: false}));
  }

  render() {
    const todoComponents = todos.map(
      item => 
        <TodoItem 
          key={item.id} 
          item={item} 
          handleClick={this.handleClick}/>
    );


    return (
      <div className="App">
        {this.state.isLoading && <h1>Loading...</h1>}

        {!this.state.isLoading && <p>{this.state.character.name}</p>}
        {!this.state.isLoading && <TodoForm />}
        {!this.state.isLoading && todoComponents}
        
      </div>
    );
  }


}

export default App;
