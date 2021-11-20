import moment from "moment";
import filterReducer from "../../reducers/filters";

test("should setup default values", ()=>{
    const state = filterReducer(undefined, {type: "@@INIT"}); // {type: "@@INIT"} is the initial action in redux store by default
    expect(state).toEqual({
        text:"",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("should setup sortBy to amount", ()=>{
    const state = filterReducer(undefined, {type: "SORT_BY_AMOUNT"});
    expect(state.sortBy).toBe("amount");
})

test("should setup sortBy to date", ()=>{
    const currentstate = {
        text:"",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined,
    };
    const action = {type: "SORT_BY_DATE"};
    const state = filterReducer(currentstate, action);
    expect(state.sortBy).toBe("date")
});

test("should set text filter", ()=>{
    const text = "I am coding";
    const action = { type: "SET_TEXT_FILTER", text };
    const state = filterReducer( undefined, action );
    expect(state.text).toBe(text);
})

test("should set startDate", ()=>{
    const startDate = moment();
    const action = {type: "SET_START_DATE", startDate };
    const state = filterReducer (undefined, action);
    expect(state.startDate).toEqual(startDate)
})
test("should set endDate", ()=>{
    const endDate = moment();
    const action = {type: "SET_END_DATE", endDate };
    const state = filterReducer (undefined, action);
    expect(state.endDate).toEqual(endDate)
})