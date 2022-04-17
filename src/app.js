import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";
// import "./playground/promises";

// const store = configureStore();
// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );

// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(jsx, document.getElementById("app"));
//     hasRendered = true;
//   }
// };

// ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // console.log("uid", user.uid);
//     store.dispatch(login(user.uid)); //dispatching login
//     store.dispatch(startSetExpenses()).then(() => {
//       renderApp();
//       if (history.location.pathname === "/") {
//         history.push("/dashboard");
//       }
//     });
//   } else {
//     store.dispatch(logout()); //dispatching logout
//     renderApp();
//     history.push("/");
//   }
// });

// Styling Expensify App
// - Styling Login Page
// - copy bg.jpg and loader.gif onto public/images folder 
// - next is to style LoginPage component by opening it
// - open styles/styles.scss
// - create _box-layout.scss partial file inside styles/components folder
// @import "./components/box-layout"; onto styles/styles.scss file remember that underscrore _ and extension .scss are excluded when importing your partial file onto style.scss
// - open _box-layout.scss partial file for setting up.
// - create nested div tags inside root div tags in LoginPage.js then add h1 and p tags onto nested div
// - add this class selector <div className="box-layout"> onto LoginPage.js file
// - open styles/base/_base.scss then add the following

// Styling Buttons
// Challenge Area
// 1. create new files called _button.scss partial file
// 2. add button class selector onto _button.scss file with color and background properties
// 3. use the class selector on button tags in Login button
// Solution to challenge Area
// 1. create _button.scss partial file inside styles/components folder and @import "./components/button"; onto styles.scss file
// 2. setup _button.scss partial file
// 3. use .button class selector on button tags in LoginPage.js file
// - login onto the app inorder to add more style onto the app.
// - open src/components/Header.js component
// - remove create Expense link on Header.js component, switch NavLink tags to Link and modify Header.js component
// @import "./components/header"; onto styles.scss file
// setup _header.scss partial file
// - create _content-container.scss partial file
// - add nested div inside header tags in Header.js component then use content-container class selector inside the nested div tags
// - add inner nested div tags inside the nested div with header__content class selector

// Styling Summary Area
// - open components/ExpenseSummary.js component for styling
// - create _page-header.scss partial file onto style/components folder
// @import "./components/page-header"; onto style.scss
// <div className="page-header"> class selector onto root div tags in ExpenseSummary.js
// - craete a nested div inside the root div tags with a class selector content-container for justifying the content
// - add page-header __title class selector onto h1 tags and add span tags onto h1 tags inorder to bolder some dynamic content
// import { Link } from "react-router-dom"
//<Link className="button" to="/create">
//  Add Expense
//</Link> 
// apply className="button button--link" class selector onto the button div tags in Header.js component.

// Styling List Filters
// - open ExpensesListFilters.js component for styling.
// - reuse content-container class selector on ExpenseListfilters.js root div tags
// - create a nested div tags inside the root div tags then add three div tags inside the nested div tags in the nested div then copy each input field onto inner nested div tag  
// - add <div className="input-group"> class selector onto the nested div tag
// <div className="input-group__item"> onto each inner nested div tags in ExpenseFilters.js component.
// create _input-group.scss partial file in styles/components folder
// @import "./components/input-group"; onto style.scss

// Styling Input
// - create _inputs.scss partial file in style.scss for styling inputs
// @import "./components/inputs"; onto styles.scss file
// - use test-input class selector on the input fields in ExpenseFilters.js file
// - add universal selector onto thye file styles/_base.scss like this
// *{
//  box-sizing: border-box;
//}
// use select class selector on the select dropdown
// - open ExpenseForm.js component for styling of the input field
// - apply text-input class selector onto the inputs fields on ExpenseForm.js component
// - apply textarea class selector onto the textarea tags on ExpenseForm.js component

// Styling ExpenseForm
// - open AddExpensePage.js component then add nested div tags onto to to the root tags with the class selector of 
//page-header
//- open ExpenseForm.js component, move the error message into form tags in the error message area inside ExpenseForm.js 
//component.
//- create _form.scss partial file in styles/components folder
//- @import "./components/form"; onto styles/styles.scss file
//- setup _form.scss partial file
//- add content-container class selector onto a div tags, wrap ExpenseForm component onto that div in AddExpensePage.js component

