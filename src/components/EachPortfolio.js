import React, { Component } from 'react';
import PortfolioModal from './PortfolioModal'
import './EachPortfolio.css'

const textStyle = {
    fontSize: '0',
    border: 'none'
}

const imgStyleHover = {
    backgroundColor: 'rgb(233, 233, 233)',
    backgroundImage: 'none'
}

class EachPortfolio extends Component {
    constructor() {
        super()
        this.state = {
            hover: false,
            modalOpen: false
        }
        this.hoverOn = this.hoverOn.bind(this)
        this.hoverOff = this.hoverOff.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
    }

    hoverOn() {
        this.setState({ hover: true })
    }

    hoverOff() {
        this.setState({ hover: false })
    }

    toggleModal() {
        this.setState({ 
            modalOpen: !this.state.modalOpen,
            hover: false
        })
    }

    render() {
        const { title, stacks, imgFiles } = this.props.data

        // thumbnail image
        const imgStyle = { 
            background: `url(${imgFiles[0].file})`, backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
        let styles;

        if (!this.state.hover) { styles = textStyle }

        return (
            <div onMouseOver={this.hoverOn} onMouseLeave={this.hoverOff}>
                <div className="portfolio-img" style={this.state.hover ? imgStyleHover : imgStyle}>
                
                <PortfolioModal modalOpen={this.state.modalOpen} toggleModal={this.toggleModal}
                data={this.props.data} />

                <div>
                    <h2 className="title" style={styles}>{title}</h2>
                    <h3 className="stack-title" style={styles}>Stack</h3>
                    <div style={{paddingLeft: '5px', paddingRight: '5px'}}>
                    {stacks.map((stack, index) => { 
                        return (
                            <span className="stacks" 
                            key={index} style={styles}>{stack}
                            {index !== 0 && index < stacks.length-1 ? ', ' : ''}
                            </span>
                        )
                    })}
                    </div>
                    <div className={this.state.hover ? 'button-Hover' : 'button-notHover'}
                    onClick={this.toggleModal}
                    >
                    Learn More</div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default EachPortfolio
