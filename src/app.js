import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

// Store
const store = configureStore(); 
console.log("testing.........")

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById("app"));

// Open your component on after the other to remove all unnecessary comments
// startup jest suit like this
// startup dev-server

// Deploying our app
// Installing GIT
// git is a free and open source distributed version control system design to handle from small to very large projects speed and efficiency
// open terminal then run this comment
// C:\React-course-projects\xpensify-app6>git --version

// How git works
// Initiate our project with git inorder to create either local or remove repository
// A repository is a git folder that is created on your project implicitly by initializing git.
// untracked files -> immediately we initialize git on our project, we will have all our files.
// staged changes -> when issue git add. command, its will move all the untracked files to stage change level. staged changes will not track by git but let you build up your stage for saving or commiting 
// Commits -> when issue git commit -m "project", its permanently save your files to either local or remote git repository
// its will generate a code like 1ab49 which mean will ahve tracck files.
// unstaged changes -> its contain the modify files that git have being tracking. We need to use git add. command to move files from unstage changes to stage changes

// integrating GIT into our project
// initializing our project with git from the root of your project like this
// C:\React-course-projects\xpensify-app6>git init
// Initialized empty Git repository in C:/React-course-projects/xpensify-app6/.git/
// open your project on your file explorer to view .git folder which is the local repository on your system
// C:\React-course-projects\xpensify-app6>git status 
// the above command will move all your project files to untracked files.
// -create file called .gitignore in the root folder of your project
// sometimes the files may be created authomatically for u by vscode
// gitignore file is use to add files or folders that u did nt want to push to either local or remote github.
// add node_modules/ onto gitignore file inorder to not push third party folder to github beco's its can be easily regenerated
// C:\React-course-projects\xpensify-app6>git status to view d untracked files
// move our files from untracked files to stage changes area by typing this command
// C:\React-course-projects\xpensify-app6>git add jest.config.json public/ src/
// the above command will only move the selected files and folder to the stage change area
// rerun git status to view these files in the stage changes area
// C:\React-course-projects\xpensify-app6>git add .
// the above command move all the untracked files to stage changes area  
// C:\React-course-projects\xpensify-app6>git commit -m "initial commit" 
// C:\>git config --global user.email "zakariyahhussenat@gmail.com
// C:\>git config --global user.name "Hussenat"
// C:\>git config --global user.email
// zakariyahhussenat@gmail.com
// C:\React-course-projects\xpensify-app6>git commit -m "initial commit"
// the above command will move all ur files and folders from stage changes to commit area
// the -m flag represents message to title your commit or save codes re-run git status
// open app.js then remove all the action generator function dispatch to redux store manually and all related imports functions as well
// -once you have deleted all the above and save app.js file git will detect change in app.js file
// C:\React-course-projects\xpensify-app6>git status
// C:\React-course-projects\xpensify-app6>git add .
// C:\React-course-projects\xpensify-app6>git commit -m "remove dummy expenses data"
// rerun git status
// C:\React-course-projects\xpensify-app6>git log
// the above command will log out the various commit that you have made
// press q to return you to command prompt
// create readme.md to root folder to write up the git command we have learnt

