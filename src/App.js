import React, {Component, Fragment} from 'react'
import AppItem from './AppItem'

class App extends Component {
    constructor(props) {
        // 继承props
        super(props);
        // 定义组件state，作为组件变量
        this.state = {
            inputValue: '',
            list: ['初始数据']
        }
    }
    render() {
        return (
            <Fragment>
                {/*class样式通过className添加*/}
                <div className="my-app">
                    <div>
                        {/*label绑定input框通过htmlFor*/}
                        <label htmlFor="ip">激活</label>
                        {/*输入框通过change事件实现值的变化,添加事件写在括号内，事件需要绑定this;使用ref绑定*/}
                        <input id="ip" ref={(input) =>{this.input=input}} type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                        <button onClick={this.addList.bind(this)}>添加</button>
                    </div>
                    <ul>
                        {/*在jsx中编写数据逻辑需要在外层添加大括号, 循环需要设置key值, 事件动态传值可以通过bind传入*/}
                        {
                            this.state.list.map((item, index) => {
                                /*return <li
                                    key={index}
                                    onClick={this.deleteItem.bind(this,index)}
                                >{item}</li>*/
                                /*父组件可以通过属性向子组件传值、传方法*/
                                return (
                                    <AppItem
                                        key={index}
                                        content={item}
                                        index={index}
                                        deleteItem={this.deleteItem.bind(this)}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
    inputChange(e) {
        /*修改state需要通过this.setState*/
        this.setState({
            //inputValue: e.target.value
            inputValue: this.input.value
        }, () => {
            console.log('setState回调函数');
        })
    }
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    deleteItem(index) {
        /*react禁止直接操作state, 所以需要做一个中转过程*/
        const list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default App