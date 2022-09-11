import React from 'react';
import NavBar from '../../components/Navbar';
import CardLayout from '../../components/Card';
import './HomeScreen.css'

const HomeScreen=()=>{
    return(
        <>
            <NavBar/>
            <div className='general-container'>
                <div className='sub-container'>
                    
                </div>
                <CardLayout/>
                <CardLayout/>
                <CardLayout/>
                <CardLayout/>
                <CardLayout/>
                <CardLayout/>
                <CardLayout/>
                <CardLayout/>
            </div>
        </>
    )
}

export default HomeScreen;