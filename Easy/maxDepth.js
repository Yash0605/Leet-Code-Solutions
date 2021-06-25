var maxDepth = function(s) {
    let arr = s.split('');
    let stack = [];
    console.log(arr);
    let count = 0;
    let result = 0;

    for(let i = 0; i<arr.length; i++) {
        if(arr[i] === '(') {
            stack.push('(');
            count++;
            if(count>result) result = count;
        }
        else if(arr[i] === ')') {
            stack.pop();
            count--;
        }
    }
    console.log(count === 0 ? result : 0);
};

maxDepth("(1)+((2))+(((3)))");