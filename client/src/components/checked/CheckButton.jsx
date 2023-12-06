import './CheckButton.css'
import PropTypes from 'prop-types'

const CheckButton = (props) => {
	return (
		<input onChange={(e) => props.setChecked(e.target.checked)} className="checkbox" type="checkbox" checked={props.isChecked}/>
	)
}

CheckButton.propTypes = {
	setChecked: PropTypes.func,
	isChecked: PropTypes.bool
}

export default CheckButton