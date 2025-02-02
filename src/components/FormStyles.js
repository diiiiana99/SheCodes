// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// export const FormSection = styled.div`
// 	padding: clamp(50px, 30vh, 100px) 0;
//     paiing-left:50px;
// 	border-radius: 30px;
// 	width: 100%;
//     background-image: url(${({ bg1 }) => bg1});
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: contain;
//     overflow:hidden;

// `;

// export const FormTitle = styled.h1`
// 	margin-bottom: 4rem;
// 	font-size: 3rem;
// 	line-height: 1.1;
// 	font-weight: 600;
//     color:#651fac
// `;

// export const FormContainer = styled.div`
// `;
// export const FormColumn = styled.div`
// 	margin-bottom: 15px;
// 	padding-right: 15px;
// 	padding-left: 15px;
// 	padding: 0 15px;
// 	flex: 1;
// 	max-width: 70%;
// 	display: flex;
// 	flex-direction: column;
// 	@media screen and (max-width: 768px) {
// 		max-width: 100% !important;
// 		flex-basis: 100%;
// 		justify-content: center;
// 		align-items: center;
// 	}
// 	img {
// 		@media screen and (max-width: 768px) {
// 			display: none;
// 		}
// 	}
// `;

// export const FormRow = styled.div`
// 	display: flex;
// 	justify-content: center;
//     margin-left:120px;
// 	align-items: center;
//         background:none;

// `;

// export const FormWrapper = styled.form`
// 	max-width: 540px;
// 	padding-top: 0;
// 	width: 100%;
// `;

// export const FormButton = styled.button`
// 	background-color: #f774c5;
// 	width: 100%;
// 	margin-top: 2rem;
// 	height: 4rem;
// 	font-size: 12px;
// 	font-weight: 700;
// 	letter-spacing: 0.75px;
// 	text-transform: uppercase;
// 	border-radius: 28px;
// 	line-height: 30px;
//     transition: all 0.3s ease-in-out;
// 	box-shadow: 10px 16px 40px 0 rgb(255 84 117 / 46%);
// 	text-align: center;
// 	border: none;
// 	color: #fff;
// 	cursor: pointer;
// 	&:hover {
//         box-shadow: 0px 17px 16px -11px  #f774c5;
//         transform: translateY(-5px);
// 	}
// `;

// export const FormMessage = styled(motion.div)`
// 	color: ${({ error }) => (error ? 'red' : 'green')};
// 	padding: 5px;
// 	text-align: center;
// 	margin-top: 1rem;
// `;

// export const FormInputRow = styled.div`
// 	display: flex;
//     background:transparent;
// 	justify-content: center;
// 	flex-direction: column;
// 	align-items: stretch;
// 	margin-bottom: 2rem;
// 	> p {
// 		font-size: 0.8rem;
// 		margin-top: 0.5rem;
// 		color: #f00e0e;
// 	}
// `;
// export const FormInput = styled.input`
// 	display: block;
// 	padding-left: 10px;
// 	outline: none;
// 	border-radius: 2px;
// 	height: 40px;
// 	width: 100%;
//     color: #8849c7;
//     background:transparent;
// 	border: none;
// 	font-size: 1rem;
// 	border-bottom: 1px solid #fff;
// `;

// export const FormLabel = styled.label`
// 	display: inline-block;
// 	font-size: 0.9rem;
// 	margin-bottom: 0.3rem;
//     color:#af60ff;
//     `

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FormSection = styled.div`
	color: #fff;
	padding: 160px 0;
    background-image: url(${({ bg1 }) => bg1})
`;

export const FormTitle = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
    color:#651fac

`;

export const FormContainer = styled.div`
	display: flex;
`;
export const FormColumn = styled.div`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	padding: ${({ small }) => (small ? '0 50px' : '0 15px')};
	flex: 1;
	max-width: 50%;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
`;

export const FormWrapper = styled.form`
	max-width: 540px;
	padding-top: 0;
	width: 100%;
	> button {
		width: 100%;
		height: 50px;
		margin-top: 1rem;
		background: linear-gradient(90deg, '' 0%, '' 100%);
		outline: none;
		border: none;
		color: #fff;
		font-size: 1rem;
	}
`;

export const FormMessage = styled(motion.div)`
	color: ${({ error }) => (error ? 'red' : 'green')};
	background-color: '';
	padding: 5px;
	text-align: center;
	margin-top: 1rem;
`;

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 0.7rem;
    border-bottom: 1px solid #fff;

	> p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
`;
export const FormInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 40px;

	width: 100%;
	border: none;

    background:transparent;
	font-size: 1rem;
`;

export const FormLabel = styled.label`
	display: inline-block;
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	color: #fff;
`;
// export const FormContainer = styled.div``;

// export const FormRow = styled.div`
// 	display: flex;
// 	margin: 0 -15px -15px -15px;
// 	flex-wrap: wrap;
// 	align-items: center;
// 	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
// 	justify-content: space-around;
// `;

// export const FormColumn = styled(motion.div)`
// 	margin-bottom: 15px;
// 	padding-right: 15px;
// 	padding-left: 15px;
// 	flex: 1;
// 	z-index: 10;
// 	display: flex;
// 	flex-direction: column;
// 	@media screen and (max-width: 768px) {
// 		max-width: 100% !important;
// 		flex-basis: 100%;
// 		justify-content: center;
// 		align-items: center;
// 	}
// `;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	/* padding-bottom: 40px; */
	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	> img {
		width: 300px;
		margin-left: -3px;
	}
`;

export const ImgWrapper = styled(motion.div)`
	/* max-width: 600px; */
	display: flex;
	justify-content: ${({ imgStart }) => (imgStart ? 'flex-start' : 'flex-end')};
	max-height: 600px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const TopLine = styled(motion.div)`
	font-size: 18px;
	line-height: 16px;
    color: #f00e0e;
	font-weight: 700;
	letter-spacing: 1.4px;
	margin-bottom: 1.3rem;
`;

export const Box = styled.span`
	background: #fefefe;
	padding: 10px;
	border-radius: 50px;
	color: black;
	> span {
		background:'';
		padding: 5px 15px;
		border-radius: 50px;
        color: #f00e0e;
		margin-right: 0.6rem;
	}
`;

export const Img = styled(motion.img)`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	max-height: 700px;
`;

export const Heading = styled(motion.h2)`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
    color: #f00e0e;

`;

export const Subtitle = styled(motion.p)`
	max-width: 440px;
	margin-bottom: 35px;

	font-size: 18px;
	line-height: 24px;
	color: ${({ inverse }) => (inverse ? '#a9b3c1' : '#1c2237')};
`;