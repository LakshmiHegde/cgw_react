import React, {useState} from "react";
import {NavLink, useNavigate, Outlet, useParams} from "react-router-dom";
import {GiftShops} from "./GiftShops";

export function CustomerDashboard(){

    const params= useParams()
    let orderpath="/orders/"+params.userid
    let cartpath="/cart/"+params.userid
    let profilepath="/profile/"+params.userid
    let giftpath="/giftshops/"+params.userid
    let sweetpath="/sweetshops/"+params.userid

    return(
        <>
            <ul className="a">
                <li><a className="active" href={profilepath}>Profile</a></li>
                <li><a href={cartpath}>Cart</a></li>
                <li><a href={orderpath}>Orders</a></li>
                <li><a href="/">Logout</a></li>
            </ul>
            <br/>
            <div className="b" style={{position: 'relative',width:'100%'}}>
                <div style={{marginTop:'100px',position:'absolute',left:'60px',width:'35%',height:'100px'}}>
                    <a href={sweetpath}>
                    <img src="/images/sweets.webp" alt="Sweets" style={{width: '100%'}}/>
                    </a>
                </div>

                <div style={{marginTop:'100px',position:'absolute',right:'130px',width:'35%',height:'100px'}}>
                    <a href={giftpath}>
                    <img src="/images/gift.jpeg" alt="Gifts" style={{width: '100%', "pointer-events": "all"}}/>
                    </a>
                </div>
            </div>

        </>

    )
}