import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='contact-info'>
        <div className='contact-item'>
          <h3>WhatsApp:</h3>
          <p>+55 (65) 9 9639-7994</p>
        </div>
        <div className='contact-item'>
          <h3>Email:</h3>
          <p>gerente.comercial@br5beneficios.com.br</p>
        </div>
        <div className='contact-item'>
          <h3>Site Oficial:</h3>
          <p>https://br5beneficios.com.br/</p>
        </div>
      </div>
      <div className='map-container'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.8709881513314!2d-56.08769443618752!3d-15.598540296957525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1b8accc7941%3A0x71198c994985589d!2sAv.%20Joao%20Gomes%20M%20Sobrinho%2C%20285%20-%20Are%C3%A3o%2C%20Cuiab%C3%A1%20-%20MT%2C%2078008-800!5e0!3m2!1spt-BR!2sbr!4v1693426640762!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Empresa"
        ></iframe>
      </div>
      <div className='whatsapp-button'>
        <a href='https://api.whatsapp.com/send?phone=65996428611' target='_blank' rel='noopener noreferrer'>
          <FaWhatsapp className='whatsapp-icon' size={40} />
        </a>
      </div>
      <p className='rights-reserved'>&copy; 2023 BR5 Benefícios. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
