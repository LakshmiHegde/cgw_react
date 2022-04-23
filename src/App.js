import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login";
import {Route,Routes} from "react-router-dom";
import React from "react";
import {Customer} from "./Components/Customer";
import {Partner} from "./Components/Partner";
import {Delivery} from "./Components/Delivery";
import {Register} from "./Components/Register";
import {CustomerDashboard} from "./Components/Dashboards/CustomerDashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}>
          <Route path='customer' element={<Customer/>}/>
          <Route path='partner' element={<Partner/>}/>
          <Route path='delivery' element={<Delivery/>}/>
        </Route>
          <Route path="/dashboard/:userid/" element={<CustomerDashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
