import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

//STYLED COMPONENTS FOR THE MAIN PAGE

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(236, 236, 236);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-family: "Roboto Serif", sans-serif;
  font-size: 30px;
  height: 80px;
  
  @media screen and (max-width:380px){
  height:50px;
  font-size:16px;
}
`;

const PhonesContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media screen and (max-width:380px){
flex-direction:column;
}
`;

const SingleContainer = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width:380px){
 height:"30vh";
}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  @media screen and (max-width:380px){
font-size:18px;
}
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;
  font-weight: 600;
`;

const PhoneListContainer = () => {
  const [phones, setPhones] = useState([]);
  // CALL TO THE API TO GET ALL THE DATA FROM MONGODB
  useEffect(() => {
    axios
      .get("http://localhost:3005/api/phones")
      .then((res) => setPhones(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Header>WHICH ONE WOULD YOU PREFER?</Header>
      <PhonesContainer>
        {phones.map((phone) => {
          return (
            <SingleContainer>
              <Link to={`/phones/${phone._id}`}>
                <Image src={phone.image} alt={"phone"} />
                <Info>
                  <Title>{phone.brand}</Title>
                  <Button>More Info</Button>
                </Info>
              </Link>
            </SingleContainer>
          );
        })}
      </PhonesContainer>
    </Container>
  );
};

export default PhoneListContainer;
