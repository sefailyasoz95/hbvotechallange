import React from "react";
import { useEffect, useState } from "react";
import LinkBox from "../components/LinkBox/LinkBox";
import Sorter from "../components/Sorter/Sorter";
import SubmitLink from "../components/SubmitLink/SubmitLink";
import Pagination from "../components/Pagination/Pagination";

const ListPage = ({ onClick }) => {
	// localStorage.removeItem("data");
	const [currentPage, setCurrentPage] = useState(1);
	const [itemPerPage] = useState(5);
	var getData =
		JSON.parse(localStorage.getItem("data")) == null
			? []
			: JSON.parse(localStorage.getItem("data"));
	const indexOfLastItem = currentPage * itemPerPage;
	const indexOfFirstItem = indexOfLastItem - itemPerPage;
	const currentItems = getData.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div className='container'>
			<SubmitLink onClick={onClick} />
			<Sorter />
			{getData.length === 0 ? (
				<LinkBox
					linkTitle='Henüz bir'
					link='https://kayiteklenmedi.com'
					voteCount={0}
				/>
			) : (
				currentItems
					.reverse()
					.map((data) => (
						<LinkBox
							id={data.id}
							linkTitle={data.name}
							link={data.url}
							voteCount={data.vote}
						/>
					))
			)}
			{getData.length > 5 ? (
				<Pagination
					itemPerPage={itemPerPage}
					totalItem={getData.length}
					paginate={paginate}
				/>
			) : (
				<> </>
			)}
		</div>
	);
};

export default ListPage;
