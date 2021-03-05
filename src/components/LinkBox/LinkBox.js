import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

const LinkBox = ({ voteCount, link, linkTitle }) => {
	const [vote, setVote] = useState(voteCount);

	return (
		<>
			<div
				className='container text-center d-inline-block'
				style={{ maxWidth: 405, marginLeft: 340 }}>
				<div
					className='border-light px-3 py-1 rounded-lg border pt-3 float-left'
					style={{ width: 100, height: 120, margin: 5 }}>
					<span style={{ fontWeight: 800, fontSize: 30 }}>{vote}</span>
					<p style={{ fontSize: 18 }}>points</p>
				</div>
				<div className='float-left' style={{ width: 250, margin: 5 }}>
					<span style={{ fontWeight: 600, fontSize: 25 }}>{linkTitle}</span>
					<p style={{ fontSize: 14 }}>( {link} )</p>
					<div className=''>
						<Button
							className='btn-success btn-sm float-left'
							onClick={() => {
								setVote(vote + 1);
							}}>
							<i className='p-2 fas fa-arrow-up text-light'></i>
						</Button>
						<Button className='btn-danger btn-sm float-right'>
							<i
								className='p-2 fas fa-arrow-down text-light'
								onClick={() => {
									setVote(vote - 1);
								}}></i>
						</Button>
					</div>
				</div>
			</div>
			<hr className='text-danger border border-light' />
		</>
	);
};

export default LinkBox;