// Setting up SSH and GIThub
// SSH -> Secure Shell is a network communication protocol that enable us to communicate with third party services like Github in a secure manner.
// go to github.com to either login or signup onto remote github
// click on Respositories New Button 
// Respository name: react-expenses2021
// click on Create Repository button
// Create SSH keys
// right click on desktop to open Git Bash terminal
// type this command -al ~/.ssh on Git Bash terminal to check if you have ssh setup before.
// -google search connect with github with ssh key, click on connecting to Github with SSH
// click on Generating a new SSH key and adding it to the ssh-agent
// ssh-keygen -t rsa -b 4096 -C "zakariyahhussenat@gmail.com" and pass it on to the Git Bash terminal
// -t flag means transaction, -b flag means but 4096 size
// keep pressing enter until it will generate the public and private ssh key like this
// SHA256:g2XcC/CEFcMc2g3WZO51XccyfLRtBZLd6NOt91VzKus zakariyahhussenat@gmail.com
// re type this command ls -al ~/ .ssh on Git Bash terminal
// its return serials of line of codes containing both public and private key
// id_rsa this is your private ssh key will be on your system like password
// id_rsa this is your public ssh key will given out to third party services like github
// $ eval "$(ssh-agent -s)"
// if the above command is run its return Agent pid 982
// the below command provide the path where our private ssh key resistant in our system.
// ssh-add ~/.ssh/id_rsa
// it return this: Identity added: /c/Users/Miss Abike/.ssh/id_rsa (zakariyahhussenat@gmail.com)
// inorder to give our public ssh key to github for secure connection to github.
// C:\Users\Miss Abike\.ssh\id_rsa.pub with any text editor on your system then copy the
// go back to https://github.com/Hussenat/react-filter2021
// click on your profile picture dropdown, click on settings, click on SSH and GPG keys, click on New SSH key button
// Title: Working on Window
// Net input field pass what you copy from this path then click on Add SSH button
// using the command below to make ssh communication to github service 
// C:\React-course-projects\xpensify-app6>ssh -T git@github.com
// go back to https://github.com/Hussenat/react-filter2021
// copy the below code from github website and press enter on the node terminal
// ggit remote add origin https://github.com/Hussenat/react-filter2021.git
// git branch -M main
// git push -u origin main
// - go back to github website and refresh to view your code on remote github

// Production Webpack
// - open package.json file to view how to run webpack in our script object like this
// - C:\React-course-projects\xpensify-app6> yarn run build
// you will see the size of bundle.js file like this
// Hash: 80faaa12afb1e357056e
// Version: webpack 3.1.0
// Time: 39492ms
//     Asset     Size  Chunks                    Chunk Names
// bundle.js  7.96 MB       0  [emitted]  [big]  main
// next is to reduce or minify the size of bundle.js file for production purpose.
// modify script object in package.json from
// "scripts": {
//     "serve": "live-server public/",
//     "build": "webpack --watch",
//     "dev-server": "webpack-dev-server",
//     "test": "jest --config=jest.config.json"
//   },
// to this
// "scripts": {
//     "serve": "live-server public/",
//     "build:dev": "webpack",
//     "build:prod": "webpack -p",
//     "dev-server": "webpack-dev-server",
//     "test": "jest --config=jest.config.json"
//   },
// - let run webpack like this
// C:\React-course-projects\xpensify-app6> yarn run build:prod
// - the -p flag has reduce the size of the bundle.js
// from bundle.js  7.96 MB       0  [emitted]  [big]  main
// to bundle.js  5.61 MB       0  [emitted]  [big]  main
// - open webpack.config.js file for modification
// - we are going to return function instead of returning an object becos we want to pass in argument onto the function which will be use to setup the environment for production.
// - env as an argument onto module.exports() function
// - re-run the build:prod to see the value of env on the terminal
// its return env:  undefined
// - go back to script object in package.json to add --env production like this
// "build:prod": "webpack -p --env production",
// re-run the build:prod to see the value of env on the terminal
// its return env:  production
// what is taking up the size of bundle.js is the source-map to reduce the size of bundle.js we need source-map that is slow for production
// - modify devtool property in webpack.config.js
// from devtool: "cheap-module-eval-source-map",
// to devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
// source-map is very slow when building an application
// re-run the build for production
// C:\React-course-projects\xpensify-app6> yarn run build:prod
// after modifying both package.json and webpack.config.js, its will output these two files
// Asset     Size  Chunks                    Chunk Names
//     bundle.js   970 kB       0  [emitted]  [big]  main
// bundle.js.map  5.34 MB       0  [emitted]         main
// - for regular users who visit your web app they will be using bundle.js file only which is for production purpose
// - bundle.js.map will only be use for development purpose
// check your public folder in the root folder u will see both files
// let serve up our application in production mode by running our live-server like this
// C:\React-course-projects\xpensify-app6>yarn run serve
// open Header component then remove the following
// <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
// <NavLink to="/help" activeClassName="is-active">Help Expense</NavLink> 
// - for you to see the changes u implement in Header.js component you need to rerun build in production like this
// C:\React-course-projects\xpensify-app6> yarn run build:prod
// to generate new bundle.js file
// C:\React-course-projects\xpensify-app6>yarn run serve
// - testing of source-map
// - add console.log("testing") onto app.js
// C:\React-course-projects\xpensify-app6> yarn run build:prod
// C:\React-course-projects\xpensify-app6>yarn run serve
// open browser console to see where console.log("testing"); line is pointing to

