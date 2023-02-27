
// You should implement your task here.


module.exports = function towelSort (matrix) {
  if(matrix == undefined || matrix.length === 0){
    return [];
  }
  let arrayMatr = [];
  matrix.forEach((el, i) => {
    if(i % 2 === 0){
      arrayMatr.push(...el);
    }else{
      for (let index = el.length-1; index >= 0; index--) {
        const element = el[index];
        arrayMatr.push(element);
      }
    }
  });
  return arrayMatr

}
