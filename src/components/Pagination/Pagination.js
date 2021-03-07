import React from "react";
import { Pagination as Pagi } from "react-bootstrap";

const Pagination = ({ itemPerPage, totalItem, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div data-testid='testContainer'>
			<Pagi size='sm'>
				{pageNumbers.map((number) => (
					<li key={number} className='page-item'>
						<a href='#' onClick={() => paginate(number)} className='page-link'>
							{number}
						</a>
					</li>
				))}
			</Pagi>
		</div>
	);
};

export default Pagination;
