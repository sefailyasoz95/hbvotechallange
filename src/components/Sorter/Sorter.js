import React from "react";
import { Form } from "react-bootstrap";

const Sorter = () => {
	return (
		<>
			<div className='container col-md-3'>
				<Form.Group>
					<Form.Control as='select'>
						<option>Order By</option>
						<option value='most'>Most Voted (Z-A)</option>
						<option value='less'>Less Voted (A-Z)</option>
					</Form.Control>
				</Form.Group>
			</div>

			<hr className='text-danger border border-light' />
		</>
	);
};

export default Sorter;
