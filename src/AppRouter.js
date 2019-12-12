import React from "react"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

import Index from "./pages/Index"
import Home from "./pages/Home/Home"
import List from "./pages/Home/List"

function AppRouter() {
    return (
        <Router>
            <ul>
                {/*链接跳转*/}
                <li><Link to="/index">Index页面</Link></li>
                <li><Link to="/home/">首页</Link></li>
                <li><Link to="/list/123">列表</Link></li>
            </ul>
            {/*路由地址设定*/}
            <Route path="/index" exact component={Index}/>
            <Route path="/home/" component={Home}/>
            <Route path="/list/:id" component={List}/>
        </Router>
    )
}

export default AppRouter;