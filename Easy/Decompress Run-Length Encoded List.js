var decompressRLElist = function(nums) {
    let arr = [];

    for(let i=0; i<nums.length;i = i+2) {
        for(let j = 0;j<nums[i]; j++){
            arr.push(nums[i+1]);
        }
    }
    console.log(arr)
};

decompressRLElist([1,2,3,4]);