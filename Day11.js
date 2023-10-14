// Link to problem :
// https://codedamn.com/problem/nz61V9CFT8ONzv7tQVDrD?challengeList=hacktoberfest-2023

function fetchData() {
	// Simulates fetching data
	return Promise.resolve([10, 20, 30, 40, 50]);
}

function processItem(item) {
	// Simulates processing each item
	return new Promise((resolve) => resolve(item * 2));
}

async function scheduleLogging(data) {
	for (var i = 0; i < data.length; i++) {
		(function (index){

		setTimeout(async function () {
			let listItem = document.createElement("li");
			listItem.textContent = await processItem(data[index]);
			document.body.appendChild(listItem);
		}, 500 * index);
	})(i);
	}
}

async function init() {
	const data = await fetchData();
	scheduleLogging(data);
}

// Start executing the code
init();
