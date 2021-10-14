import styled from 'styled-components';

const Container = styled.div`
  padding-top: 5%;
  width: 70%;
  height: 100%;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

const Perfil = styled.section`
  margin-bottom: 20px;
`;

const PerfilTitle = styled.h2`
  font-family: 'averta-regular';
  font-size: 22px;
  width: 100%;
`;

const PerfilDescription = styled.p`
  width: 100%;
  font-family: 'averta-regular';
  font-size: 14px;
  padding-top: 5px;
`;

const Experiencias = styled.section`
  margin-bottom: 20px;
`;

const ExperienciasTitle = styled.h2`
  font-family: 'averta-regular';
  font-size: 22px;
  width: 100%;
  margin-bottom: 10px;
`;

const ExperienciaItem = styled.div`
  margin-bottom: 20px;
`;

const ExperienciaItemTitle = styled.h3`
  font-family: 'averta-regular';
  font-size: 18px;
  width: 100%;
`;

const ExperienciaItemDescription = styled.p`
  width: 100%;
  font-family: 'averta-regular';
  font-size: 14px;
  padding-top: 5px;
`;

export {
  Container,
  Wrapper,
  ExperienciaItem,
  ExperienciaItemDescription,
  ExperienciaItemTitle,
  Experiencias,
  ExperienciasTitle,
  Perfil,
  PerfilDescription,
  PerfilTitle,
};
