import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";

import { FooterCompletedList } from "./FooterCompletedList";

describe("FooterCompletedList component", () => {
    it("component renders", () => {
        render(
            <Provider store={store}>
                <FooterCompletedList />
            </Provider>
            );

        expect(screen.getByText(/Clear completed/i)).toBeInTheDocument();
    });
    
    it("button renders", () => {
        render(
            <Provider store={store}>
                <FooterCompletedList />
            </Provider>
            );
            
        expect(screen.getByRole("button")).toBeInTheDocument();
    })
});