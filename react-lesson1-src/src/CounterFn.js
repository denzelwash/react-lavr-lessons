import React, { useState } from 'react'
import PropTypes from 'prop-types' // ES6

export default function counter({ min, max }) {
	let [current, setCurrent] = useState(min)

	function inc() {
		if (current < max) {
			setCurrent(current + 1)
		}
	}

	function dec() {
		if (current > min) {
			setCurrent(current - 1)
		}
	}

	function handleChange(e) {
		e.preventDefault()
		const num = e.target.value.replace(/[\D]+/g, '')
		if (+num > min && +num < max) {
			setCurrent(e.target.value)
		}
	}

	return (
		<div>
			<button type="button" onClick={dec}>
				-
			</button>
			<input type="text" value={current} onChange={handleChange}></input>
			<button type="button" onClick={inc}>
				+
			</button>
		</div>
	)
}

counter.defaultProps = {
	min: 1,
	max: 10,
}

counter.propTypes = {
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired,
}
