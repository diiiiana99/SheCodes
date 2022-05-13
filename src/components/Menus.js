import React, {useState} from 'react'
import styled from "styled-components";
import bg2 from "../assets/bg2.png";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";



const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  font-family: "Raleway", sans-serif;

  position: relative;
  overflow: hidden;
  background-image: url(${({ bg2 }) => bg2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, 0.5);
  }

`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-family: "Raleway", sans-serif;

  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  
  font-family: "Raleway", sans-serif;

  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);
  }
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: "Raleway", sans-serif;

  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  margin-top:130px;

`;

const InfoContainer = styled.div`
  flex: 1;
  margin-top:130px;

  padding-right:10rem;
  font-family: "Raleway", sans-serif;


`;

const Title = styled.h1`
font-size: 3rem;
font-weight: 700;
  color: #af60ff;
  font-family: "Raleway", sans-serif;


  `;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 3px;
  color: #8849c7;
  font-family: "Raleway", sans-serif;


`;

const Button = styled.div`
margin-top: 2rem;
button {
  background: #f774c5;
  border: none;
  padding: 0.9rem 1.1rem;
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px -7px #fff;
  transition: all 0.3s ease-in-out;
  margin: 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 17px 16px -11px #f774c5 ;
    transform: translateY(-5px);
  }
}
`;

export default function Menus() {


    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };

  return (
    <Container bg2='https://images.unsplash.com/photo-1528459709161-157d86910939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'>
    <Arrow direction="left" onClick={() => handleClick("left")}>
    <ArrowLeftOutlined />

    </Arrow>
    <Wrapper slideIndex={slideIndex}>

        <Slide bg=''>
          <ImgContainer>
            <Image src='https://cdn3d.iconscout.com/3d/premium/thumb/website-developer-4620455-3833102.png' />
          </ImgContainer>
          <InfoContainer>
            <Title>Hands-on Coding Workshops for Women</Title>
            <Desc>Access a new career in Technology</Desc>
            <Button><button> Learn More </button>
</Button>
          </InfoContainer>
        </Slide>

    </Wrapper>
    <Arrow direction="right" onClick={() => handleClick("right")}>
    </Arrow>
    <Arrow direction="left" onClick={() => handleClick("left")}>
    </Arrow>
    <Wrapper slideIndex={slideIndex}>

        <Slide bg=''>
          <ImgContainer >
            <Image src='https://cdn3d.iconscout.com/3d/premium/thumb/web-designing-4620443-3833110.png' />
          </ImgContainer>
          <InfoContainer>
            <Title>SheCodes teaches coding skills to busy women</Title>
            <Desc>Highly recommended by over 75,000+ women</Desc>
            <Button><button>Explore More</button></Button>
          </InfoContainer>
        </Slide>

    </Wrapper>
    <Arrow direction="right" onClick={() => handleClick("right")}>
    </Arrow>
    <Arrow direction="left" onClick={() => handleClick("left")}>
    </Arrow>
    <Wrapper slideIndex={slideIndex}>

        <Slide bg=''>
          <ImgContainer>
            <Image src='https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-developer-4620444-3833104.png' />
          </ImgContainer>
          <InfoContainer>
            <Title>Women currently hold 25% of coding jobs</Title>
            <Desc>However,earn 30% less money than men</Desc>
            <Button><button>Make Changes</button></Button>
          </InfoContainer>
        </Slide>
    </Wrapper>
    <Arrow direction="right" onClick={() => handleClick("right")}>
    <ArrowRightOutlined />

    </Arrow>
  </Container>
);
};

