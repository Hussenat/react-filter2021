import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboardPage from "../../component/ExpenseDashboardPage";

test("should render ExpenseDashboard correctly", () => {
    const wrapper = shallow( <ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});