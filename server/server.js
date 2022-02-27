//basic express server setup
// const path = require("path");  //it is an in-biult library
// const express = require("express"); //importing express

// const app = express(); //creating new instance of express
// const publicPath = path.join(__dirname, "..", "public"); //serve-up the public folder where you have 
// app.use(express.static(publicPath));


// //startup the server
// app.listen(3000, () => {
//     console.log("Server is up!");
// });

// const path = require("path");  
// const express = require("express"); 

// const app = express(); 
// const publicPath = path.join(__dirname, "..", "public"); 
// app.use(express.static(publicPath));

// app.get("*", (req, res)=>{
//     res.sendFile(path.join(publicPath, "index.html"));
// });

// //startup the server
// app.listen(3000, () => {
//     console.log("Server is up!");
// });


// add index.html page as a fall back page
// const path = require("path");  
// const express = require("express"); 

// const app = express(); 
// const publicPath = path.join(__dirname, "..", "public"); 
// app.use(express.static(publicPath));

// app.get("*", (req, res)=>{
//     res.sendFile(path.join(publicPath, "index.html"));
// });

// //local static the server port number
// app.listen(3000, () => {
//     console.log("Server is up!");
// });

// add dynamic port number which will be use by heroku
const path = require("path");  
const express = require("express"); 

const app = express(); 
const publicPath = path.join(__dirname, "..", "public"); 
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("*", (req, res)=>{
    res.sendFile(path.join(publicPath, "index.html"));
});

// //dynamic server port number which can be use by heroku and for local development
app.listen(port, () => {
    console.log("Server is up!");
});
