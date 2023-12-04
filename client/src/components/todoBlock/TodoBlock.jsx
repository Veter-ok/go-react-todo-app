import 'react'
import PropTypes from 'prop-types'
import './TodoBlock.css'
import logo from '../../assets/cross.svg'
import CheckButton from '../checked/CheckButton'
import { useState } from 'react'

const TodoBlock = (prop) => {
	const [checked, setChecked] = useState(false)

	return (
		<div className="todo-block">
			<CheckButton setChecked={setChecked}/>
			<div className={`todo-block-text ${checked ? "line-through" : ""}`}>{prop.todo.text}</div>
			<img onClick={() => prop.deleteTodo(prop.todo.id)} src={logo} alt="" width={45}/>
		</div>
	)
}

TodoBlock.propTypes = {
	todo: PropTypes.object,
	deleteTodo: PropTypes.func
}

export default TodoBlock