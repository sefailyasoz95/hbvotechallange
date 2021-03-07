import { render, fireEvent } from "@testing-library/react";
import ListPage from "./ListPage";
import { testMe, handleUpVote } from "./ListPage";

test("testMe", () => {
	expect(testMe(2, 3)).toBe(5);
});

const testData = [
	{ id: 1, name: "sefa", url: "www", vote: 5 },
	{ id: 2, name: "ilyas", url: "www", vote: 7 },
];
const upVoted = [
	{ id: 1, name: "sefa", url: "www", vote: 6 },
	{ id: 2, name: "ilyas", url: "www", vote: 7 },
];

// test("handleUpVote", () => {
// 	expect(handleUpVote(1, testData)).toBe(upVoted);
// });
