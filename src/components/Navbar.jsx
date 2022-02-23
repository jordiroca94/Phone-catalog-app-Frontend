import React from 'react'
import styled from "styled-components";

// STYLED COMPONENTS FOR THE NAVBAR

const Wrapper = styled.div`
display:flex; 
align-items:center; 
justify-content:center;
color:black;
font-family: 'Roboto Serif', sans-serif;
font-size:30px;
height:70px;
border-bottom:2px solid black;

@media screen and (max-width:380px){
  height:50px;
  font-size:16px;
}
`

const Navbar = () => {
  return (
  
    <Wrapper> WELCOME TO YOUR PHONE CATALOG</Wrapper>
  )
}

export default Navbar