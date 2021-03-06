import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";
import ListPage from "./pages/ListPage";
import AddLinkPage from "./pages/AddLinkPage";
function App() {
	const [changePage, setChangePage] = useState(true);
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
