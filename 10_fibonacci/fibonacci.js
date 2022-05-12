const fibonacci = function(nums) {
    let fibNew = 2;
    let fibLast = 1;
    let fibNum = 1;
    if(nums==1||nums==2){
        return 1
    }
    else if(nums<=0){
        return "OOPS"
    }
    else{
        for(let i=4; i<=nums;i++){
            fibNew = fibLast+fibNew;
            fibLast = fibNum+fibLast;
            fibNum = fibLast-fibNum;
        }
        return fibNew 
    }  
};

// Do not edit below this line
module.exports = fibonacci;
