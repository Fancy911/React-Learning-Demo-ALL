import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = {
        mouse: false
    }
    // 鼠标移入移出的回调,true表示移入，false表示移出
    handleMouse = (flag) => {
        return () => {
            // console.log(flag);
            this.setState({ mouse: flag });
        }
    }
    // 检查是否选中的回调
    handleCheck = (id) => {
        return (event) => {
            // console.log(id, event.target.checked);
            this.props.updateTodo(id, event.target.checked);
        }
    }
    // 删除的回调
    handleDelete = (id) => {
        return () => {
            // console.log(id);
            if (window.confirm('确定删除吗？')) {
                this.props.deleteTodo(id);
            }
        }
    }
    render() {
        const {id, name, done} = this.props;
        const {mouse} = this.state;
        return (
            <li 
                onMouseLeave={this.handleMouse(false)} 
                onMouseEnter={this.handleMouse(true)}
                style={{backgroundColor: mouse ? '#ddd' : 'white'}}
            >
                <label>
                    <input 
                        type="checkbox" 
                        checked={done}
                        onChange={this.handleCheck(id)}
                    />
                    <span>{name}</span>
                </label>
                <button 
                    className="btn btn-danger" 
                    onClick={this.handleDelete(id)}
                    style={{display: mouse ? 'block' : 'none'}}
                >删除</button>
            </li>
        )
    }
}