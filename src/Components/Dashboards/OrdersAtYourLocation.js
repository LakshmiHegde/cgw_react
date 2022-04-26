import React from "react";
import axios from "axios";

export function OrdersAtYourLocation(){

    const handleResponse= (e) =>{
        e.preventDefault()
        console.log(props.type)
        console.log(loc.type)
        axios.post("http://localhost:9087/viewordersatdeliverylocation",loc)
            .then(response => {
                console.log(response)
                console.log(response.data)
                if(response.data !== "")
                {
                    setResponse(true)
                    setShops(response.data)
                    navigate("")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <form   onSubmit={handleResponse}>
            <div>
                <label>Choose location : </label>
            </div><br/>
            <div><input type="text" placeholder="Enter location" onChange={(e)=>{setLocation({...loc, location:e.target.value, type:props.type})}}/>
            </div><br/>
            <div><input type="submit" value="Submit" onSubmit={handleResponse}/></div>
        </form>
    )
}