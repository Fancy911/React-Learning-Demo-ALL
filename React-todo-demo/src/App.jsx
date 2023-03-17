import React, {Component} from 'react';

import Header from './componets/Header';
import Footer from './componets/Footer';
import List from './componets/List';

import './App.css';

export default class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里
    // 初始化Todo列表数据
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打豆豆', done: false},
            {id: '004', name: '逛街', done: true},
        ]
    }

    // 添加Todo的回调
    addTodo = (todoObj) => {
        const {todos} = this.state;
        const newTodos = [todoObj, ...todos];
        this.setState({todos: newTodos});
    }

    // 更新Todo的回调
    updateTodo = (id, done) => {
        const {todos} = this.state;
        // 匹配处理数据
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id)
                return {...todoObj, done};
            else
                return todoObj;
        });
        this.setState({todos: newTodos});
    }

    // 删除Todo的回调
    deleteTodo = (id) => {
        const {todos} = this.state;
        // 匹配处理数据
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id;
        });
        this.setState({todos: newTodos});
    }

    // 全选/全不选Todo的回调
    checkAllTodo = (done) => {
        const {todos} = this.state; 
        const newTodos = todos.map((todoObj) => {
            return {...todoObj, done};
        });
        this.setState({todos: newTodos});
    }

    // 清除所有已完成的回调
    clearAllDone = () => {
        const {todos} = this.state;
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done;
        });
        this.setState({todos: newTodos});
    }
    render() {
        const {todos} = this.state;
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header addTodo={this.addTodo} />
                    <List 
                        todos={todos} 
                        updateTodo={this.updateTodo}
                        deleteTodo={this.deleteTodo}
                    />
                    <Footer 
                        todos={todos}
                        checkAllTodo={this.checkAllTodo}
                        clearAllDone={this.clearAllDone}
                    />
                </div>
            </div>
        );
    }
}
