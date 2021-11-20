import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "react-dates/lib/css/_datepicker.css";

// Store
const store = configureStore(); 

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
// the above command will only move the selected files and folder to mthe stage change area
// rerun git status to view these files in the stage changes area
  