// Open webpack.config.js file then change the entry point from
//  entry:"./src/playground/redux-101.js", to  entry:"./src/playground/redux-expensify.js",
// restart the dev-server
import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// This is the demo state for ExpensifyApp
const demoState = {
    expenses: [
        {
            id: "3432shdsauhssiojjasgy",
            description: "January Rent",
            note: "This was the final payment for that address",
            amount: 3400,
            createdAt: 0,
        },
    ],
    filters: {
        text: "rent",
        sortBy: "amount", //date
        startDate: undefined,
        endDate: undefined,
    },
};

// Working with multiple reducers
// - Action Generator function for expenses array object are as follows;
// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// - Action Generator function for filters object are as follows;
// SET_TEXT_FILTER
// SORT_BY_DATE
// SET_START_DATE
// SET_END_DATE

// // Expenses Reducer
// const expensesReducerDefaultState = [demoState];
// // const expensesReducerDefaultState = [];
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//     switch (action.type) {
//         default:
//             return state
//     }
// };

// // Store
// const store = createStore(expensesReducer);

// // view store on the browser console
// console.log(store.getState());

// - We are going to create two reducers one to handle expenses array object and the other to handle the filter object the combine two reducers to change the redux store.

// using conbineReducers to combine multiple reducers to create a single redux store
// Expenses Reducer
// const expensesReducerDefaultState = [];
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//     switch (action.type) {
//         default:
//             return state
//     }
// };

// // Filter reducer
// const filtersReducerDefaultState = {
//     text: "rent",
//     sortBy: "amount", //date
//     startDate: undefined,
//     endDate: undefined,
// };
// const filterReducer = (state = filtersReducerDefaultState, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// };

// // Store
// const store = createStore(
//     combineReducer({
//         expenses: expensesReducer, // The key is the root state name and value is the reducer
//         filters: filterReducer,
//     })
// );

// // view store on the browser console
// console.log(store.getState()); 

// using combineReducer with expense and filter object
// Expense reducer 
// const expensesReducerDefaultState = [];
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//     switch (action.type) {
//         case "ADD_EXPENSE":
//             return state.concat(action.expense);
//         default:
//             return state
//     }
// };

// // Filter reducer
// const filtersReducerDefaultState = {
//     text: "rent",
//     sortBy: "amount", //date
//     startDate: undefined,
//     endDate: undefined,
// };
// const filterReducer = (state = filtersReducerDefaultState, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// };

// // Store
// const store = createStore(
//     combineReducers({
//         expenses: expensesReducer, // The key is the root state name and value is the reducer
//         filters: filterReducer,
//     })
// );

// // view store on the browser console
// // console.log(store.getState()); 

// // - Installing uuid for generating expense id like this
// // C:\React-course-projects\xpensify-app3>yarn add uuid@3.1.0
// // import uuid from "uuid";

// // Action Generator 
// // - Action Generator function for expense array object are as follows;
// // ADD_EXPENSE
// const addExpense =({description="", note="", amount=0, createdAt=0}={})=>({
//     type: "ADD_EXPENSE",
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt,
//     },
// });

// // view store on the browser console
// store.subscribe(() => {
//     console.log(store.getState());
// });

// // dispatching Action object to reducer 
// store.dispatch(
//     addExpense({
//         description: "Rent",
//         amount: 200,
//         note: "Payment of rent at the end of this month",
//     })
// );
// store.dispatch(
//     addExpense({
//         description: "Salary",
//         amount: 400000,
//     })
// );

// ES6 Spread Array Operator in Reducers
// Expenses reducers
// const expensesReducerDefaultState = [];
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//     switch (action.type) {
//         case "ADD_EXPENSE":
//             // return state.concat(action.expense);
//             return [...state, action.expense]; //using Spread Operator
//         case "REMOVE_EXPENSE":
//             // return state.filter(({ id }) => {
//             //     return id !== action.id;
//             // });
//             //shorthand
//             return state.filter(({ id }) => id !== action.id); 
//         default:
//             return state
//     }
// };

