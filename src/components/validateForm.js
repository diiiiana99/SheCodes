// export default function validateForm({ name, email, subject, message }) {
// 	if (!name.trim()) {
// 		return 'Username required';
// 	}

// 	const regex =
// 		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	if (!email) {
// 		return 'Email required';
// 	} else if (regex.test(email.toLocalLowerCase)) {
// 		return 'Email address is invalid';
// 	}
// 	if (!subject) {
// 		return 'Subject is required';
// 	} else if (subject.length < 3) {
// 		return 'Subject needs to be 3characters or more';
// 	}

// 	if (!message) {
// 		return 'Message subject is required';
// 	}
// 	return null;
// }

export default function validateForm({ name, email, password, confirmPass }) {
	if (!name.trim()) {
		return 'Username required';
	}

	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email) {
		return 'Email required';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Email address is invalid';
	}
	if (!password) {
		return 'Password is required';
	} else if (password.length < 6) {
		return 'Password needs to be 6 characters or more';
	}

	if (!confirmPass) {
		return 'Enter Confirm password is required';
	} else if (confirmPass !== password) {
		return 'Passwords do not match';
	}
	return null;
}
