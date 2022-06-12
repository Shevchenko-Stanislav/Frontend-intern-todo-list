import { render, screen } from "@testing-library/react";

import { MenuHeaderCompletedList } from "./MenuHeaderCompletedList";

describe("MenuHeaderCompletedList component", () => {
    it("component renders", () => {
        render(<MenuHeaderCompletedList />);

        expect(screen.getByText("Completed tasks")).toBeInTheDocument();
    }); 
});