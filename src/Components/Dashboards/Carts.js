import Login from "../Login";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";

export function Carts(){
    const params=useParams()
    const navigate = useNavigate()
    const [cart, setCart] = useState([])
    const getData = () =>{
        axios.get("http://localhost:9087/viewcart/"+params.userid)
            .then(response => {
                console.log(response)
                setCart(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(()=>{
        getData()
    },[])

    const ordernow  = (e) => {
        e.preventDefault()
      console.log("reached")
        navigate("/ordernow/"+params.userid)
    }
    return(
        <div className="App">
        <table>
            <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th> :
                    <h1>NoShops</h1>
                <th>Quantity</th>
                <th>Buy Now</th>
            </tr>
                    {
                        cart.length>0
                            ? cart.map((item)=>

                                    <tr>
                                        <td><img alt="" src={`data:image/jpeg;base64,${item.image}`} className="photo"/></td>
                                        <td>{item.item_name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                        <td>{item.qty}</td>
                                        <td><input type="button" onClick={ordernow} value="Order now"/></td>
                                    </tr>
                            )
                            :toast.error("No items carted")
                    }
        </table>
        </div>

    )
}