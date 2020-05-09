import React from 'react';
import { HomeText } from '../portfolio_data/TextData'
import githubLogo from '../images/githublogo.webp';
import linkedInLogo from '../images/linkedinlogo.png';
import './Home.css' 

const Home = () => {
    const { title, name, subtitle, text, contact } = HomeText
    return (
        <div id="home">
            <h1 id="home-title">{title}<span style={{color: '#5aa4f8'}}>{name}</span>.</h1>
            <div id="home-subtitle">{subtitle}</div>
            <div id="home-text"><span className="paragraph-space"></span>{text}</div>

            <div style={{marginTop: '20px'}}>
                <h3 id="home-subtitle">Contact</h3>
                <div id="home-text">Email : {contact.Email}</div>
                <div style={{marginTop: '20px'}}>
                    <a href={contact.github} target="_blank" rel="noopener noreferrer">
                        <img className="logo" id="github-logo" src={githubLogo} alt='' />
                    </a>
                    <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={linkedInLogo} alt='' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
