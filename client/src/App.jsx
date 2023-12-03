import {useState} from "react"
import './App.css'
import TodoBlock from "./components/todoBlock/TodoBlock"

function App() {
  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])

  const addNewTodo = () => {
    const newTodo = {
      id: todo.length > 0 ? todo[todo.length - 1].id + 1 : 0,
      text: text
    }
    setTodo([...todo, newTodo])
    setText("")
    console.log(todo, newTodo)
  }

  const deleteTodo = (todoId) => {
    const newTodoList = todo.filter((value) => value.id !== todoId)
    setTodo(newTodoList)
  }

  return (
    <>
      <div className="title">Todo list</div>
      <div className="add-block">
        <input
          className="input-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="button-add" onClick={addNewTodo}>Add</button>
      </div>
      <div className="todos">
        {todo.map((value, index) => 
            <TodoBlock key={index} todo={value} deleteTodo={deleteTodo}/>
        )}
      </div>
    </>
  )
}

export default App
