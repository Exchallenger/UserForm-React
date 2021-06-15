
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
    {name:'Frank',email:'frank@gmail.dcom',nickname:'mafia1'},
  ]);
  const [pagelen, setpagelen] = useState(Number(Math.ceil((user.length+1)/5)));
  const [curpage, setCurpage] = useState(1);


  const getUser = (newuser) =>{
    setUser(user => [...user,newuser]);
    setpagelen(Number(Math.ceil((user.length+1)/5)));
  }
  const reviseUser = (idx,reuser) =>{ 
    user[idx] = {name:reuser.name, email:reuser.email, nickname:reuser.nickname}
    setpagelen(Number(Math.ceil((user.length+1)/5)));
  }
  const deleteUser = (idx) =>{
    setUser(user.filter((r,index) => index!==idx));
    setpagelen(Number(Math.ceil((user.length+1)/5)));
  }

  const onCurpage = (stra) =>{
    if(stra === 'left'){
      setCurpage(curpage-1)
    }else{
      setCurpage(curpage+1);
    }
  }

  const getSearch = (data) =>{
    if(data.length===0){setpagelen(1)}
    else{setpagelen(Number(Math.ceil((data.length+1)/5)))};
    console.log(pagelen);
  }

  return (
    <Container>
      <Adduser user={user} getUser={getUser}/>
      <User  getSearch={getSearch} pagelen={pagelen} curpage={curpage} user={user} reviseUser={reviseUser} deleteUser={deleteUser}/>
      <Footer user={user} pagelen={pagelen} curpage={curpage} onCurpage={onCurpage}/>
    </Container>
  );
}

export default App;