// // Filter reducer
// const filtersReducerDefaultState = {
//     text: "rent",
//     sortBy: "amount", //date
//     startDate: undefined,
//     endDate: undefined,
// };
// const filterReducer = (state = filtersReducerDefaultState, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// };

// // Store
// const store = createStore(
//     combineReducers({
//         expenses: expensesReducer, // The key is the root state name and value is the reducer
//         filters: filterReducer,
//     })
// );

// // Action Generator 
// // - Action Generator function for expense array object are as follows;
// // ADD_EXPENSE
// const addExpense =({description="", note="", amount=0, createdAt=0}={})=>({
//     type: "ADD_EXPENSE",
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt,
//     },
// });

// // REMOVE_EXPENSE
// const removeExpense = ({ id } = {}) => ({
//     type: "REMOVE_EXPENSE",
//     id,
// });

// // view store on the browser console
// store.subscribe(() => {
//     console.log(store.getState());
// });

// // dispatching Action object to reducer 
// // store.dispatch(
// //     addExpense({
// //         description: "Rent",
// //         amount: 200,
// //         note: "Payment of rent at the end of this month",
// //     })
// // );
// // store.dispatch(
// //     addExpense({
// //         description: "Salary",
// //         amount: 400000,
// //     })
// // );

// // Fetch data from the store - which return Action Object from the redux store
// const expenseOne = store.dispatch(
//     addExpense({
//         description: "Rent",
//         amount: 200,
//         note: "Payment of rent at the end of this month",
//     })
// );
// const expenseTwo = store.dispatch(
//     addExpense({
//         description: "Salary",
//         amount: 400000,
//     })
// );
// // console.log(expenseOne)
// // console.log(expenseTwo)
// // console.log(expenseOne.expense.id);
// // console.log(expenseOne.expense.note);

// // Remove individual expense array of object from the redux store
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// Spread Object
const user = {
    name: "Jide",
    age: 18,
}
// console.log(user);
// console.log({ ...user });
// We need to install a depency before we can use spread operator on object like this
// C:\React-course-projects\xpensify-app3>yarn add babel-plugin-transform-object-rest-spread@6.23.0
// open .babelrc file inorder to add the library "transform-object-rest-spread" like this
// "plugins": ["transform-class-properties", "transform-object-rest-spread"] 
// restart the dev-server to view console.log({ ...user });
// console.log({ ...user });

// add new property onto user object like this
// console.log({ ...user, location: "Lagos Island" });

// override the existing property like this
// console.log({ ...user, location: "Lagos Island", age:32 });

// reverting overriding
// console.log({ age:32, ...user, location: "Lagos Island", });

// ES6 Spread Object Operator in Reducers
// Expenses reducers on EditExpense
// const expensesReducerDefaultState = [];
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//     switch (action.type) {
//         case "ADD_EXPENSE":
//             // return state.concat(action.expense);
//             return [...state, action.expense]; //using Spread Operator
//         case "REMOVE_EXPENSE":
//             return state.filter(({ id }) => id !== action.id); 
//         case "EDIT_EXPENSE":
//             return state.map((expense) => {
//                 if (expense.id === action.id) {
//                     return {
//                         ...expense,
//                         ...action.updates
//                     };
//                 } else{
//                     return expense;
//                 }
//             })
//         default:
//             return state
//     }
// };

// // Filter reducer
// const filtersReducerDefaultState = {
//     text: "rent",
//     sortBy: "amount", //date
//     startDate: undefined,
//     endDate: undefined,
// };
// const filterReducer = (state = filtersReducerDefaultState, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// };

// // Store
// const store = createStore(
//     combineReducers({
//         expenses: expensesReducer, // The key is the root state name and value is the reducer
//         filters: filterReducer,
//     })
// );

// // Action Generator 
// // - Action Generator function for expense array object are as follows;
// // ADD_EXPENSE
// const addExpense =({description="", note="", amount=0, createdAt=0}={})=>({
//     type: "ADD_EXPENSE",
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt,
//     },
// });

