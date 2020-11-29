import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import {Home} from "./components/Home";
import {Form} from "./components/example/Form";
import {Navbar} from "./components/Navbar/Navbar";
import {Login} from "./components/Auth/Login";
import {Register} from "./components/Auth/Register";
import { FarmerList } from './components/farmersList/FarmerList';
import {FarmerSocket} from "./components/farmersList/FarmerSocket";
import { Cart } from './components/cart/Cart';
import { CartSocket } from './components/cart/CartSocket';

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/example" exact component={Form}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/farmers" exact component={FarmerSocket}/>
                <Route path="/cart" exact component={CartSocket}/>

            </Switch>
        </BrowserRouter>
    );
}

export default App;
