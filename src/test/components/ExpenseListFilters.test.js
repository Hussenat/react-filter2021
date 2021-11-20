import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../component/ExpenseListFilters";
import { filters, alfilters, alFilters } from "../fixtures/filters";
import moment from "moment";

let setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate, wrapper;

beforeEach(()=>{
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
})

test("should render ExpenseListFilters correctly", ()=>{
    expect(wrapper).toMatchSnapshot()
})

test("should render ExpenseListFilters with alt data correctly", ()=>{
    // setProps() is similar to setState() method
    wrapper.setProps({
        filters: alFilters
    })
    expect(wrapper).toMatchSnapshot()
})

// this is the function we are testing from ExpenseListFilters.js component
// onTextChange = (e) => {
//     this.props.setTextFilter(e.target.value)
// }
test("should handle text change", ()=>{
    const value ="rent";
    wrapper.find("input").simulate("change", {target: { value }});
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

// this is the function we are testing from ExpenseListFilters.js component
// onSortChange = (e)=>{
//     if(e.target.value === "date"){
//         this.props.sortByDate()
//     }else if(e.target.value === "amount"){
//         this.props.sortByAmount()
//     }
// }
test("should sort by date", ()=>{
    const value= "date";
    wrapper.setProps({
        filters: alFilters
    })
    wrapper.find("select").simulate("change", {target: { value }});
    expect(sortByDate).toHaveBeenLastCalledWith()
})

test("should sort by amount", ()=>{
    const value= "amount";
    wrapper.setProps({
        filters: alFilters
    })
    wrapper.find("select").simulate("change", {target: { value }});
    expect(sortByAmount).toHaveBeenLastCalledWith()
})

// This is the function we are testing from ExpenseListFilters.js component
// onDatesChange = ({startDate, endDate})=>{
//     this.props.setStartDate(startDate);
//     this.props.setEndDate(endDate);
// }
test("should handle date change", ()=>{
    const startDate = moment(0).add(4, "years");
    const endDate = moment(0).add(8, "years");
    wrapper.find("DateRangePicker").prop("onDatesChange")({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

// This is the function we are testing from ExpenseListFilters.js component
// onFocusChange = (calendarFocused)=>{
//     this.setState(()=>({calendarFocused}))
// }
test("should handle date change", ()=>{
    const calendarFocused = null; //its can also be startDate or endDate
    wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
    expect(wrapper.state("calendarFocused")).toBe(calendarFocused)
})