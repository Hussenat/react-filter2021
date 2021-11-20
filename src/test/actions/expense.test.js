import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove action object", ()=>{
    const action = removeExpense({id: "1234567fesd"});
    // assert
    // expect(action).toBe({
    //     type: "REMOVE_EXPENSE",
    //     id: "1234567fesd"
    // }) //using toBe() method on object or array will throw error but its ok to use string, number, Boolean
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "1234567fesd"
    })
})
test("should setup remove action object", ()=>{
    const action = editExpense("aa1234ffd", {note: "this is my book"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "aa1234ffd",
        updates: {note: "this is my book"}
    })
})
// test("should setup remove action object", ()=>{
//     const expenseData = {
//         description: "Rent",
//         note: "this was last month rent",
//         amount: 70000,
//         createdAt: 135800,
//     }
//     const action = addExpense(expenseData)
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: { // this is property use in our action/expense for add expense
//             ...expenseData, // 
//             id: expect.any(String), //expect.any(String) or expect.any(Number) are use to generate random string or number
//         }
//     })
// })
test("should setup remove action object", ()=>{
    const expenseData = {
        description: "",
        note: "",
        amount: 0,
        createdAt: 0,
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: { // this is property use in our action/expense for add expense
            ...expenseData, // 
            id: expect.any(String), //expect.any(String) or expect.any(Number) are use to generate random string or number
        }
    })
})