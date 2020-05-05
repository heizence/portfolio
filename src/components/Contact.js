import React from 'react';
import { ContactText } from '../portfolio_data/TextData'
import githubLogo from '../portfolio_data/mediaFiles/github2.svg';
import linkedInLogo from '../portfolio_data/mediaFiles/linkedinlogo.png';
import './Contact.css'

const Contact = () => {
    const { Email, github, linkedIn } = ContactText
    const marginStyle={ marginRight: "20px" }

    return (
        <div id="contact" className="section">
            <h1 id="title">CONTACT</h1>
            <div id="contents">
                <h2 id="email">Email : {Email}</h2>                
                <div style={{textAlign: 'center', marginTop: '30px'}}>
                    <a href={github} target="_blank" rel="noopener noreferrer"
                    style={marginStyle}>
                    <img className="logo" src={githubLogo} alt=''></img>
                    </a>
                    <a href={linkedIn} target="_blank" rel="noopener noreferrer"
                    style={marginStyle}>
                    <img className="logo" src={linkedInLogo} alt=''></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
