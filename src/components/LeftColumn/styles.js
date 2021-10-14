import styled from 'styled-components';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare, FaPhoneSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Container = styled.div`
  padding-top: 5%;
  background: var(--color-orange);
  width: 30%;

  @media (max-width: 425px) {
    height: 200px;
    width: 100%;
  }
`;

const Name = styled.h1`
  font-family: 'averta-bold';
  color: var(--color-background);
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  font-family: 'averta-regular';
  font-weight: lighter;
  color: var(--color-background);
`;

const Contato = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 40px;
  margin-top: 50px;
`;

const LinkedinIcon = styled(BsLinkedin)`
  font-size: 25px;
  color: var(--color-background);
`;
const GithubIcon = styled(FaGithubSquare)`
  font-size: 29px;
  color: var(--color-background);
`;
const PhoneIcon = styled(FaPhoneSquare)`
  font-size: 29px;
  color: var(--color-background);
`;
const EmailIcon = styled(MdEmail)`
  font-size: 36px;
  color: var(--color-background);
`;

export { Container, Name, Title, Contato, LinkedinIcon, GithubIcon, PhoneIcon, EmailIcon };
