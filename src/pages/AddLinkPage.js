import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, Alert, Badge } from "react-bootstrap";

const AddLinkPage = ({ onClick }) => {
	const [linkNameValue, setLinkNameValue] = useState("");
	const [linkURLValue, setLinkURLValue] = useState("");
	const [message, setMessage] = useState("");

	// add new Link item
	const handleAddLink = () => {
		// get data from localStorage, if it doesn't exist set getData to an empty array
		var getData =
			JSON.parse(localStorage.getItem("data")) == null
				? []
				: JSON.parse(localStorage.getItem("data"));
		var ID = 0;
		// is getData is null ? if so set ID to 1 else find the object which has the highest ID and add it to 1
		// and set the new items id
		getData == null
			? (ID = 1)
			: (ID =
					Math.max.apply(
						Math,
						getData.map(function (o) {
							return o.id;
						})
					) + 1);

		// create a data object with the input values
		var data = {
			id: ID,
			name: linkNameValue,
			url: linkURLValue,
			vote: 0,
		};

		// add the created data object to the getData array
		getData.push(data);

		// save the getData array to the localStorage
		localStorage.setItem("data", JSON.stringify(getData));

		// show the alert message with the added items name
		setMessage(`${linkNameValue} Added`);
		// set the input areas empty string so user can add another item easily
		setLinkNameValue("");
		setLinkURLValue("");

		// after 2.5 seconds remove the alert message
		setTimeout(() => {
			setMessage();
		}, 2500);
	};
	return (
		<div className='container col-md-3 mt-3' data-testid='testContainer'>
			{message ? <Alert variant='success'>{message}</Alert> : <></>}
			<Button onClick={onClick} variant='dark'>
				<i className='fas fa-arrow-left mr-3'></i>
				Return to List
			</Button>
			<Form className='mt-3'>
				<h2>
					<Badge variant='secondary' pill className='col-md-12'>
						Add New Link
					</Badge>
				</h2>
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
					data-testid='addButtonTest'
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
