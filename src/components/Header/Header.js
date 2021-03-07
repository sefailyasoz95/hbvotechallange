import React from "react";
import { Navbar } from "react-bootstrap";
import "./Header.css";
const Header = () => {
	return (
		<>
			<Navbar
				data-testid='testContainer'
				bg='light'
				className='col-md-10 mx-auto justify-content-between sticky-top'
				style={{
					borderRadius: 15,
				}}>
				<Navbar.Brand className='brand'>
					<a href='/'>
						<span>Hepsiburada</span>
					</a>
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
