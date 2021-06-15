import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const AddContainer = styled.form``;


const Title = styled.h3`
  margin: 0.4em 0px;
`;

const InputContainer = styled.div`
  display: flex;
`;
const ForFlex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.2em 0.7em 0 0;
`;

const Content = styled.div`
  margin: 0 0.2em 0.2em 0;
`;

const NameInput = styled.input`
  outline: none;
  border: 1px solid;
  border-color:${props => props.vaName ? 'black' : 'red'};
  padding: 0.3em 0.3em;
`;
const EmailInput = styled.input`
outline: none;
  border: 1px solid;
  border-color:${props => props.vaEmail ? 'black' : 'red'};
  padding: 0.3em 0.3em;
`;
const NickInput = styled.input`
outline: none;
  border: 1px solid;
  border-color:${props => props.vaNick ? 'black' : 'red'};
  padding: 0.3em 0.3em;
`;

const AddBtn  = styled.button`
  margin: 1em 0;
  outline: none;

`;

const Adduser = ({user,getUser}) => {
    const [vaName, setVaname] = useState(true);
    const [vaEmail, setVaEmail] = useState(true);
    const [vaNick, setVaNick] = useState(true);
    const [Btn,setBtn] = useState(true);


  
    useEffect(() =>{
      if(vaEmail&&vaNick&&vaName&&nameRef.current.value.length>2&&emailRef.current.value.length>4&&nicknameRef.current.value.length>2){
        setBtn(false)
      }else{setBtn(true)}
    },[vaName,vaNick,vaEmail])
    const formRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const nicknameRef = useRef();
    const onSubmit = e =>{
      e.preventDefault();
      getUser({
        name: nameRef.current.value,
        email: emailRef.current.value,
        nickname: nicknameRef.current.value
      })
      formRef.current.reset();
      setBtn(true);
      }
  
    const CheckName = () =>{
      let regExp = /^[가-힣a-zA-Z\s\d]{3,15}$/;
      if(regExp.test(nameRef.current.value))
        {
        setVaname(true)
          }else{
            setVaname(false);
            }
    }
    const CheckNickName = () =>{
      let regExp = /^[가-힣a-zA-Z\s\d]{3,15}$/;
      if(regExp.test(nicknameRef.current.value))
        {
        setVaNick(true);}else{
          setVaNick(false);}
    }
  
    const CheckEmail = () =>{
        let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(regExp.test(emailRef.current.value))
        {
        setVaEmail(true);}else{
          setVaEmail(false);
            }
    }

    return (
        <AddContainer onSubmit={onSubmit} ref={formRef}>
      <Title>Add User</Title>
      <InputContainer>
        <ForFlex><Content>name</Content><NameInput vaName={vaName} ref={nameRef} onChange={CheckName}/></ForFlex>
        <ForFlex><Content>email</Content><EmailInput vaEmail={vaEmail} ref={emailRef} onChange={CheckEmail}/></ForFlex>
        <ForFlex><Content>nickname</Content><NickInput vaNick={vaNick} ref={nicknameRef} onChange={CheckNickName}/></ForFlex>
      </InputContainer>
      <AddBtn type="submit" disabled={Btn}>Add</AddBtn>
      </AddContainer>
    );
};

export default Adduser;