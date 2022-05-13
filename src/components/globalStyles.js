import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro',sans-serif;
  }
`;

export const formContainer = styled.div`
	width: 100%;
	max-width: 1300px;
	margin-left: 60px;
	margin: 0 auto;
	padding: 0;
	@media screen and (max-width: 960px) {
		justify-content:center;
	}
`;

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 1300px;

	margin: ${({ margin }) => (margin ? margin : '0 auto')};
	padding: ${({ padding }) => (padding ? padding : '0 50px')};
	@media screen and (max-width: 960px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export const CarouselHeading = styled.h2`
margin-top:160px;

	font-size: clamp(1.3rem, 13vw, 3.1rem);
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: #651fac;
	letter-spacing: 0.4rem;
	line-height: 1.06;
	text-align: center;
	width: ${({ width }) => (width ? width : '100%')};
`;
export const Wrap = styled.div` 
`


export const Wrapper = styled.span`
	color: ${({ color }) => (color ? color : '#651fac')};
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
`;
export const Section = styled.section`
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	background-image: url(${({ bg1 }) => bg1});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	overflow:hidden;
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '')};
	}


`;

export const ContentContainer = styled.div`
	width: 100%;
	max-width: 1330px;
	margin: 0 auto;
	padding: 0 50px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;

export const Heading = styled.h2`
	font-size: clamp(1.3rem, 6vw, 3.1rem);
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	letter-spacing: 0.4rem;
	text-align: center;
	width: ${({ width }) => (width ? width : '')};
`;

export const TextWrapper = styled.span`
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	text-align: ${({ align }) => (align ? align : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	color: #8849c7;
`;

export const Row = styled.div`
	display: flex;
	
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};

`;



export const BtnContainer = styled(motion.button)`
font-size: 0.8rem;

background: #f774c5;
border: none;
padding: 0.8rem 1.1rem;
color: #fff;
border-radius: 1rem ;
box-shadow: 0px 13px 24px -7px #f774c5;
transition: all 0.3s ease-in-out;
margin-left: 0.5rem;
cursor: pointer;
&:hover {
  box-shadow: 0px 17px 16px -11px #ecb6d7;
  background:#f774c5;
  transform: translateY(-5px);
}

@media (max-width: 670px) {
  /* width: 100%; */
  padding: 0.3;
}

`;

export default GlobalStyle;