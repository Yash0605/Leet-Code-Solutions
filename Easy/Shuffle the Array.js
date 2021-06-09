var shuffle = function(nums, n) {
    let a  = [];
    let count=0;
    
    for(let i=0,j=n; i<n,j<2*n;i++,j++){
        a.splice(count++,0,nums[i]);
        a.splice(count++,0,nums[j]);
    }

    return a;
};

shuffle([2,5,1,3,4,7], 3)