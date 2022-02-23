import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Navbar from "./Navbar";
import Spinner from "./Spinner";

//STYLED COMPONENTS FOR THE PHONE DETAIL PAGE

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media screen and (max-width:380px){
padding:15px;
flex-direction:column;
}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  @media screen and (max-width:380px){
height:40vh;
}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Header = styled.h1`
  font-size: 40px;
  @media screen and (max-width:380px){
    font-size: 23px;
}
`;

const Slogan = styled.h2`
  font-size: 30px;
  @media screen and (max-width:380px){
    font-size: 15px;
}
  
`;

const Description = styled.p`
  font-size: 20px;
  @media screen and (max-width:380px){
    font-size: 10px;
}
`;

// I SEND THE COLOR THROUGH PROPS IN ORDER TO USE IT AS A BACKGROUND-COLOR FOR EACH ELEMENT OF THE ARRAY
const ColorList = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;

`;
const ColorHeader = styled.span`
  font-size: 20px;
  font-weight: 200;
  @media screen and (max-width:380px){
    font-size: 15px;
}
`;

const ColorContainer = styled.div`
  display: flex;
  @media screen and (max-width:380px){
    padding:5px;
}
`;

const Price = styled.p`
  font-weight: 100;
  font-size: 40px;
  @media screen and (max-width:380px){
    font-size: 20px;
}
`;

const Button = styled.button`
  border: none;
  font-size: 20px;
  padding: 10px;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;
  font-weight: 600;
  @media screen and (max-width:380px){
    font-size: 15px;
}
`;

const PhoneDetailComponent = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState([]);
  const [loading, setLoading] = useState(true);
  // THE LOADING STATE WILL BE USED TO MAKE THE SPINNER RUN
  //ADDED A SETTIMEOUT OF 1 SECOND, OTHERWISE IS NOT POSSIBLE TO SEE THE SPINNER ( DATA CHARGES TOO FAST)
  useEffect(() => {
    axios
      .get(`http://localhost:3005/api/phones/${id}`)
      .then((res) => {
        setPhone(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((e) => console.log(e));
  });

  return (
    <Container>
      {loading === true ? <Spinner /> : loading === "false"}

      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={phone.image} alt="phone"></Image>
        </ImageContainer>
        <InfoContainer>
          <Header>{phone.brand}</Header>
          <Slogan>{phone.title}</Slogan>
          <Description>{phone.description}</Description>
          <ColorContainer>
            <ColorHeader>Colors Available: </ColorHeader>
            {phone.color?.map((el) => {
              return <ColorList color={el} key={el}></ColorList>;
            })}
          </ColorContainer>
          <Price>{phone.price} €</Price>
          <Link to={"/"}>
            <Button>Go Back to the Catalog</Button>
          </Link>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default PhoneDetailComponent;
