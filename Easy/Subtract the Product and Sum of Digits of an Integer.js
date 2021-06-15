var subtractProductAndSum = function(n) {
    const arr = n.toString().split('');

    const mul = arr.reduce((accu, currentValue) => accu*parseInt(currentValue), 1);
    const sum = arr.reduce((accu, currentValue) => accu+parseInt(currentValue), 0);

    console.log(mul-sum);
};

subtractProductAndSum(234);