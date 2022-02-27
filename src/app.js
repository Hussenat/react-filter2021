import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase.js";
// import "./playground/promises.js";

//store
const store = configureStore();
// console.log("testing........");
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
//- open each file that makeup the expensify app to remove unneceessary codes
// C:\react-course-projects032021\xpensify-app7>npm run dev-server
//C:\react-course-projects032021\xpensify-app7>npm run test --watch

//firebasen database
//perfoming crude (Creating Updating Deleting) operation with firebase database.

//Getting Firebase
//- go to firebase.google.com to Login or signup for firebase db
//- you must sign-up with your google account
//- clock on Go to Console
//- click on Add Project
//- Enter your project name: react-expensify2022 and click on Continue Button
//- click on Create project
//- our focus on firebase are Authentication(whcih verifies the user) and Realtime Database
//- firebase database is a no sql database that look like javascript obect which contain properties and values
//- click Realtime Database, click on Create button
//- click on Rules tab inorder to change the rules from false to true

//- cllck on Publish to save the new rules setting
//- click on Project Overview
//- go to Get Started by adding Firebase to your app then click on web </> icon
//- Register app: react-expensify2022

//- click on Register app button
//- Click on Continue to console
//- click on icon beside project overview then click on Project setting to view firebase configuration settings
//- install firebase like this
//C:\react-course-projects032021\xpensify-app7>npm install firebase@4.2.0
//- create a folder called firebase inside src
//- create firebase.js file inside src
//- setup firebase.js file by doing the following

// import * as firebase from "firebase"
// const firebaseConfig = {
//   apiKey: "AIzaSyAgCJ_-GG5_nDlqTNfNvE9xiqr5moeBzfc",
//   authDomain: "react-expensify2022.firebaseapp.com",
//   databaseURL: "https://react-expensify2022-default-rtdb.firebaseio.com",
//   projectId: "react-expensify2022",
//   storageBucket: "react-expensify2022.appspot.com",
//   messagingSenderId: "910557290398",
//   appId: "1:910557290398:web:948342a465ba7d0687408f",
//   measurementId: "G-TKWPGKTKFZ"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig)

//ES6 Promises
//- Promises allow us to do something after a long running task
//- create promises.js file inside src/playground folder
//- import "./playground/promises" onto app.js to view the file in the browser

//Promises with Firebase
// - open firebase/firebase.js file to implement promise with firebase.

//Removing Data from firebase
// - open firebase/firebase.js file to implement remove data from firebase.

//Updating Data from firebase
/// - open firebase/firebase.js file to implement update data with firebase.

//Fetching Data from firebase
// -  open firebase/firebase.js file to implement fetching data with firebase.

//Array Data in Firebase: Part I
// - open firebase/firebase.js file to implement update array with firebase.

//Array Data in Firebase: Part II
// - open firebase/firebase.js file to implement update array with firebase.

//Firebase with Redux
//- inorder to connect firebase with redux store we need to implement Asynchronous Redux Action
//- when someone dispatch asynchronous action we shall update both edux store and firebase this will update the user
// interface(UI) as well

//Asynchronous Redux Action
//- integrate all the fiirebase methods we have learnt onto redux store which are CRUDE operation
//- open src/components/actions/expenses.js inorder to convert the Action Generator Functions to Asynchronous Action
//Generation functions
// install redux-thunk like this
// C:\react-course-projects032021\xpensify-app7>npm install redux-thunk@2.2.0
//- the above redux-thunk library enable us to return function in our local Action Generator
//Function instead of object
//- open src/store/configureStore.js file for modification
//- import the following onto configureStore.js file
//import { applyMiddleware, compose } from "redux";
// change  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//to this
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
// composeEnhancers(applyMiddleware(thunk))
//- open firebase/firebase.js file for exporting some predefined methods for the purpose of reusing in other files like this
// export { firebase, googleAuthProvider, database as default };
//- open action/expenses.js file for setting up Asynchronous Action Generator Function
// open components/AddExpensePage.js component to dispatch startAddExpense() Action Generator Function instead of AddExpense() Action Generator Function
// open firebase database then clear or delete the data inside it.
// startup dev-server
// - add expense by clicking Create Expense tab
// check both the redux and firebase db

// Testing Async Redux Actions 1
// since we have change the action Generator Function from addExpense() to startAddExpense() which is asynchronous function we have to modify AddExpense.js component.
// startup the jest test suit like this
// C:\React-course-projects\xpensify-app7>npm test -- --watch
// - you will see src file failing becos of the change we did to src/components/AddExpensePage.js file 
// its throw this TypeError:_this.props.startAddExpense is not a function.
// open src/tests/actions/AddExpensePage.test.js file then change all the addExpense() Action Function to startAddExpense() Action Function
// open src/tests/actions/expenses.test.js file 
// import expenses from "../fixtures/expenses" onto expenses.test.js 
// modify this test case "should setup add expense action object with provided values" in expenses.test.js file
// - remove this test case "should setup and expense action object with default value"

// Testing Async Redux Action 2
// - still on setting up asynchronous test case in tests/actions/expenses.test.js file
// "should add expense with default values to database and redux store"