// creating separate Css files
// the following are css files
// import "normalize.css/normalize.css";
// import "./styles/styles.scss";
// import "react-dates/lib/css/_datepicker.css";
// all the above files are currently residing inside bundle.js file which add more eight onto bundle.js file and these css files will not execute until javascript codes runs which take sometime.
// C:\React-course-projects\xpensify-app6>yarn add extract-text-webpack-plugin@3.0.0
// the above library will extract some files out of bundle.js file into a separate file.
// open webpack.config.js file to import the above library that we just installed like this 
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// - make a new instance of ExtractTextPlugIn like this
// const CSSExtract = new ExtractTextPlugin("styles.css");
// the argument style.css is the name of file we are extracting the css code into
// modify the css section of webpack.config file from
// {
//     test: /\.s?css$/,
//     use: ["style-loader","css-loader", "sass-loader"], 
// },
// to this
// {
//     test: /\.s?css$/,
//     use: CSSExtract.extract({
//         use: ["css-loader", "sass-loader"], 
//     })
// }
// we don't need style-loader because its an inline style
// plugin: [CSSExtract],
// - the above modification done to webpack.config.js file will extract css files onto styles.css
// rerun build for production like this
// C:\React-course-projects\xpensify-app6>yarn run build:prod
// webpack will output more assets like this
// Asset      Size  Chunks                    Chunk Names
//      bundle.js    947 kB       0  [emitted]  [big]  main
//     styles.css   17.4 kB       0  [emitted]         main
//  bundle.js.map   5.26 MB       0  [emitted]         main
// styles.css.map  87 bytes       0  [emitted]         main
// - when you compare the bundle.js and bundle.js map files after extracting styles.css is smaller in size.
// link the style.css generated on the head tags in the index.html page so that the style.css file will ,load first before rendering the bundle.js file which is the javascript file like this
// <link rel="stylesheet" type="text/css" href="./styles.css"/>
// - let startup live-server to see that the css file are still working like this
// C:\React-course-projects\xpensify-app6>yarn run serve
// - open Network tab on the browser, click on All to see that the style.css is loading first before bundle.js whcich is the javascript file, click on css to view styles.css file
// source-map for styles.css just like the way we use we use source-map for bundle.js file
// delete all assets generate in public folder
// shutdown live-server and start up dev-server for development like this
// C:\React-course-projects\xpensify-app6>yarn run build:dev
// use selector on the browser to click on DateRangePicker component you will see that the style.css is not pointing to the right line in code.
// the source-map mis working in production mode because of source-map use in devtool in webpack.config.js file.
// the source-map is not working in development mode becos of cheap-module-eval-source-map use in devtool property in webpack.config.js file to switch the development source map 
// from devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
// to devtool: isProduction ? "source-map" : "inline-source-map",
// inline-source-map is a lighter bit lower for development.
// enable source-map on use: ["css-loader", "sass-loader"], by switch use property to array of object like this
// use: [
//     {
//         loader: "css-loader", 
//         options: {sourceMap: true },
//     },
//     {
//         loader: "sass-loader",
//         options: {sourceMap: true}
//     }
// ], 
// - after the above modification done on webpack.config.js file let re-startup dev-server
// - you see that source-map is also working perfectly in development mode as well.

// push our code to github repository
// - make sure you are not pushing both bundle.js and style.css onto github becos they are generated files.
// C:\React-course-projects\xpensify-app6>git status