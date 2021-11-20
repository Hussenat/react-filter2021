"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Indecision State: Part 1
// Implement component on indecision app
// Moving of handlePick() and handleDeleteOptions() from local declaration to global declaration
// class IndecisionApp extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
//         this.handlePick=this.handlePick.bind(this)
//         this.state = {
//            options : [
//                 "Thing One",
//                 "Thing Two",
//                 "Thing Three",
//                 "Thing Four",
//                 "Thing Five",
//                 "Thing Six"
//             ],

//         }
//     }
//     handleDeleteOptions(){ // it is a global user defined method cause it is residing in the parent component indecision app
//         // alert("HandleDeleteOptions")
//         this.setState(()=>{ // using setState to change or pass value to the state object
//             return {
//                 options: []
//             }
//         })
//     }
//     handlePick(){ // it is a global user defined method cause it is residing in the parent component indecision app
//         // alert("HandlePick")
//         const randomNum = Math.floor(Math.random() * this.state.options.length)
//         console.log(randomNum)
//         const option = this.state.options[randomNum]
//         alert(option)
//     }
//     render(){
//         const title = "Indecision";
//         const subtitle = "Put your life in the hands of a computer"

//         return(
//             <div>
//                 <Header title={title} subtitle={subtitle} />
//                 <Action handlePick={this.handlePick} />
//                 <Options options={this.state.options}
//                 handleDeleteOptions={this.handleDeleteOptions}/>
//                 <AddOption />    
//             </div>
//         )
//     }
// }
// class Header extends React.Component{
//     render(){ // render method is a predefine react method which returns jsx
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

// class Action extends React.Component{
//     // handlePick() {
//     //     alert("HandlePick");
//     // }
//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.handlePick}>What should I do?</button>
//             </div>
//         )
//     }
// }

// class Options extends React.Component{
//     // constructor(props) {
//     //     super(props);
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     // }
//     // handleRemoveAll() {
//     //     console.log(this.props.options)
//     // }
//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 <h3>{this.props.options.length}</h3>
//                    {this.props.options.map((option)=>(
//                     <Option key={option} optionText={option} />
//                     ))}
//             </div>
//         )
//     }
// }

// class Option extends React.Component {
//     render(){
//         return <div>{this.props.optionText}</div>
//     }
// }

// class AddOption extends React.Component{
//     handleAddOption(e) {
//         e.preventDefault();
//         const option = e.target.elements.option.value.trim();
//         if (option) {
//             alert(option);
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <form onSubmit={this.handleAddOption}>
//                     <input type="text" name="option" />
//                     <button>Add Option</button>
//                 </form>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// Indecision State: Part II
// Implement component on indecision app
// Adding handleAddOption() for both local declaration to global declaration
// class IndecisionApp extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
//         this.handlePick=this.handlePick.bind(this)
//         this.handleAddOption=this.handleAddOption.bind(this)
//         this.state = {
//            options : [
//                 "Thing One",
//                 "Thing Two",
//                 "Thing Three",
//                 "Thing Four",
//                 "Thing Five",
//                 "Thing Six"
//             ],

//         }
//     }
//     handleDeleteOptions(){ // it is a global user defined method cause it is residing in the parent component indecision app
//         this.setState(()=>{ // using setState to change or pass value to the state object
//             return {
//                 options: []
//             }
//         })
//     }
//     handlePick(){ // it is a global user defined method cause it is residing in the parent component indecision app
//         const randomNum = Math.floor(Math.random() * this.state.options.length)
//         console.log(randomNum)
//         const option = this.state.options[randomNum]
//         alert(option)
//     }
//     handleAddOption(option){
//         // console.log("handleAddOptionGlobal: ", option)
//         if(!option){
//             return "Enter valid value to add item"
//         }else if(this.state.options.indexOf(option) > -1){
//             return "This option already exists"
//         }
//         // 
//         this.setState((prevState)=>{
//             return{
//                 options: prevState.options.concat([option])
//             }
//         })
//     }
//     render(){
//         const title = "Indecision";
//         const subtitle = "Put your life in the hands of a computer"

