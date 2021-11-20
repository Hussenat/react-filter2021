import React from "react";
import { shallow, Shallow } from "enzyme"
import { EditExpensePage } from "../../component/EditExpensePage";
import expenses from "../fixtures/expenses";


//these are function we are testing from EditExpensePage component
// onSubmit= (expense) => {
//     this.props.editExpense(this.props.expense.id,expense) 
//     this.props.history.push("/");
//  }
// onRemove = () => {
//     this.props.removeExpense({id: this.props.expense.id}) 
//     this.props.history.push("/");
//  }


let editExpense, removeExpense, history, wrapper; //creating variables for editExpense, removeExpense, history

beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()}
    wrapper = shallow(
    <EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense} 
        history={history} 
        expense={expenses[1]} 
    />
    )
})

test ("should render EditExpensePage", ()=>{
    expect(wrapper).toMatchSnapshot();
})

test("should handle editExpense on submit",()=>{
    wrapper.find("ExpenseForm").prop("onSubmitForm")(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

test("should handle removeExpense on removing expense",()=>{
    wrapper.find("button").simulate("click");
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[1].id})
})