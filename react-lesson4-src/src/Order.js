import React, {useState, useRef, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function({ onPrev, onNext, formFields, setFormFields }){
	const form = useRef()
	const [validated, setValidated] = useState(false);
	const [disableSubmit, setdisableSubmit] = useState(true);
	const [show, setShow] = useState(false);

	const handlerChange = (field, e) => {
		field.value = e.target.value
		if (field.pattern) {
			field.error = !field.pattern.test(e.target.value)
		} else if (field.value.length === 0) {
			field.error = true
		}
		setFormFields([...formFields])
	}

	const handlerSubmit = (e) => {
		e.preventDefault()
		setValidated(true)
		if (formFields.findIndex(field => field.error) > -1) {
			return
		}
		setShow(true)
	}

	useEffect(() => {
		let showFieldsErrors = true
		formFields.forEach(elem => {
			if (elem.value.length === 0) showFieldsErrors = false
		})
		setdisableSubmit(!showFieldsErrors)
	}, [formFields])

	return <div>
		<h1>Form</h1>
		<hr/>
		<Form noValidate onSubmit={handlerSubmit} ref={form}>
			{formFields.map(field => (
				<Form.Group className="mb-3" key={field.name}>
					<Form.Label>{field.name}</Form.Label>
					<Form.Control type={field.type} placeholder={field.placeholder} value={field.value} onChange={(e) => handlerChange(field, e)} required/>
					{validated && field.error && <Form.Control.Feedback type="invalid">
						{field.errorText}
					</Form.Control.Feedback>}
				</Form.Group>
			))}
			<button type="button" className="btn btn-warning" onClick={onPrev}>Back to cart</button>
			<button type="submit" className="btn btn-success" disabled={disableSubmit}>Result</button>
		</Form>
		<Modal show={show} onHide={() => setShow(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>Перейти? </Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => setShow(false)}>
					Нет
				</Button>
				<Button variant="primary" onClick={onNext}>
					Да
				</Button>
			</Modal.Footer>
		</Modal>
	</div>;
}

