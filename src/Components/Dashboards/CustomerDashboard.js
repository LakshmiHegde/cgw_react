import React, {useState} from "react";
import {NavLink, useNavigate, Outlet, useParams} from "react-router-dom";

export function CustomerDashboard(){

    const params= useParams()
    let orderpath="/orders/"+params.userid
    let cartpath="/cart/"+params.userid
    return(
        <>
            <nav className="mainNavBarStyle">
                <NavLink to={orderpath}>Orders</NavLink>
                <NavLink to={cartpath}>Cart</NavLink>
                <NavLink to="/">Logout</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}