import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
export function ViewItemsToCustomer(){
    const params = useParams()
    const [inventory, setInventory]= useState([])

    const addItemToCart=()=>{}
    const getData = () =>{
        axios.get("http://localhost:9087/inventory/"+params.shopid)
            .then(response => {
                console.log(response)
                setInventory(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(()=>{
        getData()
    },[])

    return(
        <div>
            <div className = 'text-center' >
                <h1>Products</h1>
            </div>
            {
                inventory.length > 0
                    ? inventory.map((item) =>
                        <div>
                            <button className="btn_cls">
                                <img align='left' style = {{right:'0px' , height: '150px' , width: '150px'}} alt={item.item_name} src={`data:image/jpeg;base64,${item.image}`}  />
                                <h3 style = {{right:'0px', textAlign:'center', fontSize:'10px' ,color:'black'}}>
                                    <p>Name: {item.item_name}<br/></p>
                                    <p>Description: {item.description} <br/></p>
                                    <p>Price: {item.price}</p></h3>
                            </button>     <button name={item.id} id={item.partner.id} onClick={addItemToCart}>Add to Cart</button>      <button>Buy now</button><br/><br/>
                        </div>

                    )
                    : "No products"
            }

        </div>
    )

}