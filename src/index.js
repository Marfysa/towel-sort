
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix.length == 0) return [];
  if (matrix.length === 1) {
    return matrix;
  } 
  let i = 0;
  for (i = 0; i < matrix.length; i++){
    if (i % 2 !== 0){
      matrix[i] = matrix[i].reverse();
        
      }
      
    } return matrix.flatMap(e => e);
  }
  
  
  
  

