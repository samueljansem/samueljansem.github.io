import React from 'react';
import {
  Container,
  Wrapper,
  Title2,
  Title3,
  P,
  Perfil,
  Experiencias,
  ExperienciaItem,
  Skills,
  SkillsColumn,
  SkillsList,
  SkillItem,
  Span,
  Formacao,
} from './styles';

export default function Portugues() {
  return (
    <Container>
      <Wrapper>
        <Perfil>
          <Title2>PERFIL</Title2>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod laoreet sapien nec
            suscipit. Donec accumsan vel arcu sit amet semper. Mauris auctor, purus nec tincidunt
            tincidunt, elit metus vehicula tortor, non imperdiet ligula nulla quis ante. In finibus
            rhoncus sapien in lobortis.
          </P>
        </Perfil>
        <Experiencias>
          <Title2>EXPERIÊNCIAS</Title2>

          <ExperienciaItem>
            <Title3>Jabil do Brasil</Title3>
            <P>
              Nunc id efficitur enim. Nunc tempor vehicula turpis sed fringilla. Cras congue erat
              mattis nunc venenatis iaculis. Curabitur porttitor mauris purus, et lobortis sapien
              malesuada sed. Praesent facilisis mi at vestibulum ultricies.
            </P>
          </ExperienciaItem>

          <ExperienciaItem>
            <Title3>Sinqia</Title3>
            <P>
              Phasellus tempus, orci nec suscipit tempor, lacus mi malesuada velit, sit amet maximus
              sapien felis a tellus. Cras justo nisi, sollicitudin quis commodo euismod, porttitor
              non erat. Nunc sit amet porttitor dui. Duis quam turpis, aliquam eget justo vitae,
              suscipit semper nisl. Cras ut rhoncus nibh.
            </P>
          </ExperienciaItem>

          <ExperienciaItem>
            <Title3>Pense Open</Title3>
            <P>
              Sed lobortis velit sit amet imperdiet tempor. Praesent quis maximus enim. Aliquam
              lacinia turpis nec lectus posuere, dictum efficitur neque porta. Praesent nec porta
              enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Donec sed nulla sed neque semper mollis at eget mauris.
            </P>
          </ExperienciaItem>
        </Experiencias>

        <Skills>
          <SkillsColumn>
            <Title2>Habilidades técnicas</Title2>
            <SkillsList>
              <SkillItem>
                <Span>Captação e análise de requisitos</Span>
              </SkillItem>
              <SkillItem>
                <Span>SQL</Span>
              </SkillItem>
              <SkillItem>
                <Span>Entity Framework</Span>
              </SkillItem>
              <SkillItem>
                <Span>.NET</Span>
              </SkillItem>
              <SkillItem>
                <Span>API&apos;s REST</Span>
              </SkillItem>
              <SkillItem>
                <Span>React</Span>
              </SkillItem>
              <SkillItem>
                <Span>SOLID</Span>
              </SkillItem>
              <SkillItem>
                <Span>DDD</Span>
              </SkillItem>
              <SkillItem>
                <Span>CQRS</Span>
              </SkillItem>
              <SkillItem>
                <Span>Azure DevOps</Span>
              </SkillItem>
            </SkillsList>
          </SkillsColumn>
          <SkillsColumn>
            <Title2>Habilidades comportamentais</Title2>
            <SkillsList>
              <SkillItem>
                <Span>Bom relacionamento interpessoal</Span>
              </SkillItem>
              <SkillItem>
                <Span>Facilidade no aprendizado</Span>
              </SkillItem>
              <SkillItem>
                <Span>Pensamento criativo</Span>
              </SkillItem>
              <SkillItem>
                <Span>Gerenciamento de tempo</Span>
              </SkillItem>
              <SkillItem>
                <Span>Colaborativo</Span>
              </SkillItem>
              <SkillItem>
                <Span>Organizado</Span>
              </SkillItem>
              <SkillItem>
                <Span>Focado</Span>
              </SkillItem>
              <SkillItem>
                <Span>Comprometido</Span>
              </SkillItem>
              <SkillItem>
                <Span>Adaptabilidade</Span>
              </SkillItem>
              <SkillItem>
                <Span>Atento a melhorias</Span>
              </SkillItem>
              <SkillItem>
                <Span>Visão de negócio</Span>
              </SkillItem>
            </SkillsList>
          </SkillsColumn>
        </Skills>

        <Formacao>
          <Title2>Formação Acadêmica</Title2>
        </Formacao>
      </Wrapper>
    </Container>
  );
}
