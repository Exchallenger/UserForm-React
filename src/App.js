
import {  useState } from 'react';
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
    {name:'John',email:'john@gmail.com',nickname:'moderator'},
    {name:'Steve',email:'steve@gmail.com',nickname:'civilian1'},
    {name:'Julie',email:'julie@gmaild.com',nickname:'civilian2'},
    {name:'Frank',email:'frank@gmailfd.com',nickname:'mafia1'},
  ]);
  const [pagelen, setpagelen] = useState(Number(Math.ceil((user.length+1)/5)));
  const [curpage, setCurpage] = useState(1);


  const getUser = (newuser) =>{
    setUser(user => [...user,newuser]);
    setpagelen(Number(Math.ceil((user.length+1)/5)));
  }
  const reviseUser = (chanuser,oriemail=null) =>{ 
    if(oriemail===null){ //이메일 값이 안바뀜
     setUser(user.map(r => {
        if(r.email === chanuser.email){
          return {name:chanuser.name, email:chanuser.email, nickname:chanuser.nickname}
        }else{return r}
      }));
    }else{ //이메일 값이 바뀜
      setUser(user.map(r =>{
        if(r.email === oriemail){
          return {name:chanuser.name, email:chanuser.email, nickname:chanuser.nickname}
        }else{return r}
      } ))
    }
    
    setpagelen(Number(Math.ceil((user.length+1)/5)));
  }
  const deleteUser = (email) =>{
    setUser(user.filter((r) => r.email !== email));
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
    else{
      setpagelen(Number(Math.ceil((data.length)/5)))
      if(data.length!==user.length){setCurpage(1);}
    };
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
