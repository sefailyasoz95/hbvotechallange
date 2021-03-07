import { render, fireEvent } from "@testing-library/react";
import AddLinkPage from "./AddLinkPage";

it("renders correctly", () => {
	const { queryByTestId } = render(<AddLinkPage />);
	expect(queryByTestId("testContainer")).toBeTruthy();
});

describe("name input value", () => {
	it("updates on change", () => {
		const { queryByPlaceholderText } = render(<AddLinkPage />);
		const name = queryByPlaceholderText("e.g. Hepsiburada");
		fireEvent.change(name, { target: { value: "test" } });
		expect(name.value).toBe("test");
	});
});

describe("url input value", () => {
	it("updates on change", () => {
		const { queryByPlaceholderText } = render(<AddLinkPage />);
		const url = queryByPlaceholderText("e.g. https://hepsiburada.com");
		fireEvent.change(url, { target: { value: "test" } });
		expect(url.value).toBe("test");
	});
});

// describe("add button", () => {
// 	it("added", () => {
// 		const handleAddLink = jest.fn();
// 		const { queryByTestId } = render(<AddLinkPage />);
// 		const button = queryByTestId("addButtonTest");
// 		fireEvent.click(button);
// 		expect(handleAddLink).toBeCalled();
// 	});
// });
