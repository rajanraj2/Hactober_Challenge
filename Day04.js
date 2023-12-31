// Link to problem :
// https://codedamn.com/problem/0pbv9LkH1aYzkpDHwnt87?challengeList=hacktoberfest-2023

// added "await" keyword to the function getJoke() to make it asynchronous

import axios from "axios";

/**
 * @typedef {Object} Joke
 * @property {string} setup - The setup of the joke.
 * @property {string} punchline - The punchline of the joke.
 */

/**
 * returns a random joke from an api
 * @returns {Joke}
 */
export async function getJoke() {
	// Obtain the response from API
	const response = await axios.get(
		"https://official-joke-api.appspot.com/random_joke"
	);

	// Parse the response
	const data = response.data;

	return {
		setup: data.setup,
		punchline: data.punchline,
	};
}

getJoke();

// Sample Test
const joke = await getJoke();
console.log(joke);
