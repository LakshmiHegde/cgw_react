import React, {useState} from "react";
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
export function DisplayImage(cartitem){

    var binaryData = [];
    binaryData.push(cartitem.image);
    Window.URL.createObjectURL(cartitem.image)
    return(
        <Card className = 'mt-5' >
            <CardImg top width="100%" src = {URL.createObjectURL(cartitem.image)} alt="Card image cap" />
            <CardBody className="text-center">
                <CardTitle className="font-weight-bold">{cartitem.item_name}</CardTitle>
                <CardSubtitle>{cartitem.description} <br/></CardSubtitle>
                <CardText>{cartitem.price} {cartitem.qty}</CardText>
            </CardBody>
        </Card>
    );


}