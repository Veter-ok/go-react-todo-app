import 'react'
import PropTypes from 'prop-types'
import './TodoBlock.css'
import logo from '../../assets/cross.svg'
import CheckButton from '../checked/CheckButton'

const TodoBlock = (prop) => {

	const setTodoComplete = (isChecked) => {
		prop.setTodoComplete(isChecked, prop.todo.id)
	}

	return (
		<div className="todo-block">
			<CheckButton setChecked={setTodoComplete} isChecked={prop.todo.isComplete}/>
			<div className={`todo-block-text ${prop.todo.isComplete ? "line-through" : ""}`}>{prop.todo.text}</div>
			<img onClick={() => prop.deleteTodo(prop.todo.id)} src={logo} alt="" width={45}/>
		</div>
	)
}

TodoBlock.propTypes = {
	todo: PropTypes.object,
	deleteTodo: PropTypes.func,
	setTodoComplete: PropTypes.func
}

export default TodoBlock