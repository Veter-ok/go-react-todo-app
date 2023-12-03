import 'react'
import './TodoBlock.css'
import logo from '../../assets/cross.svg'
import CheckButton from '../checked/CheckButton'

const TodoBlock = ({todo, deleteTodo}) => {
	return (
		<div className="todo-block">
			<CheckButton/>
			<div>{todo.text}</div>
			<img onClick={() => deleteTodo(todo.id)} src={logo} alt="" width={45}/>
		</div>
	)
}

export default TodoBlock