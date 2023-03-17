import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 引入PropTypes库,用于对接收的props进行类型和必要性的限制
import { v4 as uuidv4 } from 'uuid'; // 引入UUID库
import './index.css'
export default class Header extends Component {
    // 对接收的props进行：类型和必要性的限制
    static propTypes = {
        // func表示函数类型，isRequired表示必传
        addTodo: PropTypes.func.isRequired
    }
    handleKeyUp = (event) => {
        // console.log(event.target.value, event.keyCode);
        const {keyCode, target} = event;
        // 如果按下的不是回车键，直接返回（回车键的编码是13）
        if (keyCode !== 13) return;
        // 如果输入的内容为空，直接返回
        if (target.value.trim() === '') {
            alert('输入的内容不能为空！');
            return;
        }
        // 调用父组件传递过来的addTodo方法，将输入的数据传递给父组件
        this.props.addTodo(
            {   
                // UUID库，可以生成唯一的标识符
                id: uuidv4(),
                name: target.value,
                done: false
            }
        ); 
        // 清空输入框
        target.value = '';
    }
    render() {
        return (
            <div className='todo-header'>
                <input
                    onKeyUp={this.handleKeyUp}  
                    type="text"
                    placeholder="请输入你的任务名称，按回车键确认"
                />
            </div>
        )
    }
}
