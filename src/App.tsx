import { useState } from 'react';
import InputText from './components/ui/inputText';
import Button from './components/ui/button';

import './App.scss';

const App = () => {
	const API_DEVICE = import.meta.env.VITE_API_DEVICE;
	const API_MESSAGE_GATEAWAY = import.meta.env.VITE_API_MESSAGE_GATEAWAY;

	const [updateDeviceIdInpt, setUpdateDeviceIdInpt] = useState('');
	const [updateDeviceUserNameInpt, setUpdateDeviceUserNameInpt] =
		useState('');

	const [getDeviceIdInpt, setGetDeviceIdInpt] = useState('');

	const [registrationDeviceIdInpt, setRegistrationDeviceIdInpt] =
		useState('');
	const [registrationDeviceUserNameInpt, setRegistrationDeviceUserNameInpt] =
		useState('');

	const [readingDeviceIdInpt, setReadingDeviceIdInpt] = useState('');
	const [readingInpt, setReadingInpt] = useState('');

	const updateDevice = async (deviceId: string, username: string) => {
		try {
			const response = await fetch(`${API_DEVICE}/devices/${deviceId}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username: username }),
			});

			if (!response.ok) {
				throw new Error('Failed to create update device');
			}

			console.log('Device ', deviceId, ' update username to ', username);
		} catch (error) {
			console.error('Failed to update the device: ', error);
		}
	};

	const getDeviceUsername = async (deviceId: string) => {
		try {
			const response = await fetch(
				`${API_DEVICE}/devices/${deviceId}/username`
			);

			if (!response.ok)
				throw new Error('Failed to fetch device username');

			const data = await response.json();
			console.log(
				'The username of the device with id ',
				deviceId,
				' is ',
				data.username
			);
		} catch (error) {
			console.error('Failed to fetch device username: ', error);
		}
	};

	const registerDevice = async (deviceId: string, username: string) => {
		try {
			const response = await fetch(`${API_MESSAGE_GATEAWAY}/messages`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					deviceId: deviceId,
					type: 'registration',
					data: {
						username: username,
					},
				}),
			});

			if (!response.ok) {
				throw new Error('Failed to send register device message');
			}

			console.log('Register device message sent');
		} catch (error) {
			console.error('Failed to send register device message: ', error);
		}
	};

	const readingDevice = async (deviceId: string, reading: number) => {
		try {
			const response = await fetch(`${API_MESSAGE_GATEAWAY}/messages`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					deviceId: deviceId,
					type: 'reading',
					data: {
						reading: reading,
					},
				}),
			});

			if (!response.ok) {
				throw new Error('Failed to send reading device message');
			}

			console.log('Reading device message sent');
		} catch (error) {
			console.error('Failed to send reading device message: ', error);
		}
	};

	return (
		<div className="app">
			<div className="form-container">
				<h1>Create/Update a device with id and username</h1>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						updateDevice(
							updateDeviceIdInpt,
							updateDeviceUserNameInpt
						);
					}}
				>
					<InputText
						placeholder="device Id"
						onChange={setUpdateDeviceIdInpt}
						val={updateDeviceIdInpt}
					/>

					<InputText
						placeholder="device Username"
						onChange={setUpdateDeviceUserNameInpt}
						val={updateDeviceUserNameInpt}
					/>

					<Button>Send</Button>
				</form>
			</div>

			<div className="form-container">
				<h1>Get UserName from DeviceId</h1>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						getDeviceUsername(getDeviceIdInpt);
					}}
				>
					<InputText
						placeholder="device Id"
						onChange={setGetDeviceIdInpt}
						val={getDeviceIdInpt}
					/>

					<Button>Send</Button>
				</form>
			</div>

			<div className="form-container">
				<h1>Send registration message</h1>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						registerDevice(
							registrationDeviceIdInpt,
							registrationDeviceUserNameInpt
						);
					}}
				>
					<InputText
						placeholder="device Id"
						onChange={setRegistrationDeviceIdInpt}
						val={registrationDeviceIdInpt}
					/>

					<InputText
						placeholder="device Username"
						onChange={setRegistrationDeviceUserNameInpt}
						val={registrationDeviceUserNameInpt}
					/>

					<Button>Send</Button>
				</form>
			</div>

			<div className="form-container">
				<h1>
					Send reading message (will work only if reading-service is
					running)
				</h1>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						readingDevice(readingDeviceIdInpt, Number(readingInpt));
					}}
				>
					<InputText
						placeholder="device Id"
						onChange={setReadingDeviceIdInpt}
						val={readingDeviceIdInpt}
					/>

					<InputText
						placeholder="reading"
						onChange={setReadingInpt}
						val={readingInpt}
					/>

					<Button>Send</Button>
				</form>
			</div>
		</div>
	);
};

export default App;
