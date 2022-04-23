import React, { useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {CustomerDashboard} from "./Dashboards/CustomerDashboard";
export function Login(){
    const navigate= useNavigate()
    const[credentials, setCredentials] = useState({username:'',password:'',type:'cust'})
    const[cust, setcust] = useState(false)
    const submitresponse = (event) =>{
        console.log(credentials.type)
        axios.post("http://localhost:9087/login", credentials)
            .then(response => {
                console.log(response)
                console.log(response.data)
                console.log(credentials.type)
                console.log(response.data !== "")
                console.log(credentials.type === 'cust')
                if(response.data !== "" && credentials.type === 'cust')
                {
                    navigate("/cust_dashboard/"+response.data.id)
                }
                else if(response.data !== "" && credentials.type === 'part')
                    navigate("/part_dashboard/"+response.data.id)
                else if(response.data !== "" && credentials.type === 'del')
                    navigate("/del_dashboard/"+response.data.id)


            }).catch(error=>{
                console.log(error)
        })
        event.preventDefault()
    }

    const register =(event) => {
        //alert('register')
        navigate("/register")
        event.preventDefault()
    }


    return (
            <div>
            <form onSubmit={submitresponse}>
               <div><label>Username: </label>
                <input type='text' onChange={(e)=>{setCredentials({...credentials, username:e.target.value})}}/>
               </div>
                <div><label>Password: </label>
                <input type='password' onChange={(e)=>{setCredentials({...credentials, password:e.target.value})}}/>
                </div>
                <div>
                <label>Type: </label>
                <select onChange={(e)=>{setCredentials({...credentials, type:e.target.value})}}>
                    <option value='cust'>Customer</option>
                    <option value='part'>Partner</option>
                    <option value='del'>Delivery</option>
                </select>
                </div>
                <div><input type='submit' value='Login' onChange={submitresponse}/></div>

            </form>
            <div><input type='button' value='Register' onClick={register}/></div>

        </div>
        );

}
export default Login