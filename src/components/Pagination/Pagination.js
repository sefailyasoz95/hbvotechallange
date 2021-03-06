import React from "react";

const Pagination = ({ itemPerPage, totalItem, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<>
			<nav>
				<ul className='pagination'>
					{pageNumbers.map((number) => (
						<li key={number} className='page-item'>
							<a
								href='!#'
								onClick={() => paginate(number)}
								className='page-link'>
								{number}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<hr />
		</>
	);
};

export default Pagination;