//         return(
//             <div>
//                 <Header title={title} subtitle={subtitle} />
//                 <Action handlePick={this.handlePick} />
//                 <Options options={this.state.options}
//                 handleDeleteOptions={this.handleDeleteOptions}/>
//                 <AddOption handleAddOption={this.handleAddOption} />    
//             </div>
//         )
//     }
// }
// class Header extends React.Component{
//     render(){ // render method is a predefine react method which returns jsx
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

// class Action extends React.Component{
//        render(){
//         return(
//             <div>
//                 <button onClick={this.props.handlePick}>What should I do?</button>
//             </div>
//         )
//     }
// }

// class Options extends React.Component{
//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 <h3>{this.props.options.length}</h3>
//                    {this.props.options.map((option)=>(
//                     <Option key={option} optionText={option} />
//                     ))}
//             </div>
//         )
//     }
// }

// class Option extends React.Component {
//     render(){
//         return <div>{this.props.optionText}</div>
//     }
// }

// class AddOption extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleAddOption = this.handleAddOption.bind(this)
//         this.state = {
//             error: undefined    // undefined means a success case
//         }
//     }
//     handleAddOption(e) {
//         e.preventDefault();
//         const option = e.target.elements.option.value.trim();
//         // if (option) {
//         //     this.props.handleAddOption(option)  //if option contain value then pass it tot the global handleAddOption
//         //     alert("HandleAddOptionLocal: ", option);
//         // }
//         const error = this.props.handleAddOption(option) // it will handle the error return from the Parent Indecision component
//         console.log(error)
//         this.setState(()=>{
//             return{
//                 error
//             }
//         })
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.handleAddOption}>
//                     <input type="text" name="option" />
//                     <button>Add Option</button>
//                 </form>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// Summary component props vs component state
// Props is an object used in passing data from one component to the other while 
// state is also an object used in storing data onto an object properties

// Similarities between props and state
// Props                                        State
// 1. An Object                                 An Object
// 2. Can be used when rendering a component    Can be used when rendering a component
// 3. Changes cause component re-render         Changes cause component re-render

// Difference between props and state
// Props                                        State
// 1. Comes from above component.               Defined in component itself.
// 2. Cant be change by the its passed to       can be changed by component.

// Brand new way of creating React Component
// Stateless Functional Components or Functional Components
// They are just Function. Functional component does not allow state but its allow props.
// Functional component are fast than class based component becos they dont inherit super component
// const User = (props) =>{
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// };

// ReactDOM.render(<User name='Jola' age={25}  />, document.getElementById('app'))

// Let Implement stateless function on some of the IndecisionApp nested component 
// Any component that does not have state will be converted to functional component
// class IndecisionApp extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
//         this.handlePick=this.handlePick.bind(this)
//         this.handleAddOption=this.handleAddOption.bind(this)
//         this.state = {
//            options : [
//                 "Thing One",
//                 "Thing Two",
//                 "Thing Three",
//                 "Thing Four",
//                 "Thing Five",
//                 "Thing Six"
//             ],

//         }
//     }
//     handleDeleteOptions(){ 
//         this.setState(()=>{ 
//             return {
//                 options: []
//             }
//         })
//     }
//     handlePick(){ 
//         const randomNum = Math.floor(Math.random() * this.state.options.length)
//         console.log(randomNum)
//         const option = this.state.options[randomNum]
//         alert(option)
//     }
//     handleAddOption(option){
//          if(!option){
//             return "Enter valid value to add item"
//         }else if(this.state.options.indexOf(option) > -1){
//             return "This option already exists"
//         }
//             this.setState((prevState)=>{
//             return{
//                 options: prevState.options.concat([option])
//             }
//         })
//     }
//     render(){
//         const title = "Indecision";
//         const subtitle = "Put your life in the hands of a computer"

