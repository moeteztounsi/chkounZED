import React from 'react';
import {RiAuctionFill} from 'react-icons/ri';
import {AiOutlineUser} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import {
    Navbar, 
    Container, 
    NavDropdown, 
    Nav, 
    Form, 
    FormControl,
    InputGroup, 
} from 'react-bootstrap';
import './Navbar.css'
import {Link} from 'react-router-dom';


const NavBar = ({userName})=>{
   
    return(
        <Navbar  expand="lg" bg="dark" variant="dark" style={{height:"70px"}}>
            <Container >
                <Link to ="/">
                   <RiAuctionFill size={60} style={{cursor:'pointer', marginLeft:"60px"}}/>
                </Link>
                <Navbar.Brand href="/">Chkoun ZED</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' ,marginLeft:30}}
                        navbarScroll
                        >
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav>
                    
                    <Form className="d-flex form">
                        
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-1" 
                        aria-label="Search"
                        style={{ height : '40px', borderRadius:"5px"}}
                        />
                        
                       
                    
                    </Form>
                   

                    
                    <NavDropdown title="accountName" id="navbarScrollingDropdown">
                        
                        <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item>
                            Log Out
                        </NavDropdown.Item>
                    </NavDropdown>
                    <AiOutlineUser size={20}/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default NavBar;