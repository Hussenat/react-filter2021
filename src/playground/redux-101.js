// console.log("redux-101")

import { bindActionCreators, createStore } from "redux";

// const store = createStore((state = { count: 0 }) => {
//     return state;
// });

// // how to fetch value from redux store
// console.log(store.getState());

// Passing Actions object as the 2nd argument of the redux store like this
// const store = createStore((state = { count: 0 }, action) => {
//     if (action.type === "INCREMENT") {
//         return {
//             // returning new state object
//             count: state.count + 1,
//         };
//     }else {
//         return state;
//     }
// });
// console.log(store.getState());

// // how to fetch value from redux store
// store.dispatch({
//     type: "INCREMENT",
// });
// store.dispatch({
//     type: "INCREMENT",
// });
// store.dispatch({
//     type: "INCREMENT",
// });
// console.log(store.getState());

// let switch the if statement to switch case
// const store = createStore((state = { count: 0 }, action) => {
//     switch(action.type){
//         case "INCREMENT":
//             return {
//                 count: state.count + 1,
//             };
//         case "DECREMENT": 
//             return {
//                 count: state.count - 1,
//             }
//         case "RESET":
//             return {
//                 count: 0
//             }
//         default:
//             return state;
//     }
// })
// console.log(store.getState());

// // how to fetch value from redux store
// store.dispatch({
//     type: "INCREMENT",
// });
// store.dispatch({
//     type: "INCREMENT",
// });
// store.dispatch({
//     type: "DECREMENT",
// });
// store.dispatch({
//     type: "INCREMENT",
// });

// store.dispatch({
//     type: "RESET",
// });
// console.log(store.getState());

// Subscribing and Dynamic Actions
// Subscribe is use for watching changes
// const store = createStore((state = { count: 0 }, action) => {
//     switch(action.type){
//         case "INCREMENT":
//             return {
//                 count: state.count + 1,
//             };
//         case "DECREMENT": 
//             return {
//                 count: state.count - 1,
//             }
//         case "RESET":
//             return {
//                 count: 0
//             }
//         default:
//             return state;
//     }
// })
// store.subscribe(()=>{
//     console.log(store.getState());
// })

// // const unsubscribe = store.subscribe(()=>{
// //     console.log(store.getState());
// // })

// // how to fetch value from redux store
// store.dispatch({
//     type: "INCREMENT",
// });
// store.dispatch({
//     type: "INCREMENT",
// });
// // unsubscribe()
// store.dispatch({
//     type: "DECREMENT",
// });
// store.dispatch({
//     type: "INCREMENT",
// });

// store.dispatch({
//     type: "RESET",
// });

// Dispatch Dynamics Actions
// const store = createStore((state = { count: 0 }, action) => {
//     switch(action.type){
//         case "INCREMENT":
//             const incrementBy = 
//                 typeof action.incrementBy === "number"? action.incrementBy : 1;
//             return {
//                 count: state.count + incrementBy,
//             };
//         case "DECREMENT": 
//             const decrementBy = 
//                 typeof action.decrementBy === "number"? action.decrementBy : 1;
//             return {
//                 count: state.count - decrementBy,
//             }
//         case "RESET":
//             return {
//                 count: 0
//             }
//         default:
//             return state;
//     }
// })
// store.subscribe(()=>{
//     console.log(store.getState());
// })

// // how to fetch value from redux store
// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5,
// });
// store.dispatch({
//     type: "INCREMENT",
// });
// store.dispatch({
//     type: "DECREMENT",
//     decrementBy: 10,
// });
// store.dispatch({
//     type: "INCREMENT",
// });

// store.dispatch({
//     type: "RESET",
// });

// ES6 Destructing
// ES6 Destructing - its allow us to work with array and object.
// - let create another file inside playground folder src/playground/destructuring.js

// Refractoring and organizing
// - Action generator -> are functions that returns action object
// const incrementCount = ()=>{ //explicitly return of object
//     return{
//         type: "INCREMENT",
//     }
// }

// implicitly return of object
// const incrementCount = (payload = {})=>({
//     type: "INCREMENT",
//     incrementBy: typeof payload.incrementBy === "number"? payload.incrementBy : 1,
// })

// destructuring Action generator
// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//     type: "INCREMENT",
//     incrementBy
// });

// const decrementCount = ({ decrementBy = 1 } = {}) => ({
//     type: "DECREMENT",
//     decrementBy
// });

// const resetCount = () => ({
//     type: "RESET",
// });

// const setCount = ({ count } = {}) => ({
//     type: "SET",
//     count,
// });

// const store = createStore((state = { count: 0 }, action) => {
//     switch(action.type){
//         case "INCREMENT":
//             return {
//                 count: state.count + action.incrementBy,
//             };
//         case "DECREMENT": 
//             return {
//                 count: state.count - action.decrementBy,
//             };
//         case "RESET":
//             return {
//                 count: 0
//             };
//         case "SET":
//             return {
//                 count: action.count,
//             }
//         default:
//             return state;
//     }
// });
// // subscribe function
// store.subscribe(()=>{
//     console.log(store.getState());
// })

// // inline Action object
// // store.dispatch({
// //     type: "INCREMENT",
// //     incrementBy: 5,
// // });
// store.dispatch(incrementCount({ incrementBy: 5 }));
// store.dispatch(decrementCount({ decrementBy: 2 }));
// store.dispatch(resetCount());
// store.dispatch(setCount({ count: 120 }));

// Reducers
// - Reducers are pure function -> they are function which the output depend purely on the input which are state and action, its doesn't use anything outside of its function scope.
// example of non-pure function
let a = 10;
const add = (b)=>{
   return a + b;
} 
// 2. Never change the state or action -> just want to read the state or action and return new object that represent the state.
// 3. Reducers use the Action object to manipulate the state object which will lead to returning of new state object that will make changes to redux store.

// REDUCERS
const countReducer = (state = { count: 0 }, action) => {
    switch(action.type){
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy,
            };
        case "DECREMENT": 
            return {
                count: state.count - action.decrementBy,
            };
        case "RESET":
            return {
                count: 0
            };
        case "SET":
            return {
                count: action.count,
            }
        default:
            return state;
    };
};

// ACTION OBJECT
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const resetCount = () => ({
    type: "RESET",
});

const setCount = ({ count } = {}) => ({
    type: "SET",
    count,
});

// REDUX STORE
const store = createStore(countReducer);

// SUBSCRIBE FUNCTION -> DISPLAYS ON BROWSER
store.subscribe(()=>{
    console.log(store.getState());
})

// DISPATCH FUNCTION
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(resetCount());
store.dispatch(setCount({ count: 120 }));
