export function addString(a, b) {
  if(typeof a === "string" || typeof b === "string"){
    return a + b;
  } else {
    return -1
  }
}

export function toNumber(str) {
  return parseInt(str, 10)
}

export function filterOrange(arr){
  return arr.filter((e) => e === "orange")
}
