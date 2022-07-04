// Math from http://TrekGuide.com

const dateFormat = (time) => {
	const origin = new Date('15 July 1987 00:00:00');
	
	const difference = time - origin;
	const adjustment = difference / (1000 * 60 * 60 * 24 * 0.036525);
	const floor = Math.floor(adjustment + 410000);
	const stardate = floor / 10;

	return `${stardate}`
}

const TNG = ({children: time}) => {
	return (<h1>{dateFormat(time)}</h1>)
}

export default TNG;