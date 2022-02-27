import database from "../firebase/firebase";
//import uuid from "uuid";

//let recap what we have being doing with Action Generator Function
//1. component calls action generator
//2. action generator returns an object
//3. component dispatch action object
//4. redux store changes

//this is what we wil be doing with Asynchronous Action Generator Function
//1. component calls action generator.
//2. action generator returns function
//3. component dispatch action function
//4. function runs (has the ability to change both firebase and redux store)

//Action Generator
// - Action Generator function for expenses array object are as follows;
// ADD_EXPENSE
// export const addExpense = ({
//   description = "",
//   note = "",
//   amount = 0,
//   createdAt = 0,
// } = {}) => ({
//   type: "ADD_EXPENSE",
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt,
//   },
// });

//local Action Generator
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

//asynchronous ADD_EXPENSE Action Generator Function
//- We need to do the following inside startAddExpense() function
//1. create startAddExpense (same call signature as addExpense)
//2. Test startAddExpense with "should add expense to firebase"
//3. Use startAddExpense in AddExpensePage instead of addExpense action generator
//4. Adjusst AddExpensePage test

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    //return keyword beside the database means pass the data return in then() promise method to then() promise method to
    //the test case, without it your test case will not be succesful
    return database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        console.log(ref);

        //dispatch local Action Generator function to redux store
        dispatch(
          addExpense({
            id: ref.key, //using ref.key which is the id from firebase in place of uuid()
            ...expense,
          })
        );
      });
  };
};

// //REMOVE_EXPENSE
// export const removeExpense = ({ id } = {}) => ({
//   type: "REMOVE_EXPENSE",
//   id,
// });

//local remove expense
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

//Asynchronous REMOVE_EXPENSE Action Generator Function
//- We need to do the following inside startAddExpense() function
//1. create removeAddExpense (same call signature as removeExpense)
//2. Test removeAddExpense with "should remove expense to firebase"
//3. Use startRemoveExpense in EditExpensePage instead of removeExpense action generator
//4. Adjusst EditExpensePage test

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database
      .ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

//EDIT_EXPENSE
// export const editExpense = (id, updates) => ({
//   type: "EDIT_EXPENSE",
//   id,
//   updates,
// });

//local edit expense
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

//Asynchronous EDIT_EXPENSE Action Generator Function
//- We need to do the following inside startEditExpense() function
//1. create editAddExpense (same call signature as EditExpense)
//2. Test editAddExpense with "should edit expense to firebase"
//3. Use startEditExpense in EditExpensePage instead of editExpense action generator
//4. Adjust EditExpensePage test

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database
      .ref(`expenses/${id}`)
      .updates(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

//Fetching data from both firebase and redux store
//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

//Asynchronous REMOVE_EXPENSE Action Generator Function
//- We need to do the following inside startSetExpenses() function
//1. fetch all expense data once
//2. parse that data onto an array
//3. dispatch SET_EXPENSE to redux store

export const startSetExpenses = () => {
  return (dispatch) => {
    return database
      .ref("expenses")
      .once("value")
      .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};

// //let add user to the root of the ref() to all async Action Generator Function like this
// // users/${uuid}/expenses

//local Action Generator
// export const addExpense = (expense) => ({
//   type: "ADD_EXPENSE",
//   expense,
// });

// //asynchronous ADD_EXPENSE Action Generator Function
// export const startAddExpense = (expenseData = {}) => {
//   // getState() method is to fetch from redux store
//   return (dispatch, getState) => {
//     const uid = getState().auth.uid; //get the user id from redux store
//     const {
//       description = "",
//       note = "",
//       amount = 0,
//       createdAt = 0,
//     }  = expenseData;
//     const expense = { description, note, amount, createdAt };
//     return (
//       database
//     // .ref("expenses")
//     .ref(`users/${uid}/expenses`)
//     .push(expense)
//     .then((ref)=>{
//       dispatch(
//         addExpense({
//         id: ref.key,
//         ...expense,
//       })
//       );
//     })
//     );
//   };
// };
// //- let test the app by starting the dev-server then insert data to firebase db to view if its works.
// //- click on

// // //REMOVE_EXPENSE
// // export const removeExpense = ({ id } = {}) => ({
// //   type: "REMOVE_EXPENSE",
// //   id,
// // });

// //local remove expense
// export const removeExpense = ({ id } = {}) => ({
//   type: "REMOVE_EXPENSE",
//   id,
// });

// //Asynchronous REMOVE_EXPENSE Action Generator Function
// //- We need to do the following inside startAddExpense() function
// //1. create removeAddExpense (same call signature as removeExpense)
// //2. Test removeAddExpense with "should remove expense to firebase"
// //3. Use startRemoveExpense in EditExpensePage instead of removeExpense action generator
// //4. Adjusst EditExpensePage test

// export const startRemoveExpense = ({ id } = {}) => {
//   return (dispatch) => {
//     return database
//     .ref(`expenses/${id}`)
//     .remove()
//     .then(() => {
//       dispatch(removeExpense({ id }));
//     })
//   }
// }

// //EDIT_EXPENSE
// // export const editExpense = (id, updates) => ({
// //   type: "EDIT_EXPENSE",
// //   id,
// //   updates,
// // });

// //local edit expense
// export const editExpense = (id, updates) => ({
//   type: "EDIT_EXPENSE",
//   id,
//   updates,
// });

// //Asynchronous EDIT_EXPENSE Action Generator Function
// //- We need to do the following inside startEditExpense() function
// //1. create editAddExpense (same call signature as EditExpense)
// //2. Test editAddExpense with "should edit expense to firebase"
// //3. Use startEditExpense in EditExpensePage instead of editExpense action generator
// //4. Adjust EditExpensePage test

// export const startEditExpense = (id, updates) => {
//   return (dispatch) => {
//     return database
//     .ref(`expenses/${id}`)
//     .updates(updates)
//     .then(() => {
//       dispatch(editExpense(id, updates))
//     })
//   }
// }

// //Fetching data from both firebase and redux store
// //SET_EXPENSES
// export const setExpenses = (expenses) => ({
//   type: "SET_EXPENSES",
//   expenses,
// })

// //Asynchronous REMOVE_EXPENSE Action Generator Function
// //- We need to do the following inside startSetExpenses() function
// //1. fetch all expense data once
// //2. parse that data onto an array
// //3. dispatch SET_EXPENSE to redux store

// export const startSetExpenses = ()=>{
//   return (dispatch)=>{
//     return database.ref("expenses").once("value").then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val(),
//         });
//       });
//       dispatch(setExpenses(expenses))
//     })
//   }
// }

//let add user to the root of the ref() to all async Action Generator Function like this
// users/${uuid}/expenses

//- let add user to the root of ref() to all our Async Action Generator Function inorder to change it from .ref("expenses")
//to .ref(`users/${uid}/expenses`)
