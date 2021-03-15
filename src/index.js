module.exports = function check(str, bracketsConfig) {
  let arrayString = str.split('');
  for (let i = 0; i < bracketsConfig.length; i++) {
    let numb1 = bracketsConfig[i][0];
    let numb2 = bracketsConfig[i][1];
    for (let j = 0; j < str.length; j++) {
      if (arrayString[j] == numb1 && arrayString[j+1] == numb2) {
        arrayString.splice(j, 2);
        i = -1;
        j = -1;
      }
    }
  }
  return arrayString == 0 ? true : false;
}

