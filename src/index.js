import React from 'react'
import ReactDOM from 'react-dom'
//import App from './App'
// import TodoListRedux from './TodoListRedux'
import TodoListReactRedux from './TodoListReactRedux'
/*引入react-redux：有了Provider组件里面的其他组件都可以使用store*/
import { Provider } from 'react-redux';
import store from './store'
import AppRouter from './AppRouter'

const App = (
    <Provider store={store}>
        <TodoListReactRedux />
    </Provider>
)

//ReactDOM.render(App, document.getElementById('root'));
ReactDOM.render(<AppRouter/>, document.getElementById('root'));