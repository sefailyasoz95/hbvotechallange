import "./App.css";
import Button from "react-bootstrap/Button";
import Header from "./components/Header/Header";
import { useState } from "react";
import ListPage from "./pages/ListPage";
import AddLinkPage from "./pages/AddLinkPage";
import SubmitLink from "./components/SubmitLink/SubmitLink";
function App() {
	const [changePage, setChangePage] = useState(1);
	return (
		<div className='App-header container'>
			<Header />
			{changePage ? (
				<ListPage
					onClick={() => {
						setChangePage(!changePage);
					}}
				/>
			) : (
				<AddLinkPage
					onClick={() => {
						setChangePage(!changePage);
					}}
				/>
			)}
		</div>
	);
}

export default App;
