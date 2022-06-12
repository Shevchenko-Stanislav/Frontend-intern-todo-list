import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";

import { DropdownMenu } from "./DropdownMenu";
import { TaskInput } from "./TaskInput/TaskInput";

const isShowignTodoList = true;

const toggleTodoList = jest.fn();

describe("DropdownMenu component", () => {
    it("DropdownMenu renders", () => {
        render( 
            <Provider store={store}>
                <DropdownMenu 
                    children={TaskInput}
                    isShowignList={isShowignTodoList}
                    toggleList={toggleTodoList}
                />
            </Provider>
            );
        
        expect(screen.getByRole("button")).toBeInTheDocument();
    }); 
});