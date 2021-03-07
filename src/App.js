import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";
import ListPage from "./pages/ListPage";
import AddLinkPage from "./pages/AddLinkPage";
function App() {
	// There are couple of things that could have been better
	// I did as much as i can do at the moment
	// when the opportunity and the time given
	// I believe that i can learn a lot more and do a lot better

	// I would like to learn how to fix those bugs

	const [changePage, setChangePage] = useState(false);
	// get data from localStorage if there is none set it to an empty array
	// send the data through props to the other components.
	var getData =
		JSON.parse(localStorage.getItem("data")) == null
			? []
			: JSON.parse(localStorage.getItem("data"));

	return (
		<>
			<div className='App-header container'>
				<Header />
				{/* conditional rendering, ListPage rendered by default */}
				{!changePage ? (
					<ListPage
						savedData={getData}
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
		</>
	);
}

export default App;
