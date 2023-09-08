import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Slider from 'react-input-slider'; // Importe o Slider
import './Form.css';
import VideoSection from './VideoSection';

function Form() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [consumption, setConsumption] = useState(0); // Estado para o preço da conta
  const [totalWithDiscount, setTotalWithDiscount] = useState(0);

  const [totalWithDiscount12, settotalWithDiscount12] = useState(0);

  const validateName = () => {
    if (name.trim() === '') {
      setNameError('O campo nome é obrigatório');
      return false;
    }
    setNameError('');
    return true;
  };

  const validateEmail = () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(email)) {
      setEmailError('Digite um email válido');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePhone = () => {
    const phonePattern = /^[0-9]{10,11}$/;
    if (!phonePattern.test(phone)) {
      setPhoneError('Digite um número de celular válido (10 ou 11 dígitos)');
      return false;
    }
    setPhoneError('');
    return true;
  };

  // Função para formatar números substituindo ponto por vírgula
  const formatNumber = (number) => {
    return number.toString().replace(/\./g, ',');
  };

  // Função para calcular o desconto com base no novo valor do controle deslizante
  const calculateDiscount = (value) => {
    const numericConsumo = parseFloat(value);
    const formattedTotalDesc = numericConsumo - numericConsumo * 0.11; // Cálculo de desconto
    const formattedTotalDesc12 = ((numericConsumo - formattedTotalDesc) * 12).toFixed(2);

    setTotalWithDiscount(formatNumber(formattedTotalDesc.toFixed(2)));
    settotalWithDiscount12(formatNumber(formattedTotalDesc12));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();

    if (isNameValid && isEmailValid && isPhoneValid) {
      const numericConsumo = parseFloat(consumption);

      const formattedTotalDesc = numericConsumo - (numericConsumo * 11 / 100);

      const templateParams = {
        name,
        email,
        phone,
        formattedTotalDesc,
      };

      emailjs
        .send(
          'service_i0pjw4c',
          'template_z97ve9a',
          templateParams,
          'aMELLYrB_LRCWtERA'
        )
        .then((response) => {
          console.log('Email sent successfully!', response);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    }
  };

  return (
    <section className="form-section">
      <div>
        <VideoSection /> {/* Renderize o componente VideoSection aqui */}
      </div>
      <h2>
        Garanta até <span className="discount">20%</span> de desconto na sua
        conta de energia
      </h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="consumption">Preço da conta:</label>
          <input
            type="text"
            id="consumption"
            placeholder="R$ 0,00"
            value={consumption}
            onChange={(e) => setConsumption(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="consumption">Preço da conta:</label> {/* Corrigido aqui */}
          <Slider
            className="custom-slider" // Classe CSS personalizada para o controle deslizante
            styles={{
              track: {
                width: '325px',
              },
              active: {
                backgroundColor: '#d2b756', // Cor personalizada para o controle deslizante
              },
              thumb: {
                backgroundColor: '#d2b756', // Cor do botão do controle deslizante
              },
            }}
            axis="x"
            x={consumption}
            onChange={({ x }) => {
              setConsumption(x); // Atualize o preço da conta com o valor do controle deslizante
              calculateDiscount(x); // Calcule o desconto com base no novo valor
            }}
            xmin={0}
            xmax={2000} // Defina o valor máximo que deseja permitir no controle deslizante
          />
        </div>
        <div className="form-group">
          <p className="total-price">
            Você pagará com desconto: <br></br>
            <span className="discount"> R$ {totalWithDiscount}</span>
          </p>
        </div>
        <div className="form-group">
          <p className="total-price">
            Economize por ano até: <br></br>
            <span className="discount"> R$ {totalWithDiscount12}</span>
          </p>
        </div>
        <div className="form-group">
          <p className="total-price">
            Preencha o formulário para conseguir seu{' '}
            <span className="discount">Desconto</span>
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
            required
          />
          {nameError && <span className="error-message">{nameError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            required
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={validatePhone}
            required
          />
          {phoneError && <span className="error-message">{phoneError}</span>}
        </div>
        <div className="form-group">
          <button type="submit">Enviar</button>
        </div>
        <div className="form-group">
          <p>
            Lembrando que é apenas um cálculo estimativo, e para solicitar o
            desconto, entre em contato com nosso comercial.
          </p>
        </div>
      </form>
    </section>
  );
}

export default Form;
