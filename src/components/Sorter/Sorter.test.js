import { render, fireEvent } from "@testing-library/react";
import Sorter from "./Sorter";

it("renders correctly", () => {
	const { queryByTestId } = render(<Sorter />);
	expect(queryByTestId("testContainer")).toBeTruthy();
});
