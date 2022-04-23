import React, {useState} from "react";
import {NavLink, useNavigate, Outlet} from "react-router-dom";

export function PartnerDashboard(){

    return(
        <>
            <nav className="mainNavBarStyle">
                <NavLink to='delivery'>Inventory</NavLink>
                <NavLink to='delivery'>Orders</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}