import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";
import moment from "moment";

let setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate, wrapper;

beforeEach(() => {
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();

  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt data correctly", () => {
   wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "rent";
  wrapper.find("input").simulate("change", { target: { value } });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilters,
  });
  wrapper.find("select").simulate("change", { target: { value } });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  const value = "amount";
  wrapper.find("select").simulate("change", { target: { value } });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date change", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");
  wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle date focus change", () => {
  const calendarFocused = null; //its can also be startDate or endDate
  wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
