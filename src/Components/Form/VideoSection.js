import React from 'react';
import video from '../../assets/Video-Expertise.mp4'

const VideoSection = () => {
  return (
    <section className="video-section" style={{ margin: '20px' }}>
      <h2>Está cansando de pagar caro na conta de energia?</h2>
      <p>A Expertise tem a solução!</p>
      <iframe
        width="300"
        height="400"
        src={video}
        title="Vídeo sobre a solução da Expertise"
        style={{ border: '0', borderRadius: '10px', margin: '0 auto'}}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </section>
  );
}

export default VideoSection;
