import React from 'react';
import './bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import Navbar from './components/Navbar';
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen';
import HomeScreen from './Screens/HomeScreen/HomeScreen';


const App = ()=>{

    return (
        <BrowserRouter>
            <HomeScreen/>
        </BrowserRouter>
    )
}

export default App;