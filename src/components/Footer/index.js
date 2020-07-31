import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/kemelycardozo/">
        <img className="Logo" src={Logo} alt="KemFlix logo" />
        {/* <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" /> */}
      </a>
      <p>
        Orgulhosamente criado durante a Imersão React da Alura por
        {' '}
        <a href="https://www.linkedin.com/in/kemelycardozo/">
          Kemely Cardozo
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
