
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

//common

const Title = styled.h3`
  margin: 0.4em 0px;
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
// Users Form

const UserContainer = styled.div``;

const Count = styled.div`
  font-size: 12px;
  color: grey;
`;
const ListContainer = styled.div`
  margin: 1.5em 0 3em 0;
`;

const SearchForm = styled.input`
  margin: 0.5em 0px;
  width: 200px;
  font-size: 16px;
  padding: 0.3em;
  `;

const ContentContainer = styled.div`
  display: flex;
  margin: 0.3em 0;
`;

const RadioBtn = styled.input``;

const Label = styled.label`
  margin: 0px 0.5em;
`;

const SavBtn = styled.button``;

const DelBtn = styled.button``;





function User({user,reviseUser,deleteUser}) {
  const [vaName, setVaname] = useState(true);
  const [vaEmail, setVaEmail] = useState(true);
  const [vaNick, setVaNick] = useState(true);
  const [Btn,setBtn] = useState(false);
  const [InputStatus, setInputStatus] = useState();

   const handleRadioBtn = (Btnname) =>{
     setInputStatus(Btnname);
     setVaEmail(true);
     setVaNick(true);
     setVaname(true);
   }

  const nameRef = useRef();
  const emailRef = useRef();
  const nicknameRef = useRef();


  const CheckName = () =>{
    let regExp = /^[가-힣a-zA-Z\s\d]{3,15}$/;
    if(regExp.test(nameRef.current.value))
      {
      setVaname(true);
      setBtn(false);
        }else{
          setVaname(false);
          setBtn(true)
          }
  }
  const CheckNickName = () =>{
    let regExp = /^[가-힣a-zA-Z\s\d]{3,15}$/;
    if(regExp.test(nicknameRef.current.value))
      {
      setVaNick(true);
      setBtn(false);
    }else{
        setVaNick(false);
        setBtn(true)
    }
  }

  const CheckEmail = () =>{
      let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(regExp.test(emailRef.current.value))
      {
      setVaEmail(true);
      setBtn(false);
    }else{
        setVaEmail(false);
        setBtn(true)
          }
  }

  const onSave = (idx) =>{
    setInputStatus('');
    let user = {name:nameRef.current.value, email:emailRef.current.value, nickname:nicknameRef.current.value};
    reviseUser(idx,user);
    setBtn(false);
  }
  const onDelete = (idx) =>{
    deleteUser(idx);

  }
  
  return (
    
      <UserContainer>
      <Title>Users</Title>
      <Count>{user.length} users</Count>
      <SearchForm placeholder="Search by username"/>
      <ListContainer>
        {user.map((r,idx) => (<ContentContainer>
          <RadioBtn type="radio" id={r.name} name="user" checked={InputStatus === r.email} onClick={() => handleRadioBtn(r.email)}/>
          {InputStatus=== r.email ? <NameInput vaName={vaName} defaultValue={r.name} onChange={CheckName}  ref={nameRef}/> : <Label for={r.email}>{r.name}</Label>}
          {InputStatus=== r.email ? <EmailInput vaEmail={vaEmail} defaultValue={r.email} onChange={CheckEmail} ref={emailRef}/>: <Label for={r.email}>{r.email}</Label>}
          {InputStatus=== r.email ? <NickInput vaNick={vaNick}  defaultValue={r.nickname} onChange={CheckNickName} ref={nicknameRef}/> : <Label for={r.email}>{r.nickname}</Label>}
          {InputStatus=== r.email && <SavBtn disabled={Btn} onClick={()=>onSave(idx)}>Save</SavBtn>}
          {InputStatus=== r.email && <DelBtn onClick={() =>onDelete(idx)}>Delete</DelBtn>}
        </ContentContainer>))}
       </ListContainer>
      </UserContainer>
  );
    }

export default User;
