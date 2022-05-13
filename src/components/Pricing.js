
import React from 'react';
import { BtnContainer, Heading, TextWrapper } from './globalStyles';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	PricingHeading,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardCost,
	PricingCardFeatures,
	PricingCardText,
	PricingCardFeature,
} from './PricingStyles';
import Tilt from 'react-tilt';
import bg1 from '../assets/bg1.png'
import { pricingData } from '../utils/homeData';

const Pricing = () => {
	return (
		<IconContext.Provider >
			<PricingSection id="pricing" bg1={bg1}>
				<PricingWrapper >
					<PricingHeading>Upcoming Coding Workshops</PricingHeading>
					<TextWrapper
						color="white"
						maxWidth="460px"
						mb="2rem"
						size="1.2rem"
						lineHeight="1.3rem"
						align="center"
						weight="600"
					>
					Reserve your spot today👩‍💻

					</TextWrapper>
					<PricingContainer>
						{pricingData.map((card, index) => (
							<Tilt
								className="Tilt"
								key={index}
								options={{ max: 15, scale: 1.01, speed: 200 }}
							>
								<PricingCardInfo key={index}>
									<PricingCardPlan>{card.title}</PricingCardPlan>
									<PricingCardCost>{card.price}</PricingCardCost>
									<PricingCardText>{card.numAcc}</PricingCardText>
									<PricingCardFeatures>
										{card.features.map((feature, index) => (
											<PricingCardFeature key={index}>
												{feature}
											</PricingCardFeature>
										))}
									</PricingCardFeatures>
									<BtnContainer>Get Started</BtnContainer>
								</PricingCardInfo>
							</Tilt>
						))}
					</PricingContainer>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
};

export default Pricing;