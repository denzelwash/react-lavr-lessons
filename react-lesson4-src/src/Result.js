import React from 'react'

export default function({products, formFields}){
	
	return <div>
		<h1>Result screen</h1>
		<table>
			<tbody>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Price</th>
					<th>Cnt</th>
					<th>Total</th>
				</tr>
				{ products.map((pr, i) => (
					<tr key={pr.id}>
						<td>{ i + 1 }</td>
						<td>{ pr.title }</td>
						<td>{ pr.price }</td>
						<td>{ pr.cnt }</td>
						<td>{ pr.price * pr.cnt }</td>
					</tr>
				)) }
			</tbody>
		</table>
		<hr></hr>
		{formFields.map(field => (
			<div className="mb-3" key={field.name}>
				<p>{field.name}: {field.value}</p>
			</div>
		))}
	</div>;
}