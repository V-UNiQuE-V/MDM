import { useEffect, useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `Count: ${count}`;
	}, [count]);

	return (
		<div style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<div style={{textAlign: 'center'}}>
			<h2>Simple Counter App</h2>
			<h1>{count}</h1>

			<div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
				<button onClick={() => setCount((value) => value + 1)}>
					Increment
				</button>
				<button onClick={() => setCount((value) => value - 1)}>
					Decrement
				</button>
				<button onClick={() => setCount(0)}>
					Reset
				</button>
			</div>
		</div>
		</div>
	);
}

export default App;
