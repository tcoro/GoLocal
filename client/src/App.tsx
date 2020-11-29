import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import {Home} from "./components/Home";
import {Form} from "./components/example/Form";
import {Navbar} from "./components/Navbar/Navbar";
import {Login} from "./components/Auth/Login";
import {Register} from "./components/Auth/Register";
import { FarmerList } from './components/farmersList/FarmerList';

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/example" exact component={Form}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/farmers" exact component={FarmerList}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
