import React from 'react'
import styled from "styled-components";

const Container = styled.div`
padding:8px;
font-family: 'Roboto Serif', sans-serif;
border-top:1px solid black;

@media screen and (max-width:380px){

  font-size:12px;
}
`

const Footer = () => {
  return (
    <Container> © Phone Catalog Created by: Jordi Roca     </Container>
  )
}

export default Footer