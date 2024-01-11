/**
 * 
 * @param {number} value 
 * @param {number} min 
 * @param {number} max 
 * @returns {number} return value if min < value < max. return min if value < min. return max if value > max.
 */
export function getValueWithBoundaries(value,min,max) {
	if ( (typeof value != "number") || (typeof min != "number") || (typeof max != "number") ) {
		throw "Type error";
	}

	if (value < min) {
		return min;
	} else if (value > max){
		return max;
	} else {
		return value;
	}
}