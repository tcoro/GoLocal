import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import './App.css';
import {Home} from "./components/Home";
import {Form} from "./components/example/Form";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/example" exact component={Form}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
