import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item'
import './index.css'

export default class List extends Component {
    static propTypes = {
        // func表示函数类型，isRequired表示必传
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    }
    render() {
        // 接收App传递过来的todos
        const {todos, updateTodo, deleteTodo} = this.props;
        return (
            <ul className='todo-main'>
                {
                    todos.map((todo) => {
                        return (
                            <Item 
                                key={todo.id} 
                                {...todo} 
                                updateTodo={updateTodo} 
                                deleteTodo={deleteTodo}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}
