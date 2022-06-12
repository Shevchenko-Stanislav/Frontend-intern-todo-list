import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

import { TaskInput } from "./TaskInput";

describe("TaskInput component", () => {
    it("component renders", () => {
        render(
            <Provider store={store}>
                <TaskInput />
            </Provider>
            );
        
        expect(screen.getByPlaceholderText("What needs to be done?")).toBeInTheDocument();
    }); 
});