//         return(
//             <div>
//                 <Header title={title} subtitle={subtitle} />
//                 <Action handlePick={this.handlePick} />
//                 <Options options={this.state.options}
//                 handleDeleteOptions={this.handleDeleteOptions}/>
//                 <AddOption handleAddOption={this.handleAddOption} />    
//             </div>
//         )
//     }
// }
// // class Header extends React.Component{
// //     render(){ // render method is a predefine react method which returns jsx
// //         return (
// //             <div>
// //                 <h1>{this.props.title}</h1>
// //                 <h2>{this.props.subtitle}</h2>
// //             </div>
// //         )
// //     }
// // }
// const Header = (props) => {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <h2>{props.subtitle}</h2>
//         </div>
//     );
// };

// // class Action extends React.Component{
// //        render(){
// //         return(
// //             <div>
// //                 <button onClick={this.props.handlePick}>What should I do?</button>
// //             </div>
// //         )
// //     }
// // }
// const Action = (props) => {
//     return(
//         <div>
//             <button onClick={props.handlePick}>What should I do?</button>
//         </div>
//     );
// };

// // class Options extends React.Component{
// //     render(){
// //         return(
// //             <div>
// //                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
// //                 <h3>{this.props.options.length}</h3>
// //                    {this.props.options.map((option)=>(
// //                     <Option key={option} optionText={option} />
// //                     ))}
// //             </div>
// //         )
// //     }
// // }
// const Options = (props) => {
//     return(
//         <div>
//             <button onClick={props.handleDeleteOptions}>Remove All</button>
//             <h3>{props.options.length}</h3>
//                {props.options.map((option)=>(
//                 <Option key={option} optionText={option} />
//                 ))}
//         </div>
//     );
// };

// // class Option extends React.Component {
// //     render(){
// //         return <div>{this.props.optionText}</div>
// //     }
// // }
// const Option = (props) => {
//     return <div>{props.optionText}</div>
// }

// class AddOption extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleAddOption = this.handleAddOption.bind(this)
//         this.state = {
//             error: undefined    // undefined means a success case
//         }
//     }
//     handleAddOption(e) {
//         e.preventDefault();
//         const option = e.target.elements.option.value.trim();
//         const error = this.props.handleAddOption(option) // it will handle the error return from the Parent Indecision component
//         console.log(error)
//         this.setState(()=>{
//             return{
//                 error
//             }
//         })
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.handleAddOption}>
//                     <input type="text" name="option" />
//                     <button>Add Option</button>
//                 </form>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// Challenge Area
// Copy the updated counter app
// Setup default props value on count to 0
// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleAddOne = this.handleAddOne.bind(this);
//         this.handleMinusOne = this.handleMinusOne.bind(this);
//         this.handleReset = this.handleReset.bind(this);
//         this.state = {
//             count : props.count,
//         }
//     }
//     handleAddOne() {
//              this.setState((prevState) => { 
//                 return{
//                 count: prevState.count +1
//             }
//         })
//     }
//     handleMinusOne() {
//         this.setState((prevState) => { 
//             return{
//                 count: prevState.count -1
//             }
//         })
//     }
//     handleReset() {
//         this.setState(() => { 
//             return{
//                 count: 0
//             }
//         })
//         this.setState((prevState)=>{
//             return {
//                 count: prevState.count +1
//             }
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Count:{this.state.count}</h1>
//                 <button onClick={this.handleAddOne}>+1</button>
//                 <button onClick={this.handleMinusOne}>-1</button>
//                 <button onClick={this.handleReset}>Reset</button>
//             </div>
//         );
//     }
// }
// // Default Props
// Counter.defaultProps={
//     count: 0,
// }
// ReactDOM.render(<Counter />, document.getElementById("app"));

// React Dev Tool -> for debug React inside browser such as chrome, firefox, etc. its an extension 
// The extension is available on browser such as chrome, firefox etc
// Let google search react devTools
// Click on React Developer Tools - Chrome web store
// Click on Add to chrome Button
// Then close and reOpen the browser

