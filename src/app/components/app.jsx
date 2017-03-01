import React from 'react'
import Footer from './Footer.jsx'
import AddTodo from '../container/AddTodo.jsx'
import VisibleTodoList from '../container/VisibleTodoList.jsx'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App