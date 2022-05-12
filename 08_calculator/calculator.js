const add = function(num1,num2) {
    let sum = num1 + num2;
    return parseFloat(sum);
};

const subtract = function(num1,num2) {
	let sum = num1 - num2;
  return parseFloat(sum);
};

const sum = function(nums) {
  let sumAll=0;
  for(let i=0; i<nums.length; i++){
    sumAll += nums[i];}
  return sumAll; 
}

const multiply = function(nums) {
  if(nums==0){
    let sumAll=0;
    for(let i=0; i<nums.length; i++){
      sumAll *= nums[i];
    }
    return sumAll;
  }
  else{
    let sumAll=1;
    for(let i=0; i<nums.length; i++){
      sumAll *= nums[i];
    }
    return sumAll;
  }
};

const power = function(num1,num2) {
    let summa= num1 ** num2;
    return summa;
};

const factorial = function(num) {
  if(num==0){
    return 1;
  }
  else{	
    let sumAll=1;
    for(let i=1; i<=num; i++){
      sumAll *= i;
    }
    return sumAll
  };
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