// class IndecisionApp extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
//         this.handlePick=this.handlePick.bind(this)
//         this.handleAddOption=this.handleAddOption.bind(this)
//         this.state = {
//            options : [
//                 "Thing One",
//                 "Thing Two",
//                 "Thing Three",
//                 "Thing Four",
//                 "Thing Five",
//                 "Thing Six"
//             ],

//         }
//     }
//     handleDeleteOptions(){ 
//         this.setState(()=>{ 
//             return {
//                 options: props.Options
//             }
//         })
//         // returning string, number, [], and {}
//         const num =()=> 12 + 2  //returning number
//         const num =()=> [1, 2, 3]   // returning array
//         const num =()=> ({})    // return object implicity or automatically

//         // Shorthand arrow function as an argument
//         this.setState(()=>({options: [],}))

//         // Challenge Area
//         // convert all the stateless to the alternative way of coding it
//     }
//     handlePick(){ 
//         const randomNum = Math.floor(Math.random() * this.state.options.length)
//         console.log(randomNum)
//         const option = this.state.options[randomNum]
//         alert(option)
//     }
//     handleAddOption(option){
//          if(!option){
//             return "Enter valid value to add item"
//         }else if(this.state.options.indexOf(option) > -1){
//             return "This option already exists"
//         }
//             this.setState((prevState)=>{
//             return{
//                 options: prevState.options.concat([option])
//             }
//         })
//     }
//     render(){
//         // const title = "Indecision";
//         const subtitle = "Put your life in the hands of a computer"

//         return(
//             <div>
//                 <Header subtitle={subtitle} />
//                 <Action handlePick={this.handlePick} />
//                 <Options options={this.state.options}
//                 handleDeleteOptions={this.handleDeleteOptions}/>
//                 <AddOption handleAddOption={this.handleAddOption} />    
//             </div>
//         )
//     }
// }
// // default props
// IndecisionApp.defaultProps={
//     options: [],
// }
// const Header = (props) => {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <h2>{props.subtitle}</h2>
//         </div>
//     );
// };
// // default props
// Header.defaultProps={
//     title: "Indecision app",
// }

// const Action = (props) => {
//     return(
//         <div>
//             <button onClick={props.handlePick}>What should I do?</button>
//         </div>
//     );
// };

// const Options = (props) => {
//     return(
//         <div>
//             <button onClick={props.handleDeleteOptions}>Remove All</button>
//             <h3>{props.options.length}</h3>
//                {props.options.map((option)=>(
//                 <Option key={option} optionText={option} />
//                 ))}
//         </div>
//     );
// };

// const Option = (props) => {
//     return <div>{props.optionText}</div>
// }

// class AddOption extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleAddOption = this.handleAddOption.bind(this)
//         this.state = {
//             error: undefined    // undefined means a success case
//         }
//     }
//     handleAddOption(e) {
//         e.preventDefault();
//         const option = e.target.elements.option.value.trim();
//         const error = this.props.handleAddOption(option) // it will handle the error return from the Parent Indecision component
//         console.log(error)
//         this.setState(()=>{
//             return{
//                 error
//             }
//         })
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.handleAddOption}>
//                     <input type="text" name="option" />
//                     <button>Add Option</button>
//                 </form>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// Removing of individual option by creating handleDeleteOption

// class IndecisionApp extends React.Component{
//         constructor(props){
//             super(props)
//             this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
//             this.handlePick=this.handlePick.bind(this)
//             this.handleAddOption=this.handleAddOption.bind(this)
//             this.handleDeleteOption=this.handleDeleteOption.bind(this)
//             this.state = {
//                options : [
//                     "Thing One",
//                     "Thing Two",
//                     "Thing Three",
//                     "Thing Four",
//                     "Thing Five",
//                     "Thing Six"
//                 ],

