import styled from 'styled-components';
import { Row } from './globalStyles';
import Slider from 'react-slick';

export const CarouselImage = styled.img`
	width: 100%;
	height: 300px;
	border-radius: 10px 10px 0 0;
	object-fit: cover;
	vertical-align: middle;
`;

export const ImageWrapper = styled.div`
	width: 90%;
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	outline: none;
	height: 430px;
	
	@media screen and (min-width: 440px) {
		box-shadow: 0 6px 20px #fff;
	}
`;

export const ButtonContainer = styled(Row)`
margin-top:160px;

	& svg {
		margin: 0 1rem;
		cursor: pointer;
	}
	& svg:hover {
		opacity: 0.7;
		transition: opacity 0.2s ease-in;
	}
	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`;

export const ReviewSlider = styled(Slider)`
	width: 100%;
	.slick-track {
		display: flex;
		padding: 30px;
		gap: 3rem;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}
	.slick-list {
		overflow: hidden;
	}
`;

export const BtnContainer = styled.button`
margin-top: 2rem;
background:none;
border:none;
button {
  background:  #f774c5;
  border: none;
  padding: 0.9rem 1.1rem;
  color: #fff;
  border-radius: 1rem ;
  box-shadow: 0px 13px 24px -7px #f774c5;
  transition: all 0.3s ease-in-out;
  margin: 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
	box-shadow: 0px 17px 16px -11px  #f774c5;
	transform: translateY(-5px);
  }
}
`;