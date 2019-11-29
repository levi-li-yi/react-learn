import React from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'

/*UI组件可以改成无状态组件*/
const TodoListUiFn = (props) => {
    return (
        <div className="input_panel">
            <div className="input_item">
                <Input placeholder='输入框' value={props.inputValue} onChange={props.changeInputValue}/>
                <Button type="primary" onClick={props.clickBtn}>添加</Button>
            </div>
            <div className="list_item">
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => {props.deleteItem(index)}}>{item}</List.Item>
                    )}
                />
            </div>
        </div>
    )
};

export default TodoListUiFn;