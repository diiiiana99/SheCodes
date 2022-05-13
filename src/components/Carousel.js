import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";import { IconContext } from 'react-icons';
import { data, sliderSettings } from '../utils/CarouselData';
import { Row, CarouselHeading, Section, Wrapper,Wrap } from './globalStyles';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	BtnContainer,
} from './CarouselStyles';
import bg1 from '../assets/bg1.png'
const Carousel = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<Section margin="auto" maxWidth="1300px" padding="20px 70px" inverse  bg1={bg1}>
            <Wrap>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<CarouselHeading width="auto" inverse>
                    SHECODES SUCCESS STORY
				</CarouselHeading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#fff7f7' }}>
						<ArrowLeftOutlined onClick={sliderRef?.slickPrev} />
						<ArrowRightOutlined onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={el.image} />
						<Wrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
							{el.title}
						</Wrapper>
						<Wrapper size="1rem" font-weight='600' margin="0.7rem" color="#8849c7">
							{el.description}
						</Wrapper>
						<BtnContainer><button>Read More</button></BtnContainer>
					</ImageWrapper>
				))}
			</ReviewSlider>
            </Wrap>
		</Section>
	);
};

export default Carousel;
