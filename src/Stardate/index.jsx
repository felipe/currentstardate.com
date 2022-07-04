import React, {useState, useEffect} from 'react';
import Earth from './format/Earth';
import STO from './format/STO';
import TNG from './format/TNG';

const REFRESH_INTERVAL = 100;

const Stardate = () => {
	const [time, setTime] = useState(Date.now());

	  useEffect(() => {
		const interval = setInterval(() => setTime(Date.now()), REFRESH_INTERVAL);
		return () => {
		  clearInterval(interval);
		};
	  }, []);

	return (
		<>
			<div className="mainTimer">
				{/* <STO>{time}</STO> */}
				<TNG>{time}</TNG>
				{/* <Earth>{time}</Earth> */}
			</div>
			{/* <ul>
				<li>Earth</li>
				<li>STO</li>
				<li>TNG</li>
			</ul> */}
		</>
	)
}

export default Stardate;
