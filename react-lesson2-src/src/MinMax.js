import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

MinMax.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number.isRequired,
	current: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
}

function MinMax({ min = 1, max, current, onChange }) {
	let [tempCurrent, setTempCurrent] = useState(current)

	function applyCurrent(num) {
		let validNum = Math.max(min, Math.min(max, num))
		onChange(validNum)
	}

	// function parseCurrentStr(e) {
	// 	let num = parseInt(e.target.value)
	// 	applyCurrent(isNaN(num) ? min : num)
	// }

	function setTempValue(e) {
		let num = e.target.value
		if (num === '') {
			setTempCurrent(min)
		} else if (!isNaN(num)) {
			setTempCurrent(num)
		}
	}

	useEffect(() => {
		setTempCurrent(current)
	}, [current])

	let inc = () => applyCurrent(current + 1)
	let dec = () => applyCurrent(current - 1)

	return (
		<div>
			<button type="button" onClick={dec}>
				-
			</button>
			{current}
			<input type="text" value={tempCurrent} onChange={setTempValue} onBlur={() => applyCurrent(tempCurrent)} />
			<button type="button" onClick={inc}>
				+
			</button>
		</div>
	)
}

export default MinMax
