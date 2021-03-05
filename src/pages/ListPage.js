import React from "react";
import LinkBox from "../components/LinkBox/LinkBox";
import SubmitLink from "../components/SubmitLink/SubmitLink";

const ListPage = ({ onClick }) => {
	return (
		<div className='container'>
			<SubmitLink onClick={onClick} />
			<LinkBox linkTitle='Reddit' link='https://reddit.com' voteCount={6} />
			<LinkBox linkTitle='Reddit' link='https://reddit.com' voteCount={6} />
			<LinkBox linkTitle='Reddit' link='https://reddit.com' voteCount={6} />
			<LinkBox linkTitle='Reddit' link='https://reddit.com' voteCount={6} />
			<LinkBox linkTitle='Reddit' link='https://reddit.com' voteCount={6} />
			<LinkBox linkTitle='Reddit' link='https://reddit.com' voteCount={6} />
			<LinkBox linkTitle='Reddit' link='https://reddit.com' voteCount={6} />
			<LinkBox linkTitle='Reddit' link='https://reddit.com' voteCount={6} />
		</div>
	);
};

export default ListPage;
