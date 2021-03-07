import { render, fireEvent } from "@testing-library/react";
import SubmitLink from "./SubmitLink";

it("renders correctly", () => {
	const { queryByTestId } = render(<SubmitLink />);

	expect(queryByTestId("testContainer")).toBeTruthy();
	// expect(queryByTestId("addButtonTest"))
});

describe("plus button", () => {
	it("plus", () => {
		const testFunc = jest.fn();
		const { queryByTestId } = render(<SubmitLink />);
		const button = queryByTestId("plusButtonTest");
		fireEvent.click(button);
		expect(testFunc);
	});
});
