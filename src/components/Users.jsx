
import {  useEffect, useRef, useState } from 'react';
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
  margin-right: 1em;
`;
// Users Form

const UserContainer = styled.div``;

const Count = styled.div`
  font-size: 12px;
  color: grey;
`;
const ListContainer = styled.div`
  margin: 1.5em 0 3em 0;
  height:100px;
`;

const SearchInput = styled.input`
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

const SavBtn = styled.button`
  outline: none;
  border: none;
  margin-right: 0.5em;
  transition: 0.5s;
  background-color: ${props => props.Btn ? 'rgb(203,203,203)' : 'rgb(62,120,168)'};
  color: white;
  border-radius: 4px;
`;

const DelBtn = styled.button`
  outline: none;
  background-color:rgb(138,34,37);
  color: white;
  border: none;
  border-radius: 4px;
`;





function User({user,reviseUser,deleteUser,getSearch,curpage}) {
  const [vaName, setVaname] = useState(true);
  const [vaEmail, setVaEmail] = useState(true);
  const [vaNick, setVaNick] = useState(true);
  const [Btn,setBtn] = useState(false);
  const [InputStatus, setInputStatus] = useState();
  const [searchdata, setSearchdata] = useState(user);
  const [nowemail, setNowmail] = useState();

   const handleRadioBtn = (Btnname) =>{
     setInputStatus(Btnname);
     setVaEmail(true);
     setVaNick(true);
     setVaname(true);
     setNowmail(Btnname);
   }

  const nameRef = useRef();
  const emailRef = useRef();
  const nicknameRef = useRef();
  const searchRef = useRef();


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
      let regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(regExp.test(emailRef.current.value))
      {
      setVaEmail(true);
      setBtn(false);
    }else{
        setVaEmail(false);
        setBtn(true)
          }
  }

  const onSave = () =>{
   let check = user.filter(r =>(r.email !== nowemail) && (r.email === emailRef.current.value))
   if(check.length===1){
    alert("중복된 이메일이 존재합니다");
   }else if(nowemail===emailRef.current.value){ //이메일 값이 안바뀜
    setInputStatus('');
    let chanuser = {name:nameRef.current.value, email:emailRef.current.value, nickname:nicknameRef.current.value};
    reviseUser(chanuser);
   }else{
    setInputStatus(''); //이메일 값이 바뀜
    let chanuser = {name:nameRef.current.value, email:emailRef.current.value, nickname:nicknameRef.current.value};
    reviseUser(chanuser,nowemail);
   }
  }
  const onDelete = (email) =>{
    setSearchdata(searchdata.filter((r) => r.email !==email))
    deleteUser(email);
  }

  const onSearch = () =>{
    let str = searchRef.current.value;
    let regExp = new RegExp(str);
    let res = user.filter(r => regExp.test(r.name));
    setSearchdata(res);
    if(searchRef.current.value===''){
        setSearchdata(user);
        getSearch(user);
    }else{
        getSearch(res);
        setSearchdata(res);
    }
  }

useEffect(() =>{
  onSearch();
},[user])
  
  return (
      <UserContainer>
      <Title>Users</Title>
      <Count>{searchdata.length} users</Count>
      <SearchInput placeholder="Search by username" ref={searchRef} onChange={onSearch}/>
      <ListContainer>
        {searchdata.map((r,idx) => {
            if(Number(Math.ceil((idx+1)/5))!==curpage){
                return null;
            }
            return(
            <ContentContainer key={r.email}>
            <RadioBtn type="radio" id={r.name} name="user" checked={InputStatus === r.email} onChange={() => handleRadioBtn(r.email)}/>
            {InputStatus === r.email ? 
            <>
            <NameInput vaName={vaName} defaultValue={r.name} onChange={CheckName}  ref={nameRef}/>
            <EmailInput vaEmail={vaEmail} defaultValue={r.email} onChange={CheckEmail} ref={emailRef}/>
            <NickInput vaNick={vaNick}  defaultValue={r.nickname} onChange={CheckNickName} ref={nicknameRef}/>
            <SavBtn Btn={Btn} disabled={Btn} onClick={onSave}>Save</SavBtn>
            <DelBtn onClick={() =>onDelete(r.email)}>Delete</DelBtn>
            </>
            :
            <>
            <Label  htmlFor={r.email}>{r.name}</Label>
            <Label  htmlFor={r.email}>{r.email}</Label>
            <Label htmlFor={r.email}>{r.nickname}</Label>
            </>}
          </ContentContainer>
            )
        })}
       </ListContainer>
      </UserContainer>
  );
    }

export default User;
