import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../component/ExpenseListItem";
import expenses from "../fixtures/expenses"

test("should render ExpenseListItem correctly", () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]} />)
    expect(wrapper).toMatchSnapshot();
    // open ExpensesListItem.test.js.snap to view the expense properties
})