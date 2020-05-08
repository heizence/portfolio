import React from 'react';
import { AboutText, SkillText } from '../portfolio_data/TextData'
import './About.css'

const About = () => {
    return (
        <div id="about" className="section">
            <h1 className="content-title">ABOUT</h1>
            <div className="about-container">
            {AboutText.map((element, index) => {
                return (
                    <div key={index} className="content-container"> 
                        <div className="content-text">
                            <h2>{element.title}</h2>
                            {element.contents.map((content, index2) => {
                                return (
                                    <div key={index2}>
                                        <h3>{content.subtitle}</h3>
                                        <p>
                                        <span className="paragraph-space"></span>
                                        {content.text}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })} 

            <h2>Skills</h2>
            {SkillText.map((element, index) => {
                return (
                    <div className='content-container' key={index}>
                        <h3>{element.title}</h3>
                        {element.stacks.map((stack, index2) => {
                            return (
                                <ul className="about-stacks">
                                <li className="about-each-stack" key={index2}>{stack}</li>
                                </ul>
                            )
                        })} 
                        <p>{element.description}</p>
                    </div>
                )
            })} 
            </div>
        </div>
    )
}

export default About
