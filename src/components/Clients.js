import React from 'react';
import { clientsData } from '../utils/ClientsData';
import styled from 'styled-components';
import Tilt from "react-tilt";


const Clients = () => {
	return (
        <Container bg2='https://images.unsplash.com/photo-1528459709161-157d86910939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'>
            <Wrapper>
		<ClientSection id="clients">
				<ClientTextWrapper>
					<ClientTitle>Our Clients</ClientTitle>
					<ClientText>SheCodes Workshops have an overall completion rate of 92% 🙌</ClientText>
				</ClientTextWrapper>
				<TiltWrapper options={{ max: 25 }}>
				<ClientRow>
					{clientsData.map((clients, clientsIndex) => (
						<ClientColumn key={clientsIndex}>
							{clients.map((el, index) => (
								<ClientWrapper key={index}>
							
									<ClientImage src={el.img} />
						
								</ClientWrapper>
							))}
						</ClientColumn>
					))}
				</ClientRow>
				</TiltWrapper>
		</ClientSection>
        </Wrapper>

        </Container>
	);
};

export default Clients;


const TiltWrapper = styled(Tilt)`
  width: 60%;
  min-width: 1100px;
  @media (max-width: 670px) {
    display: none;
  }
`;

export const Container = styled.div`
	width: 100%;
	
	margin: 0 auto;
    background-image: url(${({ bg2 }) => bg2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
	@media screen and (max-width: 960px) {
		;
        
	}
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const ClientSection = styled.div`
	position: relative;
	margin-top:160px;
	margin: 0 auto;
    background-image: url(${({ bg2 }) => bg2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
	@media screen and (max-width: 768px) {
		padding: 70px 0;
		margin-top: 5rem;
	}
`;

const ClientTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;

	margin-bottom: 4rem;
	&:before {
		width: 40px;
		height: 2px;
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		background-color: #ef4b6c;
		transform: translateX(-50%);
	}
`;

const ClientTitle = styled.h2`
	text-align: center;
	
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	letter-spacing: 0.4rem;
    color:  #651fac;

`;

const ClientText = styled.p`
margin-top:160px;

	margin: 1rem 0 auto;
	text-align: center;
	font-size: 1.3rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color:#8849c7;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const ClientRow = styled.div`
	display: flex;
	margin-left:320px;
	justify-content: center;
	@media screen and (max-width: 1100px) {
		flex-direction: column;
		justify-content: center;
	}
`;

const ClientColumn = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	margin: 0.4rem;
	@media screen and (max-width: 1100px) {
		div:not(:first-child) {
			display: none;
		}
	}
`;

 const ClientImage = styled.img`
	width: 90px;
	@media screen and (max-width: 1100px) {
		width: clamp(80px, 40vw, 400px);
		height: 60%;
	}
`;
const ClientWrapper = styled.div`
	padding: 10px 40px;
	border-radius: 1rem;
	height: 110px;
	width: 100%;
	box-shadow: 0 0 32px 8px #dfdfdf;
	background-color: ;
	margin: 0.4rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;