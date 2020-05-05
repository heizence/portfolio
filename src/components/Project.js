import React from 'react';
import { ProjectText } from '../portfolio_data/TextData'
import EachPortfolio from './EachPortfolio'
import './Project.css'

const Project = () => {
    return (
        <div id="project" className="section">
            <h1 className="content-title">PROJECT</h1>
            <div id="portfolio-container">
                {ProjectText.map((element, index) => {
                    return (
                        <div key={index} className="each-portfolio">                            
                            <EachPortfolio data={element}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Project
