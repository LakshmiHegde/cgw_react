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
import {SearchShops} from "./Components/Dashboards/SearchShops";
import {PartnerDashboard} from "./Components/Dashboards/PartnerDashboard";
import {DeliveryDashboard} from "./Components/Dashboards/DeliveryDashboard";
import {Carts} from "./Components/Dashboards/Carts";
import {Ordernow} from "./Components/Dashboards/Ordernow";
import {Inventory} from "./Components/Dashboards/Inventory";
import {GiftShops} from "./Components/Dashboards/GiftShops";
import {SweetShops} from "./Components/Dashboards/SweetShops";
import {ViewItemsToCustomer} from "./Components/Dashboards/ViewItemsToCustomer";
import {BuyNow} from "./Components/Dashboards/BuyNow";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}>

        </Route>
        <Route path='/register' element={<Register/>}>
          <Route path='customer' element={<Customer/>}/>
          <Route path='partner' element={<Partner/>}/>
          <Route path='delivery' element={<Delivery/>}/>
        </Route>

        <Route path="cust_dashboard/:userid/" element={<CustomerDashboard/>}>
          <Route index element={<SearchShops/>}/>
        </Route>
        <Route path="part_dashboard/:userid/" element={<PartnerDashboard/>}></Route>
        <Route path="del_dashboard/:userid/" element={<DeliveryDashboard/>}></Route>
        <Route path="cart/:userid" element={<Carts/>}/>
        <Route path="ordernow/:userid" element={<Ordernow/>}/>
        <Route path="/inventory/:userid" element={<Inventory/>}/>
        <Route path="/giftshops/:userid" element={<GiftShops/>}/>
        <Route path="/sweetshops/:userid" element={<SweetShops/>}/>
        <Route path="/viewItemsToCustomer/:userid/:shopid" element={<ViewItemsToCustomer/>}/>
        <Route path="/buynow/:userid/:itemid/:qty" element={<BuyNow/>}/>
      </Routes>
    </div>
  );
}

export default App;
