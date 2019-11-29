import React, {Component} from 'react'
//import TodoListUi from './TodoListUi'
import TodoListUiFn from './TodoListUiFn'

/*引入store*/
import store from './store'
import {changeInputAction, addInputAction, deleteInputAction} from './store/actionCreators'

class TodoListRedux extends Component {
    constructor(props) {
        super(props);
        /*组件状态*/
        this.state = store.getState();
        /*组件事件*/
        this.changeInputValue = this.changeInputValue.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        /*组件绑定传入*/
        this.deleteItem = this.deleteItem.bind(this);
        /*定义修改store方法*/
        this.storeChange = this.storeChange.bind(this);
        /*订阅：redux状态*/
        store.subscribe(this.storeChange);
    }
    render() {
        return (
            <TodoListUiFn
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
        );
    }
    /**/
    changeInputValue(e) {
        const action = changeInputAction(e.target.value);
        /*发布：store把接收到的action自动转发到reducer*/
        store.dispatch(action)
    }
    clickBtn() {
        const action = addInputAction();
        store.dispatch(action)
    }
    deleteItem(index) {
        /*const action = {
            type: DELETE_ITEM,
            index: index
        }*/
        const action = deleteInputAction(index);
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
}

export default TodoListRedux;