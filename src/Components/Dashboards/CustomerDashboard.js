import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
export function CustomerDashboard(){
    const [loc, setLocation] = useState()
    const navigate =useNavigate()
    const handleResponse= (e) =>{
        e.preventDefault()
        axios.post("http://localhost:9087/viewshops",loc)
            .then(response => {
                console.log(response)
                console.log(response.data)
                if(response.data != "")
                    navigate("/")
            })
            .catch(err => {
                console.log(err)
            })
    }
    return(
        <>
            <nav className="mainNavBarStyle">
                <NavLink to='delivery'>Orders</NavLink>
                <NavLink to='customer'>Cart</NavLink>
                <NavLink to='delivery'>Orders</NavLink>
            </nav>
            <form onSubmit={handleResponse}>
            <label>Choose location : </label>
            <div><input type="text" placeholder="Enter location" onChange={(e)=>{
                setLocation(e.target.value)
            }}/></div>
        <div><input type="submit" value="Submit" onSubmit={handleResponse}/></div>
            </form>
        </>
    )
}