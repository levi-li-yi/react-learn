import React, {Component} from "react"
import {Link} from "react-router-dom"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: '007',
                    name: '007'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>Home</h2>
                <ul>
                    <li onClick={this.goTo.bind(this)}>List页面</li>
                    {/*{
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={'/list/' + item.id}>{item.name}</Link>
                                </li>
                            )
                        })
                    }*/}
                </ul>
            </div>
        )
    }
    goTo() {
        console.log('push');
        this.props.history.push('/list/:'+ '233')
    }
}
export default Home;