//             }
//         }
//         handleDeleteOptions(){ 
//             this.setState(()=>({options:[],}))
//         }
//         handleDeleteOption(optionToRemove){
//             // console.log(optionToRemove)
//             this.setState((prevState)=>({
//                 options: prevState.options.filter((option)=>{
//                     return optionToRemove !== option;
//                 })
//                 // options: prevState.options.filter((option)=> optionToRemove !== option)
//             }))
//         }
//         handlePick(){ 
//             const randomNum = Math.floor(Math.random() * this.state.options.length)
//             console.log(randomNum)
//             const option = this.state.options[randomNum]
//             alert(option)
//         }
//         handleAddOption(option){
//              if(!option){
//                 return "Enter valid value to add item"
//             }else if(this.state.options.indexOf(option) > -1){
//                 return "This option already exists"
//             }
//                 this.setState((prevState)=>{
//                 return{
//                     options: prevState.options.concat([option])
//                 }
//             })
//         }
//         render(){
//             const title = "Indecision";
//             const subtitle = "Put your life in the hands of a computer"

//             return(
//                 <div>
//                     <Header title={title} subtitle={subtitle} />
//                     <Action handlePick={this.handlePick} />
//                     <Options options={this.state.options}
//                     handleDeleteOptions={this.handleDeleteOptions}
//                     handleDeleteOption={this.handleDeleteOption}/>
//                     <AddOption handleAddOption={this.handleAddOption} />    
//                 </div>
//             )
//         }
//     }
//     const Header = (props) => {
//         return (
//             <div>
//                 <h1>{props.title}</h1>
//                 <h2>{props.subtitle}</h2>
//             </div>
//         );
//     };
//     const Action = (props) => {
//         return(
//             <div>
//                 <button onClick={props.handlePick}>What should I do?</button>
//             </div>
//         );
//     };
//     const Options = (props) => {
//         return(
//             <div>
//                 <button onClick={props.handleDeleteOptions}>Remove All</button>
//                 <h3>{props.options.length}</h3>
//                    {props.options.map((option)=>(
//                     <Option key={option} optionText={option}
//                     handleDeleteOption={props.handleDeleteOption} />
//                     ))}
//             </div>
//         );
//     };
//     const Option = (props) => {
//         return <div>{props.optionText}
//         <button
//         onClick={(e)=>{
//         props.handleDeleteOption(props.optionText)}}>remove</button>
//        </div>
//     }

//     class AddOption extends React.Component{
//         constructor(props){
//             super(props)
//             this.handleAddOption = this.handleAddOption.bind(this)
//             this.state = {
//                 error: undefined    // undefined means a success case
//             }
//         }
//         handleAddOption(e) {
//             e.preventDefault();
//             const option = e.target.elements.option.value.trim();
//             const error = this.props.handleAddOption(option) // it will handle the error return from the Parent Indecision component
//             console.log(error)
//             this.setState(()=>{
//                 return{
//                     error
//                 }
//             })
//         }
//         render(){
//             return(
//                 <div>
//                     {this.state.error && <p>{this.state.error}</p>}
//                     <form onSubmit={this.handleAddOption}>
//                         <input type="text" name="option" />
//                         <button>Add Option</button>
//                     </form>
//                 </div>
//             )
//         }
//     }

//     ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// Lifecycle Methods -> they are predefined methods that are called or execute implicitly as we render 
// Lifecycle Methods are only available 
// class IndecisionApp extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
//         this.handlePick=this.handlePick.bind(this)
//         this.handleAddOption=this.handleAddOption.bind(this)
//         this.handleDeleteOption=this.handleDeleteOption.bind(this)
//         this.state = {
//            options : [
//                 "Thing One",
//                 "Thing Two",
//                 "Thing Three",
//                 "Thing Four",
//                 "Thing Five",
//                 "Thing Six"
//             ],

//         }
//     }

