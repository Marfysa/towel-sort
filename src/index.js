
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix.length == 0) return [];
  if (matrix.length === 1) {
    return matrix;
  } 
  let i = 0;
  let revArr = [];
  let result = [];
  let arrNew = [];
  for (i = 0; i < matrix.length; i++){
    if (matrix[i] % 2 !== 0){
      revArr = matrix[i+1].reverse();
      arrNew = matrix[i].concat(revArr);
    } else if (matrix[i] % 2 == 0) {
      
        result = matrix[i];
      }
      return arrNew;
    }
  }
  
  
  
  

