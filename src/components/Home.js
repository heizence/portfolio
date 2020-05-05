import React from 'react';
import { HomeText } from '../portfolio_data/TextData'
import './Home.css' 

const Home = () => {
    const { title, name, content } = HomeText
    return (
        <div id="home">
         
            <h1 id="home-title">{title}<span style={{color: '#5aa4f8'}}>{name}</span>.</h1>
            <div id="home-content">{content}</div>
        </div>
    )
}

export default Home
