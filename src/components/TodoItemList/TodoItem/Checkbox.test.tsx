import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

import { Checkbox } from "./Checkbox";

describe("Checkbox component", () => {
    const id = "1111";
    const isCompleted = false;
    const message = "some string"
    it("Checkbox renders", () => {
        render(
            <Provider store={store}>
                <Checkbox id={id} isCompleted={isCompleted} message={message}/>
            </Provider>
            );

        expect(screen.getByRole("button")).toBeInTheDocument();
    });
});