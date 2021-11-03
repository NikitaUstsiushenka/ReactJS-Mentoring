import React, { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<button
				type="button"
				onClick={() => setCount(count + 1)}
			>
				{'Click'}
			</button>
			<p>{`Count of clicks: ${count}`}</p>
		</div>
	);
};

export default Counter;
