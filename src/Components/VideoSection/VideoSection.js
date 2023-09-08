import React from 'react';
import video from '../../assets/Video-Expertise.mp4';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <section className="video-section">
      <h2>Está cansado de pagar caro na conta de energia?</h2>
      <p>A BR5 Benefícios tem a solução!</p>
      <div className="video-container">
        <iframe
          width="300"
          height="400"
          src={video}
          title="Vídeo sobre a solução da Expertise"
          style={{ border: '0', borderRadius: '10px' }}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
