/**
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @returns Float between [min,max[
 */
export function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


/**
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @returns Integer between [min,max[
 */
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

/**
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @returns Integer between [min,max]
 */
export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

