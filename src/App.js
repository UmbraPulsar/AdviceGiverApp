import react, { useState, useEffect } from 'react';
import Divider from './assets/pattern-divider-mobile.svg';
import Dice from './assets/icon-dice.svg';
import Spinner from './assets/spinner.svg';

import './App.css';

const ActivityLoader = () => {
	return (
		<div className='loadContainer'>
			<img className='spinner' src={Spinner} alt='' />
		</div>
	);
};

const RandomAdviceButton = ({ handler }) => {
	return (
		<button
			className='RandomAdviceButton'
			onClick={() => {
				handler();
			}}>
			<img src={Dice} alt='' />
		</button>
	);
};
const AdviceNumber = ({ id }) => {
	return <p className='adviceNumber'>Advice #{id}</p>;
};
const AdviceText = ({ advice }) => {
	return <p className='adviceText'>{advice}</p>;
};

const Card = ({ advice, getAdvice }) => {
	return (
		<div className='AdviceCard'>
			<AdviceNumber id={advice.id} />
			<AdviceText advice={advice.advice} />
			<img src={Divider} alt='' />
			<RandomAdviceButton handler={getAdvice} />
		</div>
	);
};

function App() {
	const [activity, setActivity] = useState(true);
	const [advice, setAdvice] = useState({});

	const getAdvice = async () => {
		await fetch('https://api.adviceslip.com/advice')
			.then((res) => res.json())
			.then((data) => {
				setAdvice(data.slip);
			})
			.finally(() => {
				setActivity(false);
			});
	};

	useEffect(() => {
		setActivity(true);
		getAdvice();
	}, []);

	return (
		<div className='Wrapper'>
			{activity ? (
				<ActivityLoader />
			) : (
				<Card advice={advice} getAdvice={getAdvice} />
			)}
		</div>
	);
}

export default App;
