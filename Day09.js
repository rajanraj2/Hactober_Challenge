// Link to problem :
// https://codedamn.com/problem/b4HwnMaikPgq-7pgFSYDD?challengeList=hacktoberfest-2023

// changed the code so that the value is updated in the specified cell only and not the whole matrix
// return new Array(rows).fill(new Array(cols).fill([])); // initial code
// return Array.from({ length: rows }, () => Array.from({ length: cols }, () => [])); // changed code

/**
 * Initializes an 2-Dimensional matrix of the specified size with empty arrays.
 * @param {number} rows - The number of rows in the matrix.
 * @param {number} cols - The number of columns in the matrix.
 * @throws {Error} Throws an error if rows or cols is non-positive, null, or undefined.
 * @returns {Array<Array>} The initialized matrix.
 */
export function initializeEmptyMatrix(rows, cols) {
	// Handle non-positive, null, or undefined dimensions by throwing an error
	if (
		rows <= 0 ||
		cols <= 0 ||
		rows == null ||
		cols == null ||
		!Number.isInteger(rows) ||
		!Number.isInteger(cols)
	) {
		throw new Error("Dimensions must be positive integers");
	}

	// Create new Matrix using .fill method

	 
	// return new Array(rows).fill(new Array(cols).fill([]));
	return Array.from({ length: rows }, () => Array.from({ length: cols }, () => []));
	
}

// Sample Test Cases
const matrix1 = initializeEmptyMatrix(10, 10);
matrix1[3][3].push("item1");
console.log(matrix1);

const matrix2 = initializeEmptyMatrix(3, 5);
matrix2[0][0].push("item1");
console.log(matrix2);
