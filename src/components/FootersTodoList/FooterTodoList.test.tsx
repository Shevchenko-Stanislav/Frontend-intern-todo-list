import { render, screen } from "@testing-library/react";

import { FooterTodoList } from "./FooterTodoList";

const length = 1;

describe("FooterTodoList component", () => {
    it("component renders", () => {
        render(<FooterTodoList listLength={length}/>);

        expect(screen.getByText(/items left/)).toBeInTheDocument();
    }); 
});