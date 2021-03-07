import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap/";
import "./LinkBox.css";

const LinkBox = ({
	id,
	voteCount,
	link,
	linkTitle,
	savedData,
	handleUpVote,
	handleDownVote,
}) => {
	const [vote, setVote] = useState(voteCount);
	const [show, setShow] = useState(false);
	const [smShow, setSmShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	var getData =
		JSON.parse(localStorage.getItem("data")) == null
			? []
			: JSON.parse(localStorage.getItem("data"));

	const handleLinkDelete = () => {
		// find the item that is gonna be deleted
		var del = getData.find((x) => x.id === id);
		for (var i = 0; i < getData.length; i++) {
			if (getData[i] === del) {
				getData.splice(i, 1);
			}
		}
		// once user clicked yes on the modal show the deleted modal message
		setSmShow(true);
		// update the localStorage data
		localStorage.setItem("data", JSON.stringify(getData));
		// 1.5 seconds later refresh the page in order to show the updated data
		setTimeout(() => {
			window.location.reload();
		}, 1500);
	};
	return (
		<>
			<div className='container text-center box' data-testid='testContainer'>
				<div className='row justify-content-center'>
					<div className='pt-2 col-md-1 pointsBox'>
						<span>{vote}</span>
						<p>points</p>
					</div>
					<div className='col-md-3 linkBox'>
						<i
							className='fas fa-times delete-btn text-danger'
							onClick={handleShow}></i>
						<span>{linkTitle}</span>
						<p>( {link} )</p>
						<div>
							<Button
								className='btn-success btn-sm float-left'
								onClick={() => {
									handleUpVote();
									setVote(vote + 1);
								}}>
								<i className='fas fa-arrow-up text-light'></i>
							</Button>
							<Button
								className='btn-danger btn-sm float-right'
								onClick={() => {
									handleDownVote();
									setVote(vote - 1);
								}}>
								<i className='fas fa-arrow-down text-light'></i>
							</Button>
						</div>
					</div>
				</div>
			</div>
			<hr className='text-danger border border-light' />

			<Modal show={show} onHide={handleClose} animation={true}>
				<Modal.Header closeButton>
					<Modal.Title>Remove Link</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Do you want to delete
					<span className='text-danger font-weight-bold'> {linkTitle}</span> ?
				</Modal.Body>
				<Modal.Footer>
					<Button variant='primary' onClick={handleClose}>
						No
					</Button>
					<Button
						variant='dark'
						onClick={() => {
							handleClose();
							handleLinkDelete();
						}}>
						Yes
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal
				size='sm'
				show={smShow}
				onHide={() => setSmShow(false)}
				aria-labelledby='example-modal-sizes-title-sm'>
				<Modal.Header closeButton className='bg-light'>
					<Modal.Title
						id='example-modal-sizes-title-sm'
						className='text-danger'>
						<span className='font-weight-bold'>{linkTitle}</span> removed.
					</Modal.Title>
				</Modal.Header>
			</Modal>
		</>
	);
};

export default LinkBox;
