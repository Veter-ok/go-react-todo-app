import 'react'
import PropTypes from 'prop-types'
import './TodoBlock.css'
import logo from '../../assets/cross.svg'
import CheckButton from '../checked/CheckButton'

const TodoBlock = (prop) => {

	const setTodoComplete = (isChecked) => {
		prop.setTodoComplete(isChecked, prop.todo.Id)
	}

	return (
		<div className="todo-block">
			<CheckButton setChecked={setTodoComplete} isChecked={prop.todo.IsComplete}/>
			<div className={`todo-block-text ${prop.todo.IsComplete ? "line-through" : ""}`}>{prop.todo.Text}</div>
			<img onClick={() => prop.deleteTodo(prop.todo.Id)} src={logo} alt="" width={45}/>
		</div>
	)
}

TodoBlock.propTypes = {
	todo: PropTypes.object,
	deleteTodo: PropTypes.func,
	setTodoComplete: PropTypes.func
}

export default TodoBlock