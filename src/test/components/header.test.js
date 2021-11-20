// import React from "react";
// import ReactShallowRenderer from "react-test-renderer/shallow"
// import Header from "../../component/Header";

// Using ReactShallowRender to render Header component on the command line.
// test("should render Header correctly", () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     console.log(renderer.getRenderOutput())
//     // its return props: { children: [ [object], [object], [object], [object], [object] ] },
//     // which means you have 5 react elements on the Header component which are h1 tag element and 4 Navlink tags
// })

// using toMatchSnapshot() predefined method from jest framework
// test("should render Header correctly", () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot()
//     // the above line of code will generate _snapshot_ folder with Header.test.js.snap file to keep track  of header elements changes
//     // if you make changes in the Header component it will throw error when you run jest test suit, if you want to keep thechanges made you can press u else you can ignore
// })

// Using shallow enzyme in place of ReactShallowRenderer
// import React from "react";
// import { shallow } from "enzyme";
// import Header from "../../component/Header";
// import "../setupTest"
// // using toMatchSnapshot() predefined method from jest framework
// test("should render Header correctly", ()=>{
//     const wrapper = shallow(<Header />)
//     expect(wrapper).toMatchSnapshot();
//     // run jest test suite on the terminal then press u to update Header.test.snap file
//     // open Header.test.snap file you will see some lines of code related to Header component and some code not related to Header component, if you mistaking delete any non related code 
//     // install enzyme-to-json inorder to remove unnecessary code from Header.test.js.snap file
//     // like this C:\React-course-projects\xpensify-app5>yarn add enzyme-to-json@3.0.1
// })

// Using shallow enzyme in place of ReactShallowRenderer
// import React from "react";
// import { shallow } from "enzyme";
// import toJSON from "enzyme-to-json"
// import Header from "../../component/Header";
// import "../setupTest"
// // using toMatchSnapshot() predefined method from jest framework
// test("should render Header correctly", ()=>{
//     const wrapper = shallow(<Header />)
//     expect(toJSON(wrapper)).toMatchSnapshot();
//     // -run jest suit on the terminal then press u to update Header.test.snap file.
// // - open Header.test.js.snap to see that we only have the related code to Header component only.
// // create jest.config.json file in the root folder of the application.
// // modify script object in package.json file inorder to load  jest.config.json file created
// // in the root folder we run jest test suite like this "test": "jest --config=jest.congig.json" 
// // - open jest .config.json to add enzyme-to-json onto jest.config.json instead of add it to 
// // every individual wrapper create in all test cases like this
// // "snapshotSerializers": ["enzyme-to-json/serializer"] 
// })

// removal of enzyme-to-json and it usage in test case because we have globally setup jest.config.json file
import React from "react";
import { shallow } from "enzyme";
import Header from "../../component/Header";

test("should render Header correctly", ()=>{
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();
    // after setting up enzyme-to-json in jest.config.json then remove import toJSON 
    // import toJSON from "enzyme-to-json"; and import "../setupTest"; inside Header.test.js file
    // because its is available on a global scope
    // remove toJSON() method with wrapper as an argument
    // shutdown and restart jest test suite to see its working
})