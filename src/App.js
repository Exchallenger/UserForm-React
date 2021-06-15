
import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Adduser from './components/Adduser.jsx';
import Footer from './components/Footer';
import User from './components/Users';

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



function App() {
  const [user, setUser]= useState([
    {name:'Steve',email:'steve@gmail.com',nickname:'civilian1'},
    {name:'Julie',email:'julie@gmail.com',nickname:'civilian2'},
    {name:'Frank',email:'frank@gmail.com',nickname:'mafia1'},
  ]);


  const getUser = (newuser) =>{
    setUser(user => [...user,newuser]);
  }
  const reviseUser = (idx,reuser) =>{ 
    user[idx] = {name:reuser.name, email:reuser.email, nickname:reuser.nickname}
  }
  const deleteUser = (idx) =>{
    setUser(user.filter((r,index) => index!==idx));
  }

  return (
    <Container>
      <Adduser user={user} getUser={getUser}/>
      <User user={user} reviseUser={reviseUser} deleteUser={deleteUser}/>
      <Footer/>
    </Container>
  );
}

export default App;
