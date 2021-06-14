
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './App.css';

//common

const Container = styled.div`
  
  margin: 4em 4em 0 4em;
  border: 2px solid skyblue;
  border-radius: 12px;
  padding: 2em 2em 1em 2em;
  @media screen and (min-width:1000px){
    width: 50%;
    
    margin: auto;
    margin-top: 8em;
  }
`;

const Title = styled.h3`
  margin: 0.4em 0px;
`;

// Add User Form

const AddContainer = styled.form``;

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


// Footer

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const RBtn = styled.button``;

const Page = styled.div`
  margin: 0 0.5em;
`;

const LBtn = styled.button``;


function App() {
  const [vaName, setVaname] = useState(true);
  const [vaEmail, setVaEmail] = useState(true);
  const [vaNick, setVaNick] = useState(true);
  const [Btn,setBtn] = useState(true);
  const [user, setUser]= useState([
    {name:'Steve',email:'steve@gmail.com',nickname:'civilian1'},
    {name:'Julie',email:'julie@gmail.com',nickname:'civilian2'},
    {name:'Frank',email:'frank@gmail.com',nickname:'mafia1'},
  ]);
  useEffect(() =>{
    console.log(nameRef.current.value.length);
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
    setUser(user => [...user,{
      name: nameRef.current.value,
      email: emailRef.current.value,
      nickname: nicknameRef.current.value
    }]);
    formRef.current.reset();
    }

  const CheckName = () =>{
    let regExp = /^[가-힣a-zA-Z\s\d]{3,15}$/;
    if(regExp.test(nameRef.current.value))
      {console.log('good');
      setVaname(true)
        }else{
          setVaname(false);
          console.log('bad');}
  }
  const CheckNickName = () =>{
    let regExp = /^[가-힣a-zA-Z\s\d]{3,15}$/;
    if(regExp.test(nicknameRef.current.value))
      {console.log('good');
      setVaNick(true);}else{
        setVaNick(false);
          console.log('bad');}
  }

  const CheckEmail = () =>{
    console.log();
      let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(regExp.test(emailRef.current.value))
      { console.log('good');
      setVaEmail(true);}else{
        setVaEmail(false);
          console.log('bad');}
  }

  useEffect(() =>{

  },[nameRef])

  return (
    <Container>

      {/* Add user Form */}
      <AddContainer onSubmit={onSubmit} ref={formRef}>
      <Title>Add User</Title>
      <InputContainer>
        <ForFlex><Content>name</Content><NameInput vaName={vaName} ref={nameRef} onChange={CheckName}/></ForFlex>
        <ForFlex><Content>email</Content><EmailInput vaEmail={vaEmail} ref={emailRef} onChange={CheckEmail}/></ForFlex>
        <ForFlex><Content>nickname</Content><NickInput vaNick={vaNick} ref={nicknameRef} onChange={CheckNickName}/></ForFlex>
      </InputContainer>
      <AddBtn type="submit" disabled={Btn}>Add</AddBtn>
      </AddContainer>

      {/* User Form */}
      <UserContainer>
      <Title>Users</Title>
      <Count>{user.length} users</Count>
      <SearchForm placeholder="Search by username"/>
      <ListContainer>
        {user.map(r => (<ContentContainer>
          <RadioBtn type="radio" id={r.name} name="user"/>
          <Label for={r.name}>{r.name}</Label>
          <Label for={r.name}>{r.email}</Label>
          <Label for={r.name}>{r.nickname}</Label>
          <SavBtn>Save</SavBtn>
          <DelBtn>Delete</DelBtn>
        </ContentContainer>))}
        {user.map(r => <div>
          <input type="text" value={r.name}/>
          <input type="email" value={r.email}/> 
          <input type="text" value={r.nickname}/>
        </div>)}
      </ListContainer>
      </UserContainer>

      {/* pages */}
      <Footer>
        <LBtn>left</LBtn>
        <Page>1</Page>
        <RBtn>right</RBtn>
      </Footer>

    </Container>
  );
}

export default App;
