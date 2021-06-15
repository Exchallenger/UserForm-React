import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/js/all.js';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LBtn = styled.button`
  padding: 4px;
  border-radius: 4px;
  outline: none;
  background-color: ${props => props.curpage ===1 ? 'gray' : 'skyblue'};
  color: white;
  border: none;
  cursor: ${props => props.curpage ===1 ? 'inital' : 'pointer'};
  font-size: 16px;
`;
const RBtn = styled.button`
  padding: 4px;
  border-radius: 4px;
  outline: none;
  background-color: ${props => props.pagelen===1 ||(props.pagelen > 1 && props.pagelen) === props.curpage ? 'gray':'skyblue'};
  color: white;
  border: none;
  cursor: ${props => props.pagelen===1 ||(props.pagelen > 1 && props.pagelen) === props.curpage ? 'inital':'pointer'};;
  font-size: 16px;
`;

const Page = styled.div`
  margin: 0 0.5em;
  font-size: 18px;
  line-height: 28px;
`;



const Footer = ({user,pagelen,curpage,onCurpage}) => {

  const LClick = () =>{
    onCurpage('left');
  }
  const RClick = () =>{
    onCurpage('right');
  }


    return (
        <Container>
        <LBtn onClick={LClick} curpage={curpage} disabled={curpage===1} >
          <i className="fas fa-arrow-left"></i>
          </LBtn>
        <Page>{curpage}</Page>
        <RBtn onClick={RClick} pagelen={pagelen} curpage={curpage} disabled={pagelen===1 || (curpage>1 && curpage)===pagelen}>
          <i className="fas fa-arrow-right"></i>
          </RBtn>
      </Container>
    );
};

export default Footer;