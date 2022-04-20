/** get a random integer between 0 and array length. */
function getRandom(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
  
export { getRandom };