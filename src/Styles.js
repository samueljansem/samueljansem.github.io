import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  height: 1701px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.main`
  display: flex;
  height: 1678px;
  width: 1190px;
  box-shadow: 1px 1px 10px 0 rgb(0 0 0 / 35%);

  @media (min-width: 425px) and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    box-shadow: none;
  }

  @media (max-width: 425px) {
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: none;
  }
`;

export { Layout, Container };
