module.exports = function check(str, bracketsConfig) {
  var arr = str.split("");

  var changes = true;
  while (changes) {
      changes = false;
      for (var i = 0; i < arr.length-1; i++) {
          for (var j = 0; j < bracketsConfig.length; j++) {
              if ((arr[i] === bracketsConfig[j][0]) && (arr[i+1] === bracketsConfig[j][1])) {
                  changes = true;
                  arr.splice(i,2);
                  i--;
                  break;
              } 
          
          }

      }

  }

  if (arr.length === 0) {
      return true;
  } else {
      return false;
  }
}
