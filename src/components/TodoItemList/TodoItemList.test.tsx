import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { ITodoItem } from "../../types/types";

import { TodoItemList } from "./TodoItemList";

describe("TodoItemList component", () => {
    it("empty list renders", () => {
        const isShowignList = true;
        const todoList: ITodoItem[] = [];
        render(
            <Provider store={store}>
                <TodoItemList isShowignList={isShowignList} todoList={todoList}/>
            </Provider>
            );

        expect(screen.getByText(/There are no tasks yet/i)).toBeInTheDocument();
    });
    
    it("list not renders if showing false", () => {
        const isShowignList = false;
        const todoList: ITodoItem[] = [];
        render(
            <Provider store={store}>
                <TodoItemList isShowignList={isShowignList} todoList={todoList}/>
            </Provider>
            );

        expect(screen.queryByText(/There are no tasks yet/i)).not.toBeInTheDocument();
    });

    it("list renders with data", () => {
        const isShowignList = true;
        const taskMessage = "some string"
        const todoList: ITodoItem[] = [{message: taskMessage, id: "1111", isCompleted: false}];
        render(
            <Provider store={store}>
                <TodoItemList isShowignList={isShowignList} todoList={todoList}/>
            </Provider>
            );

        expect(screen.getByText(taskMessage)).toBeInTheDocument();
    });
});