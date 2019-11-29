import React, {Component} from "react"

class List extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>List</div>
        )
    }
    componentDidMount() {
        /*获取路由信息*/
        console.log(this.props.match);
    }
}
export default List;