import React from 'react'
import { Card } from 'react-bootstrap'

export default function Contact({ restaurant }) {
  return (
    <Card className="mx-auto text-center" style={{ width: "400px", border: "0px" }}>
      {restaurant.name}
      <br/>
      {restaurant.imgurl}
      <br/>
      {restaurant.address.streetNumber}
      <br/>
      {restaurant.address.city},{' '}
      {restaurant.address.state},{' '}
      {restaurant.address.zip}
      <br/>
      {restaurant.phone}
      <br/>
      {restaurant.email}
    </Card>
  )
}
