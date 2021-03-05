import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const AddLinkPage = ({ onClick }) => {
	const [linkNameValue, setLinkNameValue] = useState();
	const [linkURLValue, setLinkURLValue] = useState();
	return (
		<div className='container col-md-3 mt-3'>
			<Button onClick={onClick} variant='dark'>
				<i className='fas fa-arrow-left mr-3'></i>
				Return to List
			</Button>
			<Form className='mt-3'>
				<Form.Group>
					<Form.Label>Link Name:</Form.Label>
					<Form.Control
						type='text'
						placeholder='e.g. Hepsiburada'
						value={linkNameValue}
						onChange={(e) => setLinkNameValue(e.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Link URL:</Form.Label>
					<Form.Control
						type='text'
						placeholder='e.g. https://hepsiburada.com'
						value={linkURLValue}
						onChange={(e) => setLinkURLValue(e.target.value)}
					/>
				</Form.Group>
				<Button
					className='btn-light float-right px-4 py-2'
					style={{ borderRadius: 15 }}
					onClick={() => {
						alert(`name ${linkNameValue} url ${linkURLValue}`);
					}}>
					Add
				</Button>
			</Form>
		</div>
	);
};

export default AddLinkPage;
