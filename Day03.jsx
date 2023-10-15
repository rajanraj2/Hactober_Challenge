// Link to problem :
// https://codedamn.com/problem/ji0huFRoHPXwpMDb1KmZj?challengeList=ji0huFRoHPXwpMDb1KmZj

// clicking on the button should increment the counter by 3

import { useState } from "react";

export default function Counter() {
	const [number, setNumber] = useState(0);

	return (
		<>
			<div className="card">
				<h1 data-testid="counter">{number}</h1>
				<button
					data-testid="incrementButton"
					onClick={() => {
						setNumber((prevNumber)=>prevNumber+3); // added this line
                        // setNumber(number + 1);
                        // setNumber(number + 1);
                        // setNumber(number + 1);
					}}
				>
					Increment 3 times
				</button>
			</div>
		</>
	);
}
