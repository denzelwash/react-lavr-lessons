import React, { useState } from 'react'

import Cart from './Cart';
import Order from './Order';
import Result from './Result';

import SettingContext from './contexts/settings'

export default function(){
	/* settings */
	let [ settings, setSettings ] = useState({ lang: 'ru', theme: 'light' });

	/* router parody */
	let [ page, setPage ] = useState('cart');
	let moveToCart = () => setPage('cart');
	let moveToOrder= () => setPage('order');
	let moveToResult = () => setPage('result');

	/* products */
	let [ products, setProducts ] = useState(productsStub());

	const [formFields, setFormFields] = useState(getFormFields())

	let setProductCnt = (id, cnt) => {
		setProducts(products.map(pr => pr.id != id ? pr : ({ ...pr, cnt })));
	}

	let removeProduct = (id) => {
		setProducts(products.filter(el => el.id !== id));
	}

	return <SettingContext.Provider value={settings}>
		<div className="container mt-1">
			{ page === 'cart' && 
				<Cart 
					onNext={moveToOrder} 
					products={products}
					onChange={setProductCnt}
					onRemove={removeProduct}
				/> 
			}
			{ page === 'order' && 
				<Order 
					onNext={moveToResult} 
					onPrev={moveToCart} 
					formFields={formFields}
					setFormFields={setFormFields}
				/> }
			{ page === 'result' && 
				<Result 
					products={products}
					formFields={formFields} 
			/> }
			<hr/>
			<footer>
				<button type="button" onClick={() => setSettings({ ...settings, lang: 'ru' })}>ru</button>
				<button type="button" onClick={() => setSettings({ ...settings, lang: 'en' })}>en</button>
			</footer>
		</div>
	</SettingContext.Provider>;
}

function productsStub(){
	return [
		{
			id: 100,
			title: 'Ipnone 200',
			price: 12000,
			rest: 10,
			cnt: 1
		},
		{
			id: 101,
			title: 'Samsung AAZ8',
			price: 22000,
			rest: 5,
			cnt: 1
		},
		{
			id: 103,
			title: 'Nokia 3310',
			price: 5000,
			rest: 2,
			cnt: 1
		},
		{
			id: 105,
			title: 'Huawei ZZ',
			price: 15000,
			rest: 8,
			cnt: 1
		}
	];
}

const getFormFields = () => {
	return [
		{
			name: 'Name',
			value: '',
			type: 'text',
			required: true,
			error: false,
			errorText: 'Please choose a username',
			placeholder: 'Name',
			pattern: false,
		},
		{
			name: 'Phone',
			value: '',
			type: 'tel',
			required: true,
			error: false,
			errorText: 'Please choose a phone',
			placeholder: '8888888888',
			pattern: /^\D*(\d\D*){9,14}$/,
		},
		{
			name: 'Email',
			value: '',
			type: 'email',
			required: true,
			error: false,
			errorText: 'Please choose a email',
			placeholder: 'Email',
			pattern: /^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
		},
	]
}