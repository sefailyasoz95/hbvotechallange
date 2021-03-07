import React from "react";
import Button from "react-bootstrap/Button";

const SubmitLink = ({ onClick }) => {
	return (
		<>
			<div className='container' data-testid='testContainer'>
				<div className='text-center row justify-content-center mt-3'>
					<div className='float-left'>
						<Button
							className='btn-lg p-4'
							onClick={onClick}
							data-testid='plusButtonTest'>
							<i
								className='fas fa-plus text-white'
								style={{ fontSize: 50 }}></i>
						</Button>
					</div>
					<div className='float-right m-4'>
						<span className='font-weight-bold'>Submit A Link</span>
					</div>
				</div>
			</div>
			<hr className='text-danger border border-light' />
		</>
	);
};

export default SubmitLink;
