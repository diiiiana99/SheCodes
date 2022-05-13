import styled from 'styled-components';
import { Heading, TextWrapper } from './globalStyles';

export const PricingSection = styled.div`
	padding: 20px 0 160px;
	
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-image: url(${({ bg1 }) => bg1});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: contain;
	background-color: rgba(255, 255, 255, 0.9);
	@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
	  -webkit-backdrop-filter: blur(20px);
	  backdrop-filter: blur(10px);
	  background-color: rgba(255, 255, 255, 0.5);
	}

`;

export const PricingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const PricingHeading = styled(Heading)`
	font-size: 3rem;
	margin-bottom: 24px;
	color: #3c0473;
	margin-top:160px;

`;

export const PriceSubtitle = styled.h1`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	text-align: center;
	color: #fff;
`;

export const PricingContainer = styled.div`
	display: flex;

	justify-content: center;
	flex-flow: wrap;
	> div {
		margin: 0.7rem;
	}
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		> div {
			width: 90%;
		}
	}
`;

export const PricingCardInfo = styled.div`
	background: ;
	box-shadow: 0 6px 20px ;
	width: 280px;
	text-decoration: none;
	border-radius: 4px;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 24px;
	color: #fff;
	margin: auto;
	> button {
		background-color: transparent;
		border: 2px solid ;
		margin-top: auto;
		&:hover {
			border: none;
		}
	}
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
	@media screen and (max-width: 768px) {
		width: 90%;
		&:hover {
			transform: none;
		}
	}
`;

export const PricingCardPlan = styled.h3`
	margin-bottom: 5px;
	font-size: 2rem;
	color: #8849c7;
`;

export const PricingCardCost = styled(TextWrapper)`
	font-size: 1.2rem;
`;

export const PricingCardText = styled(TextWrapper)`
	font-size: 1.1rem;
	margin: 0.4rem 0 1.3rem;
	color:  #8849c7;
`;

export const PricingCardFeatures = styled.ul`
	margin: 16px 0 32px;
	list-style: none;
	display: flex;
	flex-direction: column;
	color:  #3c0473;
`;

export const PricingCardFeature = styled.li`
	margin-bottom: 1rem;
	display: flex;
	font-size: 0.94rem;
	&:before {
		content: '';
		margin-right: 0.4rem;
	}
`;