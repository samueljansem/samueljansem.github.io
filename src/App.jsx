import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Layout, Container } from './Styles';
import { LeftColumn, RightColumn } from './components';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Container>
          <LeftColumn />
          <RightColumn />
        </Container>
      </Layout>
    </>
  );
}
