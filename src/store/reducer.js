import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './actionTypes'
import store from "./index";
/*定义state仓库*/
const defaultState = {
    inputValue: '初始值',
    list: [
        '项目1',
        '项目2'
    ]
};
/*reducer只能接收state,不能改变state；只要store.dispatch则reducer可以订阅*/
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT) {
        /*深拷贝*/
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        /*返回新的state*/
        return newState
    }
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        if (newState.inputValue) {
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState
        }
    }
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState
    }
    console.log(state, action);
    return state
}