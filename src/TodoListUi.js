import React, {Component} from 'react'
import 'antd/dist/antd.css'
import './common.css'
import {Input, Button, List} from 'antd'

class TodoListUi extends Component {
    render() {
        return (
            <div className="input_panel">
                <div className="input_item">
                    <Input placeholder='输入框' value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                    <Button type="primary" onClick={this.props.clickBtn}>添加</Button>
                </div>
                <div className="list_item">
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={() => {this.props.deleteItem(index)}}>{item}</List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}

export default TodoListUi;