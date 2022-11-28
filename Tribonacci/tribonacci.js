function tribonacci(signature,n){
  const tribonacciArr = [];
  
  if (n === 0) return [];
  for (let i = 0; i < n; i++) {
    if (i < 3) {
      tribonacciArr.push(signature[i]);
    } else{
      tribonacciArr.push(tribonacciArr[i-1]+tribonacciArr[i-2]+tribonacciArr[i-3]);
    } 
  }
  return tribonacciArr;
}
