import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 1185px;
  margin-top: 15px;
`;

const RightColumn = styled.div`
  padding-top: 5%;
  width: 70%;
  height: 100%;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const Perfil = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
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

const Experiencias = styled.div``;
const ExperienciasTitle = styled.h2``;
const ExperienciaItem = styled.div``;
const ExperienciaItemTitle = styled.h3``;
const ExperienciaItemDescription = styled.p``;

export {
  Container,
  RightColumn,
  ExperienciaItem,
  ExperienciaItemDescription,
  ExperienciaItemTitle,
  Experiencias,
  ExperienciasTitle,
  Perfil,
  PerfilDescription,
  PerfilTitle,
};
