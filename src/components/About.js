import React from 'react';
import { AboutText } from '../portfolio_data/TextData'

const styles = {
    h3Margin: {
        marginTop: '40px'
    }
}

const About = () => {
    return (
        <div id="about" className="section">
            <h1 className="content-title">ABOUT</h1>
            {AboutText.map((element, index) => {
                return (
                    <div key={index} className="content-container"> 
                        <div className="content-text">
                            <h2>{element.title}</h2>
                            {element.contents.map((content, index2) => {
                                return (
                                    <div key={index2}>
                                        <h3 style={styles.h3Margin}>{content.subtitle}</h3>
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

            
        </div>
    )
}

export default About
