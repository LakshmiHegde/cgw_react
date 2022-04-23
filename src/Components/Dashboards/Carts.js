import Login from "../Login";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {Col, Container, Row} from "reactstrap";
import {DisplayImage} from "./DisplayImage";

export function Carts(){
    const params=useParams()
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
    return(
        <div>
            <Container fluid>
                <Row>
                    {
                        cart.length>0
                            ? cart.map((item)=>
                                <Col sm='3'>
                                    <img alt="" src={`data:image/jpeg;base64,${item.image}`} className="photo"/>
                                </Col>
                            )
                            : "No artists"
                    }
                </Row>
            </Container>

        </div>

    )
}