// Creating a Seperate Test Database
// - open to see that all the async test case is writing directly to the firebase app database and we don't want that we need to craete a separate firebase database.
// - install cross-env library for setting environment variable for all operating system like this
// C:\React-course-projects\xpensify-app7>npm install --dev cross-env@5.0.5
// - open package.json file to add cross-env environment variable onto test property of scripts object 
// from "test": "jest --config=jest.config.json", to "test": "cross-env NODE_ENV=test jest --config=jest.config.json",
// - the above configuration setting means we are using cross-env NODE_ENV=test environment
// variable for testing purpose only. This environment variable will be set for us by default in production on heroku cloud hosting service.
// - let create two environment files in the root folder of the application; one for testing and the second for the development purpose. the files names are .env.test and .env.development.
// - copy all the properties and values inside firebaseConfig object onto the two files like this
// apiKey: "AIzaSyAuz1K-fcKV90XFbiWS9tqpnM4_YjJQGwU",
//     authDomain: "xpensify0801.firebaseapp.com",
//     databaseURL: "https://xpensify0801-default-rtdb.firebaseio.com",
//     projectId: "xpensify0801",
//     storageBucket: "xpensify0801.appspot.com",
//     messagingSenderId: "679359801620",
//     appId: "1:679359801620:web:a5f5a97d0f6a3f675cfa01",
//     measurementId: "G-BXCZV2YXBP"
// // convert the above properties and values into this
// FIREBASE_API_KEY = AIzaSyAuz1K-fcKV90XFbiWS9tqpnM4_YjJQGwU
//     FIREBASE_AUTH_DOMAIN = xpensify0801.firebaseapp.com
//     FIREBASE_DATABASE_URL = https://xpensify0801-default-rtdb.firebaseio.com
//     FIREBASE_PROJECT_ID = xpensify0801
//     FIREBASE_STORAGE_BUCKET = xpensify0801.appspot.com
//     FIREBASE_MESSAGING_SENDER_ID = 679359801620
//     FIREBASE_APP_ID = 1:679359801620:web:a5f5a97d0f6a3f675cfa01
//     FIREBASE_MEASUREMENT_ID = G-BXCZV2YXBP 
// - copy the content of .env.development file onto .env.test file then change properties values to point to different database.
// - go to firebase.google.com to create a new firebase database for testing purpose.
// - go to firebase Home Page by clicking on Firebase on the sidebar then click on Add Project after creating db, click on Realtime Database, click on create Database.
// - click on Rules tab to grant access to all users by changing read and write properties to true then click on Publish Button.
// - go back to firebase Home Page by clicking on Firebase then click on </> web inorder to copy 
// firebase configuration setting and paste it on .env.test and set the value onto the properties
// - install dotenv library to read the environment file like this
// C:\React-course-projects\xpensify-app7>npm install --dev dotenv@4.0.0
// open webpack.config.js file to setup the environment variable.
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// if (process.env.NODE_ENV === 'test') {
//   require('dotenv').config({ path: '.env.test' });
// } else if(process.env.NODE_ENV === 'development') {
//   require('dotenv').config({ path: '.env.development' });
// }
// const webpack = require('webpack'); onto webpack.config.js file
// modify plugins property in webpack.config.js file inorder to be able to use the firebaseConfig setup in both environment files in bundle.js like this
// plugins:  [ 
//   CSSExtract,
//   new webpack.DefinePlugin({
//     "process.env.FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY),
//     "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
//     "process.env.FIREBASE_DATABASE_URL": JSON.stringify(process.env.FIREBASE_DATABASE_URL),
//     "process.env.FIREBASE_PROJECT_ID": JSON.stringify(process.env.FIREBASE_PROJECT_ID),
//     "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
//     "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
//     "process.env.FIREBASE_APP_ID": JSON.stringify(process.env.FIREBASE_APP_ID),
//     "process.env.FIREBASE_MEASUREMENT_ID": JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
//   })
//  ],
// next is to use the above environment variables in firebase/firebase.js file like this
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };
// open tests/setupTest.js for modification inorder to allow our test data to work by adding this line of code
// import Dotenv from "dotenv";
// Dotenv.config({ path: '.env.test' });
// - completely delete both development and test database data.
// - startup jest test suit
// - view both db, you will see the db populated with dummy data while the development db has not data

// Heroku Environment Variable
// - we have already setup environment variable on testing and development.
// - next is to setup environment variable in production on heroku command line.
// NODE_ENV is automatically set to product on heroku
// - we need to take all the variable setup in .env.development and set it up on heroku for the purpose of production.
// C:\React-course-projects\xpensify-app7>heroku config
// the above command print out all the environment variables on heroku but currently we don't have any environment variables, make sure ur internet is on while executing d above command
// - setup firebaseConfig on heroku like this
// C:\React-course-projects\xpensify-app7>heroku --version
// C:\React-course-projects\xpensify-app7>heroku config -a react-project26
// C:\React-course-projects\xpensify-app7>heroku config:set -a react-project26 FIREBASE_API_KEY=AIzaSyAuz1K-fcKV90XFbiWS9tqpnM4_YjJQGwU FIREBASE_AUTH_DOMAIN=xpensify0801.firebaseapp.com FIREBASE_DATABASE_URL=https://xpensify0801-default-rtdb.firebaseio.com FIREBASE_PROJECT_ID=xpensify0801 FIREBASE_STORAGE_BUCKET=xpensify0801.appspot.com FIREBASE_MESSAGING_SENDER_ID=679359801620 FIREBASE_APP_ID=1:679359801620:web:a5f5a97d0f6a3f675cfa01 FIREBASE_MEASUREMENT_ID=G-BXCZV2YXBP
// C:\React-course-projects\xpensify-app7>heroku config -a react-project26
// make sure to add space within the variable and properties
// C:\React-course-projects\xpensify-app7>git status
// you will see some files that you don't want to push to github, they are .env.test and .env.development
// - open gitignore file to ignore those two files from github, then run git status again so as not to see the two files