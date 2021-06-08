var runningSum = function(nums) {
    let arr = [];
    arr.push(nums[0]);

    for(let i=1; i<nums.length; i++){
        const sum = nums[i] + arr[i-1];
        arr.splice(i, 0, sum);
    }

    return arr;
};

runningSum([1,2,3,4]);