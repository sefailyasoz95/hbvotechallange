import React, { useEffect, useState } from "react";
import LinkBox from "../components/LinkBox/LinkBox";
import Sorter from "../components/Sorter/Sorter";
import SubmitLink from "../components/SubmitLink/SubmitLink";

const ListPage = ({ onClick }) => {
	const [dataList, setDataList] = useState();
	// localStorage.removeItem("data");
	var getData =
		JSON.parse(localStorage.getItem("data")) == null
			? []
			: JSON.parse(localStorage.getItem("data"));
	// useEffect(() => {
	// 	setDataList(getData);
	// });
	// console.log(getData);

	return (
		<div className='container'>
			<SubmitLink onClick={onClick} />
			<Sorter />
			{getData.length == 0 ? (
				<LinkBox
					linkTitle='Henüz bir'
					link='https://kayiteklenmedi.com'
					voteCount={0}
				/>
			) : (
				getData
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
		</div>
	);
};

export default ListPage;
