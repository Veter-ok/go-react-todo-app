import {useState} from "react"
import './App.css'
import TodoBlock from "./components/todoBlock/TodoBlock"
import {compareTodo} from './utils/sortTodo'
import {searchTodoAndSetComplete} from './utils/searchTodo'
import { useEffect } from "react"

function App() {
  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])
  const [sortedTodo, setSortedTodo] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/foo")
      .then(res => res.json())
      .then((res) => {
        setTodo(res)
    })
    setSortedTodo(todo)
    sortTodo()
  }, [todo])

  const setTodoComplete = (isComplete, id) => {
    let newTodoList = [...todo]
    newTodoList = searchTodoAndSetComplete(newTodoList, id, isComplete)
    setTodo(newTodoList)
  }

  const addNewTodo = () => {
    let maxIndex = 0
    for(let i = 0; i < todo.length; i++){
      if (todo[i].Id > maxIndex){
        maxIndex = todo[i].Id
      }
    }
    const newTodo = {
      Id: todo.length === 0 ? 0: maxIndex+ 1,
      IsComplete: false,
      Text: text
    }
    setTodo([newTodo, ...todo])
    setText("")
  }

  const sortTodo = () => {
    let newTodoList = [...todo]
    newTodoList = newTodoList.sort(compareTodo)
    setSortedTodo(newTodoList)
  }

  const deleteTodo = (todoId) => {
    const newTodoList = todo.filter((value) => value.Id !== todoId)
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
        {sortedTodo.map((value, index) => 
            <TodoBlock key={index} todo={value} deleteTodo={deleteTodo} setTodoComplete={setTodoComplete}/>
        )}
      </div>
    </>
  )
}

export default App
