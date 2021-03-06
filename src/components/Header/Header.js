import React from "react";
import { Navbar } from "react-bootstrap";
import "./Header.css";
const Header = () => {
	return (
		<>
			<Navbar
				bg='light'
				className='col-md-10 mx-auto justify-content-between sticky-top'
				style={{
					borderRadius: 15,
				}}>
				<Navbar.Brand className='brand'>
					<span>Hepsiburada</span>
					<small>.com</small>
				</Navbar.Brand>
				<Navbar.Brand className='linkVote'>
					<span>Link</span>
					<small>VOTE</small> Challange
				</Navbar.Brand>
			</Navbar>
		</>
	);
};

export default Header;
