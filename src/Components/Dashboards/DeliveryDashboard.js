import React, {useState} from "react";
import {NavLink, useNavigate, Outlet} from "react-router-dom";
import axios from "axios";
export function DeliveryDashboard(){

    return(
        <>
            <nav className="mainNavBarStyle">
                <NavLink to='delivery'>Your Orders</NavLink>
                <NavLink to='delivery'>Available Orders</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}