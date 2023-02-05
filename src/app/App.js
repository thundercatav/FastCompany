import React from "react";

import { Route, Switch } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";
import NavBar from "./components/navBar";
import UserLayout from "./components/userLayout";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users" component={UserLayout} />
            </Switch>
        </>
    );
}

export default App;