//     // Lifecycle Methods
//     // componentDidMount() its called or triggered as soon as the component render or landed
//     componentDidMount() {
//         console.log("componentDidMount");
//     }
//     // componentDidUpdate() its called or triggered after a component props or state change take place
//     componentDidUpdate() {
//         console.log("componentDidUpdate");
//     } 
//      // componentWillUnMount() its called or executed before the component goes away or closed
//      componentWillUnMount() {
//         console.log("componentWillUnMount");
//     }
//     handleDeleteOptions(){ 
//         this.setState(()=>({options:[],}))
//     }
//     handleDeleteOption(optionToRemove){
//         this.setState((prevState) => ({
//             options: prevState.options.filter((option)=> optionToRemove !== option)    
//         }));
//     }
//     handlePick(){ 
//         const randomNum = Math.floor(Math.random() * this.state.options.length)
//         console.log(randomNum)
//         const option = this.state.options[randomNum]
//         alert(option)
//     }
//     handleAddOption(option){
//          if(!option){
//             return "Enter valid value to add item"
//         }else if(this.state.options.indexOf(option) > -1){
//             return "This option already exists"
//         }
//             this.setState((prevState)=>{
//             return{
//                 options: prevState.options.concat([option])
//             }
//         })
//     }
//     render(){
//         const title = "Indecision";
//         const subtitle = "Put your life in the hands of a computer"

//         return(
//             <div>
//                 <Header title={title} subtitle={subtitle} />
//                 <Action handlePick={this.handlePick} />
//                 <Options options={this.state.options}
//                 handleDeleteOptions={this.handleDeleteOptions}
//                 handleDeleteOption={this.handleDeleteOption}/>
//                 <AddOption handleAddOption={this.handleAddOption} />    
//             </div>
//         )
//     }
// }
// const Header = (props) => {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <h2>{props.subtitle}</h2>
//         </div>
//     );
// };
// const Action = (props) => {
//     return(
//         <div>
//             <button onClick={props.handlePick}>What should I do?</button>
//         </div>
//     );
// };
// const Options = (props) => {
//     return(
//         <div>
//             <button onClick={props.handleDeleteOptions}>Remove All</button>
//             <h3>{props.options.length}</h3>
//                {props.options.map((option)=>(
//                 <Option key={option} optionText={option}
//                 handleDeleteOption={props.handleDeleteOption} />
//                 ))}
//         </div>
//     );
// };
// const Option = (props) => {
//     return <div>{props.optionText}
//     <button
//     onClick={(e)=>{
//     props.handleDeleteOption(props.optionText)}}>remove</button>
//    </div>
// }

// class AddOption extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleAddOption = this.handleAddOption.bind(this)
//         this.state = {
//             error: undefined    // undefined means a success case
//         }
//     }
//     handleAddOption(e) {
//         e.preventDefault();
//         const option = e.target.elements.option.value.trim();
//         const error = this.props.handleAddOption(option) // it will handle the error return from the Parent Indecision component
//         console.log(error)
//         this.setState(()=>{
//             return{
//                 error
//             }
//         })
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.handleAddOption}>
//                     <input type="text" name="option" />
//                     <button>Add Option</button>
//                 </form>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// Saving and Loading data from local Storage
// class IndecisionApp extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
//         this.handlePick=this.handlePick.bind(this)
//         this.handleAddOption=this.handleAddOption.bind(this)
//         this.handleDeleteOption=this.handleDeleteOption.bind(this)
//         this.state = {
//            options : [
//                 "Thing One",
//                 "Thing Two",
//                 "Thing Three",
//                 "Thing Four",
//                 "Thing Five",
//                 "Thing Six"
//             ],

//         }
//     }