// Challenge Area
// Open EditExpensePage.js component then do the following
// 1. Setup page header
// 2. Setup content contain for the form and remove the button
// 3. add modifier on button and button--secondary (bg of #888)
// - add nested div onto root div in EditExpensePage.js component with content container class selector
// - add more style on EditExpensePage.js component
// - open ExpenseForm.js compoent to change Add Expense button name to Save Expense 
// - change the button name from Remove to Remove Expense on Edit ExpensePage.js component

// Styling Expense List: Part I
// - open ExpenseList.js Component
// - add content-container class selector onto ExpenseList component
// - add nested div inside the root div with three inner nested div tags, one div for mobile view and the other div tags  for desktop view
// - create _visibility.scss partial file for styling ExpenseList.js component
// @import "./components/visibility";
// - setup _visibility.scss partial file
// - create _list.scss partial file in style/styles.scss
// @import "./components/list";
// setup _list.scss file
// - use the class selector of _list partial file in ExpenseList.js component
// - open ExpenseListItem.js component where individual item on the dashboard live for modification

// Styling Expenses List: Part II
// - add list-body class selector onto div to wrap {props.expense} in ExpenseList.js
// component inorder not to allow the list data touch the footer of the browser.

// Adding loader
// - styling of loading screen which will display for a very little time before displaying the main app.
// - open app.js file where we have our loading rendering then comment
// firebase.auth().onAuthStateChange((user)) inorder to manually work on loading page

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // console.log("uid", user.uid);
    store.dispatch(login(user.uid)); //dispatching login
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout()); //dispatching logout
    renderApp();
    history.push("/");
  }
});

// change this ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));
// to this
// ReactDOM.render(<LoadingPage />, document.getElementById("app"));
// - create LoadingPage.js file inside components folder
// - setup LoadingPage.js component
// import LoadingPage from "./components/LoadingPage"; onto app.js file.
// - create _loader.scss partial file onto style.components folder
// @import "./components/loader"; onto style/style.scss
// - setup _loader.scss partial file
// uncomment firebase.auth().onAuthStateChange((user)) inorder to render the app on the browser since we have made alot of changes to the app 
// let run the jest test suite like this
// C:\react-course-projects\xpensify-app8>yarn test --watch
// - almost all the changes are in snapshot test, then press u to update snapshot
// - let create test case for LoadingPage.js component
// - create LoadingPage.test.js file inside tests/component folder
// - setup the test case for LoadingPage.test.js file
// - run the jest test suite

// Babel Polyfill
// - Babel polyfill will allow your app to run in wider range of browsers and browser versions
// - on some browser our app will crash becos we are using some new like some array methods such includes method etc
// - install babel polyfill like this
// C:\react-course-projects\xpensify-app8>yarn add babel-polyfill@6.26.0
//  - open webpack.config.js file for modification of entry point like this
// change entry: "./src/app.js",
// to this entry: ["babel-polyfill", "./src/app.js"],
// with this modification babel polyfill allow wide range of browser to access our app becos all the es6 and es7 features that we have being using, babel polyfill we give support to low version browser to gain access to our app.
// startup dev-server

// Final Deployment
//- push to both local and remote github repository
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git status
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git add .
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git commit -m "Add Expense Styles"
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git push https://github.com/Hussenat/react-filter2021.git
//the above command will push to remote git repository
//C:\ComputerD\react-course-projects032021\xpensify-app7>git push heroku master
//the above command will redeploy your app to heroku web hosting site
//- C:\ComputerD\react-course-projects032021\xpensify-app7>heroku open
//its will open your web on this url https://react-project26.herokuapp.com/

// - create a boilerplate from xpensify-app8 for your next personal project
// - duplicate xpensify-app8 to xpensify-app9-boilerplate
// open in ur file explorer
// - open src/action folder remove expenses and filetrs files
// - open src/components folder remove AddExpensePage.js, EditExpensePage.js, ExpenseForm.js, ExpenseList.js, ExpenseListFilters.js, ExpenseSummary.js
// - open remove playground folder
// - open reducers folder remove expenses and filters
// - open selectores and remove all files in it
// - open test folders, action folder remove expense.test.js and filters.test.js
// - test/components remove AddExpensesPage.test.js till the last which is ExpenseSummary.test.js
// - test/fixtures remove expenses and filters files in it
// - test/reducers remove expenses.test and filters.test file in it
// - tests/selectors remove expense-total.test and expenses.test
// - nest is to get the xpensify-app9-boilerplate working by opening xpensify-app9-boilerplate in vscode then navigate to this folder on the terminal