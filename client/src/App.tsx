import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";

import {Home} from "./components/Home";
import {Form} from "./components/example/Form";
import { SettingsUser } from './components/settingsUser/SettingsUser';
import { SettingsFarmer } from './components/settingsFarmer/SettingsFarmer';
import { FarmerList } from './components/farmersList/FarmerList';
import { Cart } from './components/cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/farmerList" exact component={FarmerList}/>
        <Route path="/example" exact component={Form}/>
        <Route path="/settingsUser" exact component={SettingsUser}/>
        <Route path="/settingsFarmer" exact component={SettingsFarmer}/>
        <Route path="/cart" exact component={Cart}/>

      </Switch>
      </BrowserRouter>
  );
}

export default App;