// // Manipulating LocalStorage
// // Loading Options data from local Storage
//     componentDidMount() {
//         try{
//             const json = localStorage.getItem('options');
//             const options = JSON.parse(json);
//             if(options){
//                 this.setState({options})
//             }
//         }catch(e){
//             // if user enter invalid data then do nothing at all
//         }
//         console.log("componentDidMount")
//     }
//     // Saving option data into the localstorage
//     componentDidUpdate(prevProps, prevState) {
//         if(prevState.options.length !== this.state.options.length){
//             const json = JSON.stringify(this.state.options);
//             localStorage.setItem("options", json)
//         }
//         console.log("componentDidUpdate")
//     } 
//      // componentWillUnMount() its called or executed before the component goes away or closed
//      componentWillUnMount() {
//         console.log("componentWillUnMount");
//     }
//     handleDeleteOptions(){ 
//         this.setState(()=>({options:[],}))
//     }
//     handleDeleteOption(optionToRemove){
//         this.setState((prevState) => ({
//             options: prevState.options.filter((option)=> optionToRemove !== option)    
//         }));
//     }
//     handlePick(){ 
//         const randomNum = Math.floor(Math.random() * this.state.options.length)
//         console.log(randomNum)
//         const option = this.state.options[randomNum]
//         alert(option)
//     }
//     handleAddOption(option){
//          if(!option){
//             return "Enter valid value to add item"
//         }else if(this.state.options.indexOf(option) > -1){
//             return "This option already exists"
//         }
//             this.setState((prevState)=>{
//             return{
//                 options: prevState.options.concat([option])
//             }
//         })
//     }
//     render(){
//         const title = "Indecision";
//         const subtitle = "Put your life in the hands of a computer"

//         return(
//             <div>
//                 <Header title={title} subtitle={subtitle} />
//                 <Action handlePick={this.handlePick} />
//                 <Options options={this.state.options}
//                 handleDeleteOptions={this.handleDeleteOptions}
//                 handleDeleteOption={this.handleDeleteOption}/>
//                 <AddOption handleAddOption={this.handleAddOption} />    
//             </div>
//         )
//     }
// }
// const Header = (props) => {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <h2>{props.subtitle}</h2>
//         </div>
//     );
// };
// const Action = (props) => {
//     return(
//         <div>
//             <button onClick={props.handlePick}>What should I do?</button>
//         </div>
//     );
// };
// const Options = (props) => {
//     return(
//         <div>
//             <button onClick={props.handleDeleteOptions}>Remove All</button>
//             <h3>{props.options.length}</h3>
//                {props.options.map((option)=>(
//                 <Option key={option} optionText={option}
//                 handleDeleteOption={props.handleDeleteOption} />
//                 ))}
//         </div>
//     );
// };
// const Option = (props) => {
//     return <div>{props.optionText}
//     <button
//     onClick={(e)=>{
//     props.handleDeleteOption(props.optionText)}}>remove</button>
//    </div>
// }

// class AddOption extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleAddOption = this.handleAddOption.bind(this)
//         this.state = {
//             error: undefined    // undefined means a success case
//         }
//     }
//     handleAddOption(e) {
//         e.preventDefault();
//         const option = e.target.elements.option.value.trim();
//         const error = this.props.handleAddOption(option) // it will handle the error return from the Parent Indecision component
//         console.log(error)
//         this.setState(()=>{
//             return{
//                 error
//             }
//         })
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.handleAddOption}>
//                     <input type="text" name="option" />
//                     <button>Add Option</button>
//                 </form>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var StringCount = localStorage.getItem('handleAddOne');
            var count = parseInt(StringCount);
            if (!isNaN(count)) {
                this.setState(function () {
                    count;
                });
            }
            console.log("componentDidMount");
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) {
                localStorage.setItem("Count", this.state.count);
            }
            console.log("componentDidUpdate");
        }
    }, {
        key: "handleAddOne",
        value: function handleAddOne() {
            this.setState(function (prevState) {
                //setState is use to render our component state in the browser
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: "handleMinusOne",
        value: function handleMinusOne() {
            this.setState(function (prevState) {
                //setState is use to render our component state in the browser
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: "handleReset",
        value: function handleReset() {
            this.setState(function (prevState) {
                //setState is use to render our component state in the browser
                return {
                    count: prevState.count = 0
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Count:",
                    this.state.count
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleAddOne },
                    "+1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleMinusOne },
                    "-1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleReset },
                    "Reset"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);
// Default props


Counter.defaultProps = {
    count: 0
};
ReactDOM.render(React.createElement(Counter, null), document.getElementById("app"));
