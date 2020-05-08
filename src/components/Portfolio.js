import React from 'react';
import { PortfolioText } from '../portfolio_data/TextData'
import EachPortfolio from './EachPortfolio'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div id="portfolio" className="section">
            <h1 className="content-title">PORTFOLIO</h1>
            <div id="portfolio-container">
                {PortfolioText.map((element, index) => {
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

export default Portfolio
