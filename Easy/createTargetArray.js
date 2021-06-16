var createTargetArray = function(nums, index) {
    let arr = [];

    nums.forEach((element, i) => {
        arr.splice(index[i],0,element)
    });

    console.log(arr);
};

createTargetArray([0,1,2,3,4],[0,1,2,2,1]);