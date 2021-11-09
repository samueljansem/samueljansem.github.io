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
  Title4,
} from './styles';

export default function Portugues() {
  return (
    <Container>
      <Wrapper>
        <Perfil>
          <Title2>PERFIL</Title2>
          <P>
            Apaixonado por tecnologia, sempre buscando ampliar e compartilhar meu conhecimento na
            área de desenvolvimento web utilizando das melhores práticas, sempre prezando pelo
            trabalho em equipe e pela entrega de valor ao cliente final.
          </P>
        </Perfil>
        <Experiencias>
          <Title2>EXPERIÊNCIAS</Title2>

          <ExperienciaItem>
            <Title3>Jabil do Brasil</Title3>
            <P>
              Responsável pelo desenvolvimento de software desde a{' '}
              <strong>captação e análise de requisitos</strong>, codificação, publicação em{' '}
              <strong>ambiente de testes</strong> e validação junto ao usuário final. Atuando na
              modelagem de banco de dados <strong>SQL Server</strong> e desenvolvimento web
              utilizando <strong>.NET</strong>.
            </P>
          </ExperienciaItem>

          <ExperienciaItem>
            <Title3>Sinqia</Title3>
            <P>
              Responsável pelo desenvolvimento e suporte de aplicações para a área de Previdência.
              Desenvolvendo <strong>API&apos;s</strong> utilizando <strong>C# .NET</strong>, atuando
              no front-end com <strong>AngularJS</strong> e dando manutenção em aplicações WebForms
              já existentes.
            </P>
          </ExperienciaItem>

          <ExperienciaItem>
            <Title3>Pense Open</Title3>
            <P>
              Responsável pelo desenvolvimento e suporte de soluções web para o cliente MRV
              Engenharia. Desenvolvendo <strong>API&apos;s REST</strong> aplicando conceito de
              &nbsp;<strong>DDD/CQRS</strong>, modelagem de banco de dados &nbsp;
              <strong>SQL Server</strong> via <strong>Entity Framework</strong>
            </P>
          </ExperienciaItem>
        </Experiencias>

        <Skills>
          <SkillsColumn>
            <Title2>Habilidades técnicas</Title2>
            <SkillsList>
              <SkillItem>
                <Span>
                  <strong>Captação e análise de requisitos</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>SQL</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>Entity Framework</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>.NET</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>API&apos;s REST</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>React</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>SOLID</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>DDD</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>CQRS</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>Azure DevOps</strong>
                </Span>
              </SkillItem>
            </SkillsList>
          </SkillsColumn>
          <SkillsColumn>
            <Title2>Habilidades comportamentais</Title2>
            <SkillsList>
              <SkillItem>
                <Span>
                  <strong>Bom relacionamento interpessoal</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>Facilidade no aprendizado</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>Pensamento criativo</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>Gerenciamento de tempo</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>Colaborativo</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>Organizado</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>Focado</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>Comprometido</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>Adaptabilidade</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>Atento a melhorias</strong>
                </Span>
              </SkillItem>
              <SkillItem>
                <Span>
                  <strong>Visão de negócio</strong>
                </Span>
              </SkillItem>
            </SkillsList>
          </SkillsColumn>
        </Skills>

        <Formacao>
          <Title2>Formação Acadêmica</Title2>

          <Title4>Bacharelado em Sistemas de Informação</Title4>
          <Span>Pontifícia Universidade Católica de Minas Gerais | (2019-2023)</Span>

          <Title4>Técnico em Automação Industrial</Title4>
          <Span>
            Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais | (2014-2018)
          </Span>
        </Formacao>
      </Wrapper>
    </Container>
  );
}
