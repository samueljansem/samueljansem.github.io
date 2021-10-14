import React from 'react';
import {
  Container,
  Wrapper,
  Perfil,
  PerfilTitle,
  PerfilDescription,
  Experiencias,
  ExperienciasTitle,
  ExperienciaItem,
  ExperienciaItemTitle,
  ExperienciaItemDescription,
} from './styles';

export default function Portugues() {
  return (
    <Container>
      <Wrapper>
        <Perfil>
          <PerfilTitle>PERFIL</PerfilTitle>
          <PerfilDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod laoreet sapien nec
            suscipit. Donec accumsan vel arcu sit amet semper. Mauris auctor, purus nec tincidunt
            tincidunt, elit metus vehicula tortor, non imperdiet ligula nulla quis ante. In finibus
            rhoncus sapien in lobortis.
          </PerfilDescription>
        </Perfil>
        <Experiencias>
          <ExperienciasTitle>EXPERIÊNCIAS</ExperienciasTitle>

          <ExperienciaItem>
            <ExperienciaItemTitle>Jabil do Brasil</ExperienciaItemTitle>
            <ExperienciaItemDescription>
              Nunc id efficitur enim. Nunc tempor vehicula turpis sed fringilla. Cras congue erat
              mattis nunc venenatis iaculis. Curabitur porttitor mauris purus, et lobortis sapien
              malesuada sed. Praesent facilisis mi at vestibulum ultricies.
            </ExperienciaItemDescription>
          </ExperienciaItem>

          <ExperienciaItem>
            <ExperienciaItemTitle>Sinqia</ExperienciaItemTitle>
            <ExperienciaItemDescription>
              Phasellus tempus, orci nec suscipit tempor, lacus mi malesuada velit, sit amet maximus
              sapien felis a tellus. Cras justo nisi, sollicitudin quis commodo euismod, porttitor
              non erat. Nunc sit amet porttitor dui. Duis quam turpis, aliquam eget justo vitae,
              suscipit semper nisl. Cras ut rhoncus nibh.
            </ExperienciaItemDescription>
          </ExperienciaItem>

          <ExperienciaItem>
            <ExperienciaItemTitle>Pense Open</ExperienciaItemTitle>
            <ExperienciaItemDescription>
              Sed lobortis velit sit amet imperdiet tempor. Praesent quis maximus enim. Aliquam
              lacinia turpis nec lectus posuere, dictum efficitur neque porta. Praesent nec porta
              enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Donec sed nulla sed neque semper mollis at eget mauris.
            </ExperienciaItemDescription>
          </ExperienciaItem>
        </Experiencias>
      </Wrapper>
    </Container>
  );
}
