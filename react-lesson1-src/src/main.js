import React from 'react'
import ReactDom from 'react-dom'

import CounterClass from './CounterClass'
import CounterFn from './CounterFn'

ReactDom.render(
	<div className="some">
		<h3>
			Fn min={3} max={10}
		</h3>
		<CounterFn min={3} max={10} />
		<h3>
			Fn min={1} max={5}
		</h3>
		<CounterFn min={1} max={5} />
	</div>,
	document.querySelector('.app'),
)
