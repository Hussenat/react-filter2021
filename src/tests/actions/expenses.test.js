import { startAddExpense, editExpense, addExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expenseData[id] = { description, note, amount, createdAt };
  });

  database
    .ref("expenses")
    .set(expenseData)
    .then(() => done());
});

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc"});
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  })
})

test("should setup edit expense action object", () => {
    const action = editExpense("12sdderrr", {
      note: "I bought new corei7 window laptop",
    });
    expect(action).toEqual({
      type: "EDIT_EXPENSE",
      id: "12sdderrr",
      updates: { note: "I bought new corei7 window laptop" },
    });
  });

  // test("should setup add expense action object with provided values", () => {
  //   const expenseData = {
  //     description: "Rent",
  //     note: "This was last month rent",
  //     amount: 83000,
  //     createdAt: 1222000000,
  //   };
  //   const action = addExpense(expenseData);
  //   expect(action).toEqual({
  //     type: "ADD_EXPENSE",
  //     expense: {
  //       ...expenseData,
  //       id: expect.any(String), //expect.any(String) can be a expect.any(Number) its use to generate a dynamic number or string value
  //     },
  //   });
  // });
  //

test("should setup add expense action object with provided values", () => {
  //   const expenseData = {
  //     description: "Rent",
  //     note: "This was last month rent",
  //     amount: 83000,
  //     createdAt: 1222000000,
  //   };
  //   const action = addExpense(expenseData);
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2], 
  });
});

// Setup asynchronous test case
// we are testing to make sure that the data actually store on firebase and redux store
// this below code is what we are actually testing from actions/expenses
// return database.ref("expenses").push(expense).then((ref) => {
  // dispatch(addExpense({ id: ref.key, ...expense,  }));
// });
// install mock or fake redux store like this
// C:\React-course-projects\xpensify-app7>npm install redux mocks store@1.2.3 
// import configureMockStore from "redux-mock-store";
// import thunk from "redux-thunk"; onto expenses.test.js file and use it
// import startAddExpense()

// setup fake redux store configuration like this
const createMockStore = configureMockStore([thunk]);

test("should add expense to database and redux store", (done) => {
  // we add done onto callback function as an argument becos its async test case, its will force the async request to complete before making assertion which is expect() method test case.
  const store = createMockStore({});
  const expenseData = {
    description: "Rent",
    amount: 8900,
    createdAt: 12000000,
    note: "this was last month rent",
  };
  store.dispatch (startAddExpense(expenseData)) // we have already insert expenseData onto firebase and redux store
  .then(() =>{
    const actions = store.getActions(); // return an array of action dispatch to redux store
    expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData,
      },
    })
    
    // fetch data from firebase by id
    // import database from "../../firebase";
    // database
    //   .ref(`expenses/${actions[0].expense.id}`)
    //   .once('value')
    //   .then((snapshot) => {
    //     expect(snapshot.val()).toEqual(expenseData);
    //     done();
    //   });
  // fetching data from firebase by id using Promise Chaining
  return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  })
  .then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test("should add expense with default values to database and redux store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "",
    amount: 0,
    createdAt: 0,
    note: "",
  };
  store.dispatch (startAddExpense(expenseData)) 
  .then(() =>{
    const actions = store.getActions(); 
    expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData,
      },
    });

  // fetching data from firebase by id using Promise Chaining
  return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  })
  .then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

// test case for fetching setExpenses Action function from redux store
test("should setup setExpense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});

// test case for fetching startsetexpenses action function from firebase
test("should fetch the expense from firebase", (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses,
    });
    done();
  })
})