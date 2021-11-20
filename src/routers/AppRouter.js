import React from 'react'
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import EditExpensePage from "../component/EditExpensePage";
import AddDashboardPage from "../component/AddExpensePage";
import ExpenseDashboardPage from "../component/ExpenseDashboardPage";
import HelpExpensePage from "../component/HelpExpensePage";
import NotFoundPage from "../component/NotFoundPage";
import Header from "../component/Header";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddDashboardPage} exact />
                <Route path="/edit/:id" component={EditExpensePage} exact />
                <Route path="/help" component={HelpExpensePage} exact />
                <Route component={NotFoundPage} />
            </Switch>  
        </div>
    </BrowserRouter>
);
export default AppRouter;









