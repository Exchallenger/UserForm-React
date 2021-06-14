
import { useRef, useState } from 'react';
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

const AddInput = styled.input`
  padding: 0.3em 0.3em;
`;

const AddBtn  = styled.button`
  margin: 1em 0;
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

const ContentInput = styled.div``;

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
  const icontent = ['username','email','nickname'];
  const [user, setUser]= useState([
    {name:'Steve',email:'steve@gmail.com',nickname:'civilian1'},
    {name:'Julie',email:'julie@gmail.com',nickname:'civilian2'},
    {name:'Frank',email:'frank@gmail.com',nickname:'mafia1'},
  ]);

  const emailref = useRef();

  const onSubmit = e =>{
    e.preventDefault();
    }

  const onChange = e =>{
    console.log(e.target.value);
    // CheckEmail(e.target.value);
  }


  return (
    <Container>

      {/* Add user Form */}
      <AddContainer onSubmit={onSubmit}>
      <Title>Add User</Title>
      <InputContainer>
        {icontent.map(r => 
        <ForFlex>
          <Content>{r}</Content>
          <AddInput onChange={onChange}/>
        </ForFlex>)}
      </InputContainer>
      <AddBtn type="submit">Add</AddBtn>
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
          <input type="email" value={r.email} ref={emailref}/> 
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
