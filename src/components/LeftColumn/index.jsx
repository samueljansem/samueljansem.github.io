import React from 'react';
import {
  Container,
  Name,
  Title,
  Contato,
  PhoneIcon,
  GithubIcon,
  EmailIcon,
  LinkedinIcon,
} from './styles';

export default function LeftColumn() {
  return (
    <Container>
      <Name>Samuel Jansem</Name>
      <Title>.NET | React</Title>
      <Contato>
        <a href="https://www.linkedin.com/in/samueljansem/" target="_blank" rel="noreferrer">
          <LinkedinIcon title="LinkedIn" />
        </a>
        <a href="mailto:samuel.jansem@gmail.com" target="_blank" rel="noreferrer">
          <EmailIcon title="Email" />
        </a>
        <a href="https://github.com/samueljansem" target="_blank" rel="noreferrer">
          <GithubIcon title="GitHub" />
        </a>
        <a href="tel:5531994851443" target="_blank" rel="noreferrer">
          <PhoneIcon title="Tel" />
        </a>
      </Contato>
    </Container>
  );
}
