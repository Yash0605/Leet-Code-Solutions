var smallerNumbersThanCurrent = function(nums) {
    let arr = [];

    arr = [...nums].sort((a,b) => a-b);
    console.log(arr);
    console.log(nums.map(num => arr.indexOf(num)));
    
};

smallerNumbersThanCurrent([5,0,10,0,10,6]);