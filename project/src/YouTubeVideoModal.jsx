// YouTubeVideoModal.jsx
import React from 'react';
import Modal from 'react-modal';

const YouTubeVideoModal = ({ isOpen, closeModal, videoId }) => {
 return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="YouTube Video Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          
          padding: '0', // Remove padding
          borderRadius: '8px',
          width: '90%', // Increase width
          maxWidth: '800px', // Increase maxWidth
          height: '90%', // Increase height
          maxHeight: '600px', // Increase maxHeight
          overflow: 'hidden', // Hide overflow
          display: 'flex', // Use flexbox for centering
          justifyContent: 'center', // Center horizontally
          alignItems: 'center' // Center vertically
        }
      }}
    >
      <button onClick={closeModal} style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        cursor: 'pointer'
      }}>Close</button>
<iframe width="800" height="600" src="https://www.youtube.com/embed/rhVqSATlmQs?si=OjI2Q2dmuNsEeqXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    </Modal>
 );
};

export default YouTubeVideoModal;