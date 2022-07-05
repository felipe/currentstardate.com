const dateFormat = (time) => {
	const date = new Date(time);

	const month = String(date.getMonth()+1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const year = date.getFullYear();
	const hour =  String(date.getHours()).padStart(2, '0');
	const minute =  String(date.getMinutes()).padStart(2, '0');
	const seconds =  String(date.getSeconds()).padStart(2, '0');
	
	return `${day}/${month}/${year} ${hour}:${minute}:${seconds}`
}

const Earth = ({children: time}) => {
	return (<h1>{dateFormat(time)}</h1>)
}

export default Earth;