import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import {Home} from "./components/Home";
import {Form} from "./components/example/Form";
import {Navbar} from "./components/Navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/example" exact component={Form}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
