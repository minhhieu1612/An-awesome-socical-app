import React from 'react';

const App: React.FC = () => {
	const [count, setCount] = React.useState(0)
	return (<div>
		<h1>Hello there</h1>
		<p>{count}</p>
		<button onClick={() => setCount(_ => _ + 1)}>add</button>
	</div>);
}

export default App;
