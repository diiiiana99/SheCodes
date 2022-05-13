import React from "react";
import styled from "styled-components";

const Products = () => {
  return (
    <Container>
        <Wrapper>
      <h5>SheCodes is here to help</h5>
      <h1>1.Product Development</h1>
      <h1>Learn how the Internet works, about front-end development (HTML, CSS, JavaScript) and basic coding practices.</h1>
      </Wrapper>
      <Wrapper>
      <h5></h5>
      <h1>2. Product Design</h1>
      <h1>Learn the basics of User-Experience (UX) and User Interface (UI) design so you can convert your sketches into actual pixels.</h1>
      </Wrapper>
      <Wrapper>
      <h5></h5>
      <h1>3. Product Management</h1>
      <h1>Learn about how to validate an idea, the tools to manage a project and how to have conversations with developers.</h1>

      </Wrapper>
    </Container>
    
    
  );
};

const Wrapper = styled.div``

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: #81d1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #81d1ff;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }

  .readmore {
    color: #81d1ff;
    background: transparent;
    border: 3px solid #81d1ff;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  h5 {
    color: #fff;
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 1.8rem;
    font-weight: 900;
        margin-bottom: 1rem;


    &:nth-of-type(1) {
      color: #af60ff;
      font-weight: 800;

    }
    &:nth-of-type(2) {
      color: #8849c7;
      font-size:1.2rem;
      font-weight: 700;


    }
    &:nth-of-type(3) {
      color: #651fac;
    }
    &:nth-of-type(4) {
      color: #3c0473;
    }
  }
`;

export default Products;