// // REMOVE_EXPENSE
// const removeExpense = ({ id } = {}) => ({
//     type: "REMOVE_EXPENSE",
//     id,
// });

// // EDIT_EXPENSE
// const editExpense = ( id, updates )=> ({
//     type: "EDIT_EXPENSE",
//     id,
//     updates,
// })

// // view store on the browser console
// store.subscribe(() => {
//     console.log(store.getState());
// });

// // Fetch data from the store - which return Action Object from the redux store
// const expenseOne = store.dispatch(
//     addExpense({
//         description: "Rent",
//         amount: 200,
//         note: "Payment of rent at the end of this month",
//     })
// );
// const expenseTwo = store.dispatch(
//     addExpense({
//         description: "Salary",
//         amount: 400000,
//     })
// );
// // console.log(expenseOne)
// // console.log(expenseTwo)
// // console.log(expenseOne.expense.id);
// // console.log(expenseOne.expense.note);

// // Remove individual expense array of object from the redux store
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// // Edit individual expenses array object from the redux store
// // we are going to edit expenseTwo since we have remove expenseOne
// // pass in the id and update individual expense array object like this
// store.dispatch(
//     editExpense(expenseTwo.expense.id, {
//         description: "Laptop",
//         amount: 120000,
//         note: "Bought new laptop"
//     })
// )

// Expenses reducers on EditExpense
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            // return state.concat(action.expense);
            return [...state, action.expense]; //using Spread Operator
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id); 
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else{
                    return expense;
                }
            })
        default:
            return state
    }
};

// Filter reducer
const filtersReducerDefaultState = {
    text: "",
    sortBy: "amount", //date
    startDate: undefined,
    endDate: undefined,
};
const filterReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text,
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount",
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date",
            };
        case "SORT_START_DATE":
            return {
                ...state,
                startDate: action.startDate,
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate,
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate,
            };
        default:
            return state;
    }
};

// Store
const store = createStore(
    combineReducers({
        expenses: expensesReducer, // The key is the root state name and value is the reducer
        filters: filterReducer,
    })
);

// Action Generator 
// - Action Generator function for expense array object are as follows;
// ADD_EXPENSE
const addExpense =({description="", note="", amount=0, createdAt=0}={})=>({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt,
    },
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id,
});

// EDIT_EXPENSE
const editExpense = ( id, updates )=> ({
    type: "EDIT_EXPENSE",
    id,
    updates,
})

// - Action Generator function for expense array object are as follows;
// SET_TEXT_FILTER
const setTextFilter = (text="") => ({
    type: "SET_TEXT_FILTER",
    text,
});
// SORT_BY_DATE
const sortByDate = () =>({
    type: "SORT_BY_DATE",
});
// SORT_BY_AMOUNT
const sortByAmount = () =>({
    type: "SORT_BY_AMOUNT",
});
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate,
});
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate,
});

// view store on the browser console
// combine expenses array object with filter object
store.subscribe(() => {
    const state = store.getState() // fetching the content of the redux store
    const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// Get visible expenses
const getVisibileExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense)=>{
        const textMatch = expense.description
        .toLowerCase().includes(text.toLowerCase());
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;

        return textMatch && startDateMatch &&endDateMatch;
        // using compared function for sorting array of object
    })
    .sort((a, b)=>{
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// Dispatching Action object to Expense
  store.dispatch(
    addExpense({
        description: "Rent",
        amount: 340,
        note: "Payment of rent at the end of this month",
        createdAt: 1000,
    })
);
 store.dispatch(
    addExpense({
        description: "Salary",
        amount: 400,
        createdAt: -2000
    })
);
store.dispatch(
    addExpense({
        description: "Payment for rent",
        amount: 100,
        createdAt: -3000
    })
);

// Dispatching Action object to Filter
// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter(""));
store.dispatch(setStartDate(125));
// store.dispatch(setStartDate()); // its will return the initial value which is undefined
// store.dispatch(setEndDate(-1125));
// store.dispatch(setEndDate()); // its will return the initial value which is undefined
// store.dispatch(sortByDate("date"));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());