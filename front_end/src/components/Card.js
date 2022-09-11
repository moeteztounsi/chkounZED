import React from 'react'
import {Card,Button} from 'react-bootstrap'
import online_auction from '../Images/online_auction.jpg'

const CardLayout = ({src})=>{
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={online_auction} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                
                <Button variant="primary">View</Button>
            </Card.Body>
      </Card>
    )
}


export default CardLayout;