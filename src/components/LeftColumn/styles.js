import styled from 'styled-components';
import { BsLinkedin, FaGithubSquare, FaPhoneSquare, MdEmail } from '../../styles/Icons';

const Container = styled.div`
  padding-top: 5%;
  background: var(--orange);
  width: 30%;

  @media (max-width: 425px) {
    height: 200px;
    width: 100%;
  }
`;

const Name = styled.h1`
  font-family: 'averta-bold';
  color: var(--background);
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  font-family: 'averta-regular';
  font-weight: lighter;
  color: var(--background);
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
  color: var(--background);
`;
const GithubIcon = styled(FaGithubSquare)`
  font-size: 29px;
  color: var(--background);
`;
const PhoneIcon = styled(FaPhoneSquare)`
  font-size: 29px;
  color: var(--background);
`;
const EmailIcon = styled(MdEmail)`
  font-size: 36px;
  color: var(--background);
`;

export { Container, Name, Title, Contato, LinkedinIcon, GithubIcon, PhoneIcon, EmailIcon };
