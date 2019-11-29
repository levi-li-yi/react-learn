import React, {Component} from "react"
import { Redirect } from "react-router-dom"

class Index extends Component {
    constructor(props) {
        super(props);
        // 重定向
        this.props.history.push('/home/')
    }
    render() {
        return (
            <div>
                Index页面
                {/*<Redirect to="/home/" />*/}
            </div>
        )
    }
}
export default Index;