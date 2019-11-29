import React from 'react'
// import store from './store'
/*引入连接器: 把无状态组件和业务逻辑分开*/
import {connect} from 'react-redux'

const TodoListReactRedux = (props) => {
    let {inputValue, inputChange, addItem, list} = props;
    return (
        <div>
            <input type="text" value={inputValue} onChange={inputChange}/>
            <button onClick={addItem}>添加</button>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

/*将state转化成props*/
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};

/*发布props*/
const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            const action = {
                type: 'changeInput',
                value: e.target.value
            };
            /*等同于不使用react-redux时的store.dispatch*/
            dispatch(action)
        },
        addItem() {
            const action = {
                type: 'addItem'
            };
            dispatch(action)
        }
    }
}
export default connect(stateToProps, dispatchToProps)(TodoListReactRedux);