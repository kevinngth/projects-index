import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "../components";
import { Home, StudentsInsert } from "../pages";
import "./index.css";

const App = () => {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <main className="App-body">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route
                            path="/students/create"
                            exact
                            component={StudentsInsert}
                        />
                    </Switch>
                </main>
            </Router>
        </div>
    );
};

export default App;
