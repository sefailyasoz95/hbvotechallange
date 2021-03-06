import React from "react";
import Button from "react-bootstrap/Button";

const SubmitLink = ({ onClick }) => {
	return (
		<>
			<div
				className='container text-center d-inline-block mt-3'
				style={{ maxWidth: 405, marginLeft: 340 }}>
				<div
					className='float-left'
					style={{ width: 100, height: 105, margin: 5 }}>
					<Button className='btn-lg p-4' onClick={onClick}>
						<i className='fas fa-plus text-white' style={{ fontSize: 50 }}></i>
					</Button>
				</div>
				<div className='float-right mt-4' style={{ width: 250, margin: 5 }}>
					<span style={{ fontWeight: 600, fontSize: 35 }}> Submit A Link </span>
				</div>
			</div>
			<hr className='text-danger border border-light' />
		</>
	);
};

export default SubmitLink;
