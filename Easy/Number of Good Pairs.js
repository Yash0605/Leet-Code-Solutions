//solution 1
var numIdenticalPairs = function(nums) {
    let count = 0;
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] === nums[j]) count++;
        }
    }

    console.log(count);
};

// solution 2
var numIdenticalPairs = function(nums) {
    let map = {};
    let count = 0;
    
    for(let i in nnums){
        if(map[i]){
            count+=map[i];//This is where the magic happens with more repeatitions of a value its good pair will alos increase exponentially
            map[i]+=1;
        } else{
            map[i] = 1;
        }
    }

    console.log(count);
};

numIdenticalPairs([1,1,1,1]);