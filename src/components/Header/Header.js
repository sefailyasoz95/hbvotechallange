import React from "react";
import { Navbar } from "react-bootstrap";
const Header = () => {
	return (
		<>
			<Navbar
				bg='light'
				className='col-md-10 mx-auto justify-content-between sticky-top'
				style={{
					borderRadius: 15,
				}}>
				<Navbar.Brand style={{ color: "darkorange", fontWeight: 700 }}>
					Hepsiburada<span style={{ color: "black" }}>.com</span>
				</Navbar.Brand>
				<Navbar.Brand>
					<span style={{ fontWeight: 700 }}>Link</span>
					<span style={{ fontWeight: 300 }}>VOTE</span> Challange
				</Navbar.Brand>
			</Navbar>
		</>
	);
};

export default Header;
