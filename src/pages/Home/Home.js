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
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={'/list/' + item.id}>{item.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Home;