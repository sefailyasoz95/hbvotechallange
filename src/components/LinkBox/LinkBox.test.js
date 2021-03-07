import { render } from "@testing-library/react";
import LinkBox from "./LinkBox";

it("renders correctly", () => {
	const { queryByTestId } = render(<LinkBox />);
	expect(queryByTestId("testContainer")).toBeTruthy();
});
