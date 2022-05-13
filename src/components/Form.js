

import React, { useState } from 'react';
import Fade from 'react-reveal'

import {
	FormColumn,
	Img,
	ImgWrapper,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormTitle,
	FormLabel,
	FormInputRow,
	FormMessage,
} from './FormStyles';
import { Container, BtnContainer } from './globalStyles';
import validateForm from './validateForm';
import bg1 from '../assets/bg1.png'
import Tilt from 'react-tilt';



const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = validateForm({ name, email, password, confirmPass });

		if (resultError !== null) {
			setError(resultError);
			return;
		}
		setName('');
		setEmail('');
		setPassword('');
		setConfirmPass('');
		setError(null);
		setSuccess('Application was submitted!');
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const buttonVariants = {
		hover: {
			scale: 1.05,
			color: '',
			boxShadow: '0px 0px 8px white',
			transition: {
				duration: 0.3,
				yoyo: Infinity,
			},
		},
	};

	const formData = [
		{ label: 'Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
		{
			label: 'Password',
			value: password,
			onChange: (e) => setPassword(e.target.value),
			type: 'password',
		},
		{
			label: 'Confirm Password',
			value: confirmPass,
			onChange: (e) => setConfirmPass(e.target.value),
			type: 'password',
		},
	];
	return (
		<FormSection  bg1={bg1}>
            <Fade top>
			<Container>
            <Tilt
								className="Tilt"
								options={{ max: 15, scale: 1.01, speed: 200 }}
							>
				<FormRow>
					<FormColumn>
						<ImgWrapper>
							<Img src="https://cdn3d.iconscout.com/3d/premium/thumb/girl-doing-online-shopping-4657921-3890253.png" alt=""></Img>
						</ImgWrapper>
					</FormColumn>
                 
					<FormColumn small>
						<FormTitle>Sign Up</FormTitle>
                 
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
										value={el.value}
										onChange={el.onChange}
									/>
								</FormInputRow>
							))}

							<BtnContainer variants={buttonVariants} whileHover="hover" type="submit">
								Signup
							</BtnContainer>
						</FormWrapper>

						{error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
							</FormMessage>
						)}
					</FormColumn>

				</FormRow>
                </Tilt>

			</Container>
            </Fade>
		</FormSection>
	);
};

export default Form;