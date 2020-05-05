import React from 'react';
import { SkillText } from '../portfolio_data/TextData'

const Skills = () => {    
    return (
        <div id="skills" className="section">
            <h1 className="content-title">SKILLS</h1>
            
            <div style={{width: '100%', maxWidth: '1000px'}}>
            {SkillText.map((element, index) => {
                return (
                    <div className='content-container' key={index}>
                        <h2>{element.title}</h2>
                        <p>{element.description}</p>
                        <h4>List</h4>
                        {element.stacks.map((stack, index2) => {
                            return (
                                <span key={index2}>
                                {stack}{index2 <element.stacks.length-1 ? ', ' : ""}
                                </span>
                            )
                        })} 
                    </div>
                )
            })}    
            </div>
        </div>
    )
}

export default Skills
