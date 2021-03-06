import React from "react";
import { useEffect, useState } from "react";
import LinkBox from "../components/LinkBox/LinkBox";
import Sorter from "../components/Sorter/Sorter";
import SubmitLink from "../components/SubmitLink/SubmitLink";
import Pagination from "../components/Pagination/Pagination";

const ListPage = ({ onClick, savedData }) => {
	// localStorage.removeItem("data");
	const [currentPage, setCurrentPage] = useState(1);
	const [itemPerPage] = useState(5);
	const indexOfLastItem = currentPage * itemPerPage;
	const indexOfFirstItem = indexOfLastItem - itemPerPage;
	const currentItems = savedData.slice(indexOfFirstItem, indexOfLastItem);
	const [initialSort, setInitialSort] = useState(currentItems.reverse());
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const onSort = (sortBy) => {
		// if (sortBy === "default") {
		// 	return;
		// } else if (sortBy === "most") {
		// 	setInitialSort(
		// 		currentItems.sort(function compare(a, b) {
		// 			return a.vote - b.vote === 0
		// 				? a.name.toLowerCase() - b.name.toLowerCase()
		// 				: a.vote - b.vote;
		// 		})
		// 	);
		// 	console.log("xx: ", initialSort);
		// }
	};
	return (
		<div className='container'>
			<SubmitLink onClick={onClick} />
			<Sorter savedData={savedData} onSort={onSort} />
			{savedData.length === 0 ? (
				<LinkBox
					id={0}
					linkTitle='YouHaveNot'
					link='https://addanythingyet.com'
					voteCount={0}
				/>
			) : (
				currentItems
					.reverse()
					.map((data) => (
						<LinkBox
							key={data.id}
							id={data.id}
							linkTitle={data.name}
							link={data.url}
							voteCount={data.vote}
							savedData={savedData}
						/>
					))
			)}
			{savedData.length > 5 ? (
				<Pagination
					itemPerPage={itemPerPage}
					totalItem={savedData.length}
					paginate={paginate}
				/>
			) : (
				<> </>
			)}
		</div>
	);
};

export default ListPage;
