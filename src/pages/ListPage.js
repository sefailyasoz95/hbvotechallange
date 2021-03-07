import React from "react";
import { useEffect, useState } from "react";
import LinkBox from "../components/LinkBox/LinkBox";
import Sorter from "../components/Sorter/Sorter";
import SubmitLink from "../components/SubmitLink/SubmitLink";
import Pagination from "../components/Pagination/Pagination";

export const testMe = (x, y) => {
	return x + y;
};

export const handleUpVote = (id, data) => {
	// written for up voting event.
	// find the item that voted in the data array
	var up = data.find((x) => x.id === id);
	for (var i = 0; i < data.length; i++) {
		if (data[i] === up) {
			// once it's found, increase the vote by one
			data[i].vote += 1;
		}
	}
	// save the new data array to the localstorage
	localStorage.setItem("data", JSON.stringify(data));

	// refresh the page in order to be able to see the changes.
	window.location.reload();

	// i've tried using effect hooks but got some issues, couldn't figured it out
	// at the moment so which is why i've decided do this way
};
export function handleDownVote(id, data) {
	// written for down voting event
	// find the item that voted in the data array
	var down = data.find((x) => x.id === id);
	for (var i = 0; i < data.length; i++) {
		if (data[i] === down) {
			// once it's found, decrease the vote by one
			data[i].vote -= 1;
		}
	}
	localStorage.setItem("data", JSON.stringify(data));
	window.location.reload();
}

export const compare = (a, b) => {
	// used as sort methods callback function to be able to sort
	// the array of object by a property which in this case the vote.
	// it should sort by the name once the vote's are equal but it doesn't
	// couldn't figure out why.
	return b.vote - a.vote === 0
		? a.name.toLowerCase() - b.name.toLowerCase()
		: b.vote - a.vote;
};

const ListPage = ({ onClick, savedData }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemPerPage] = useState(5);
	const indexOfLastItem = currentPage * itemPerPage;
	const indexOfFirstItem = indexOfLastItem - itemPerPage;
	const currentItems = savedData.slice(indexOfFirstItem, indexOfLastItem);
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const onSort = (sortBy) => {
		if (sortBy === "default") {
			return;
		} else if (sortBy === "most") {
			// when most voted selected from the dropdown, sorts the array accordingly and saves the data as sorted.
			localStorage.setItem(
				"data",
				JSON.stringify(
					savedData.sort(function compare(a, b) {
						return a.vote - b.vote === 0
							? a.name.toLowerCase() - b.name.toLowerCase()
							: b.vote - a.vote;
					})
				)
			);
			window.location.reload();
		} else if (sortBy === "less") {
			// when less voted selected from the dropdown, sorts the array accordingly and saves the data as sorted.
			localStorage.setItem(
				"data",
				JSON.stringify(
					savedData.sort(function compare(a, b) {
						return a.vote - b.vote === 0
							? a.name.toLowerCase() - b.name.toLowerCase()
							: a.vote - b.vote;
					})
				)
			);
			window.location.reload();
		}
	};
	useEffect(() => {
		savedData.sort(compare);
	}, []);
	return (
		<div className='container' data-testid='testContainer'>
			<SubmitLink onClick={onClick} />
			<Sorter savedData={savedData} onSort={onSort} />
			{/* if no data to show, show the LinkBox template */}
			{savedData.length === 0 ? (
				<LinkBox
					id={0}
					linkTitle='YouDidNot'
					link='https://addanythingyet.com'
					voteCount={0}
				/>
			) : (
				currentItems.map((data) => (
					<LinkBox
						key={data.id}
						id={data.id}
						linkTitle={data.name}
						link={data.url}
						voteCount={data.vote}
						handleUpVote={() => {
							handleUpVote(data.id, savedData);
						}}
						handleDownVote={() => {
							handleDownVote(data.id, savedData);
						}}
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
