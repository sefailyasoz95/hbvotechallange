import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, Alert } from "react-bootstrap";

const AddLinkPage = ({ onClick }) => {
	const [linkNameValue, setLinkNameValue] = useState();
	const [linkURLValue, setLinkURLValue] = useState();
	const [message, setMessage] = useState();
	const handleAddLink = () => {
		var getData =
			JSON.parse(localStorage.getItem("data")) == null
				? []
				: JSON.parse(localStorage.getItem("data"));
		var ID = 0;
		getData == null ? (ID = 1) : (ID = getData.length + 1);
		var data = {
			id: ID,
			name: linkNameValue,
			url: linkURLValue,
			vote: 0,
		};
		getData.push(data);
		localStorage.setItem("data", JSON.stringify(getData));
		setMessage(`${linkNameValue} Added`);
		setLinkNameValue("");
		setLinkURLValue("");
		// localStorage.removeItem("data");
		setTimeout(() => {
			setMessage();
		}, 2500);
		console.log(JSON.parse(localStorage.getItem("data")));
	};
	return (
		<div className='container col-md-3 mt-3'>
			{message ? <Alert variant='success'>{message}</Alert> : <></>}
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
						handleAddLink();
					}}>
					Add
				</Button>
			</Form>
		</div>
	);
};

export default AddLinkPage;
