import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const RBtn = styled.button``;

const Page = styled.div`
  margin: 0 0.5em;
`;

const LBtn = styled.button``;

const Footer = () => {
    return (
        <Container>
        <LBtn>left</LBtn>
        <Page>1</Page>
        <RBtn>right</RBtn>
      </Container>
    );
};

export default Footer;