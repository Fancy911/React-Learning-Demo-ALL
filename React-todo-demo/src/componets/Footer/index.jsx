import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
    static propTypes = {
        // func表示函数类型，isRequired表示必传
        todos: PropTypes.array.isRequired,
        checkAllTodo: PropTypes.func.isRequired,
        clearAllDone: PropTypes.func.isRequired,
    }
    // 全选/全不选的回调
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked);
        // console.log(event.target.checked,"!23")
    }
    // 清除已完成的回调
    handleClearAllDone = () => {
        if (window.confirm('确定清除已完成任务吗？')) {
            this.props.clearAllDone();
        }
    }
    render() {
        const {todos} = this.props;

        // 已完成的个数
        const doneCount = todos.reduce((pre, todo) => {
            return pre + (todo.done ? 1 : 0);
        }, 0);

        // 总数
        const total = todos.length;
        return (
            <div className='todo-footer'>
                <label>
                    {/* checked和defaultChecked的区别
                            - defaultChecked只在第一次渲染时生效  
                            - checked在每次渲染时都生效，但是如果不设置onChange事件，那么checked就是只读的，你没办法去改变它的值，所以一般都会配合onChange事件一起使用 
                    */}
                    <input 
                        type="checkbox"
                        checked={doneCount === total && total !== 0 ? true : false}
                        onChange={this.handleCheckAll}
                    />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button 
                    className="btn btn-danger"
                    onClick={this.handleClearAllDone}
                >清除已完成任务</button>
            </div>
        )
    }
}
