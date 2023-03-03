function repeatStringNumTimes (str, num) {
  if (num <= 0) { 
    return ""; 
  }
  let result = "";
   for (let i = 0; i < num; i++) {
  result += str; 
}
return result; 
}
module.exports = repeatStringNumTimes