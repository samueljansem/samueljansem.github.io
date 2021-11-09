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

const Title2 = styled.h2`
  font-family: 'averta-regular';
  font-size: 28px;
  width: 100%;
  margin-bottom: 10px;
`;

const Title3 = styled.h3`
  font-family: 'averta-regular';
  font-size: 24px;
  width: 100%;
`;

const Title4 = styled.h4`
  font-family: 'averta-regular';
  font-size: 20px;
  width: 100%;
`;

const P = styled.p`
  width: 100%;
  font-family: 'averta-regular';
  font-size: 16px;
`;

const Span = styled.span`
  color: var(--text);
  font-family: 'averta-regular';
  font-size: 16px;
`;

const Perfil = styled.section`
  margin-bottom: 30px;
`;

const PerfilDescription = styled.p`
  width: 100%;
  font-family: 'averta-regular';
  font-size: 14px;
`;

const Experiencias = styled.section`
  margin-bottom: 30px;
`;

const ExperienciaItem = styled.div`
  margin-bottom: 20px;
`;

const ExperienciaItemDescription = styled.p`
  width: 100%;
  font-family: 'averta-regular';
  font-size: 14px;
  padding-top: 5px;
`;

const Skills = styled.section`
  margin-bottom: 30px;
  display: flex;
`;

const SkillsColumn = styled.div`
  width: 50%;
`;

const SkillsList = styled.ul`
  list-style-type: circle;
  list-style-position: inside;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const SkillItem = styled.li`
  font-family: 'averta-regular';
  font-size: 14px;
  color: var(--orange);
  width: 100%;
`;

const Formacao = styled.section`
  margin-bottom: 20px;
`;

export {
  Container,
  Wrapper,
  Title2,
  Title3,
  Title4,
  P,
  Span,
  ExperienciaItem,
  ExperienciaItemDescription,
  Experiencias,
  Perfil,
  PerfilDescription,
  Skills,
  SkillsColumn,
  SkillsList,
  SkillItem,
  Formacao,
};
