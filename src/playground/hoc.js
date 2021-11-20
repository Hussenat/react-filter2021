// Higher Order Component (HOC) -> A component (HOC) that renders another component.
// - The Goal of HOC
// 1 Reuse code 
// 2 Render hijacking
// 3 Prop Manipulation
// 4 Abstract state

import React from "react";
import ReactDOM  from "react-dom";

// Regular React functional component
const Info = (props) => (
    <div>
        <h1>Infor</h1>
        <p>The infor is : {props.info}</p>
    </div>
);

// ReactDOM.render(<Info info="There are the details"/>, document.getElementById("app"));

// Higher Order Component (HOC) -> is a regular function that pass in component as an argument and its return Higher Order Component
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private info. Please don't Share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById("app"));

// challenge Area
// create Hoc called requireAuthentication(Info);
// pass isAuthenticated as a props, if true print WrappedComponent else don't print
// const AuthInfo = requireAuthentication(Info);

const requireAuthentication= (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to view the info</p>
            )}
        </div>
    );
};
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details"/>, document.getElementById("app"));
