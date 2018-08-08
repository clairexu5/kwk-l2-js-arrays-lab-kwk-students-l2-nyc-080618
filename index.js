// Write your solutions here!
const drivers = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendDriver(name) {
  newArray = drivers.push(name);
  return newArray;
}

function destructivelyPrependDriver(name) {
  newArray = drivers.pop(name);
  return newArray;
}