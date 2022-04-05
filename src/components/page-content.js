import React from "react";
import { Switch, Route } from "react-router-dom"
import { DuckQuestions } from "./duck-functions";

import HomePage from "./home-page";

export default function() {
    return (
        <div>
            <Switch>
                <Route exact path="/duck-functions" component={DuckQuestions} /> 
                <Route exact path="/duck-container" component={DuckContainer} /> 
            </Switch>
        </div>
    );
}