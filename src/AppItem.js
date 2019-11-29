import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AppItem extends Component {
    /*子组件通过props获取父组件传递的参数和方法*/
    render() {
        return (
            <li onClick={this.handleClick.bind(this)}>{this.props.content}</li>
        )
    }
    handleClick() {
        console.log(this.props.index);
        this.props.deleteItem(this.props.index)
    }
    /*生命周期函数*/
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    /*组件更新前：需要返回true, 该方法用来控制组件是否需要更新以提升组件性能*/
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        /*if return true则组件更新*/
        /*if return false则组件不更新*/
        //if(nextProps.content !== this.props.content)
        return true
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps ');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}

// 可以使用prop-type对组件传值props进行类型校验
AppItem.propTypes = {
    conent: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

export default AppItem