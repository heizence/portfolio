import React from 'react';
import Modal from 'react-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './PortfolioModal.css'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  },
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export default function App({ modalOpen, toggleModal, data }){
  const { title, span, content, imgFiles, githubRepo, videoFiles } = data
  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={toggleModal}
        style={{...customStyles, 'overflow-y': 'scroll'}}
        contentLabel="Example Modal">

      <div className="modal-box">
        <span className="close" onClick={toggleModal}></span>

        <Carousel infiniteLoop useKeyboardArrows
        showThumbs={false}>
        {imgFiles.map((img, index) => {
          return (
            <div key={index} className="carousel-container">
              <div className="portfolioModal-img" 
                style={{
                  background: `url(${img.file})`, 
                  backgroundSize: 'contain', 
                  backgroundRepeat: 'no-repeat'
                }}>
              </div>
              <p className="carousel-caption">{img.description}</p>
            </div>
          )
        })}

        {videoFiles ?
        videoFiles.map((video, index) => {
          return (
            <div key={index}>
              <video className="portfolioModal-img" controls >
                <source src={video.file} type="video/mp4" />
              </video>
              <p className="carousel-caption">{video.description}</p>
            </div>
          )
        })
        : ''}
        </Carousel>
        
        <h2>{title}</h2>
        <h4>개발 기간 : {span}</h4>
        <p><span className="paragraph-space"></span>{content}</p>

        <h3>Github Repository</h3>
        <a className="githubRepo" 
        href={githubRepo.client} 
        target="_blank" rel="noopener noreferrer">Client</a>
        <a className="githubRepo"
        href={githubRepo.server} 
        target="_blank" rel="noopener noreferrer">Server</a>

      </div>
      </Modal>
    </div>
  );
}
