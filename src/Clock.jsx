import React, {useState, useEffect} from 'react';

const REFRESH_INTERVAL = 100;

const Clock = () => {
	const [time, setTime] = useState(Date.now());

	  useEffect(() => {
		const interval = setInterval(() => setTime(Date.now()), REFRESH_INTERVAL);
		return () => {
		  clearInterval(interval);
		};
	  }, []);

	return (
		<div className="mainTimer">
			<h1>{time}</h1>
		</div>
	)
}

export default Clock;
