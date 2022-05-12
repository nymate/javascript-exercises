const findTheOldest = function(allInfo) {
    let currentDate = new Date();
    const ages = [];
    oldestPerson = [];
    
    for (let i=0; i<=allInfo.length-1 ; i++) {
        if(allInfo[i].yearOfDeath!=undefined){
            ages.push(allInfo[i].yearOfDeath-allInfo[i].yearOfBirth);
        }
        else{
            ages.push(currentDate.getFullYear()-allInfo[i].yearOfBirth)        
        }
    }

    let max = Math.max(...ages);
    let indexNumberOfOldest=ages.findIndex(whichIsHighest)
      
    function whichIsHighest(age) {
    return age==max;
    }
    
    return allInfo[indexNumberOfOldest];
}

// Do not edit below this line
module.exports = findTheOldest;
