var balancedStringSplit = function(s) {
    let stack = [];
    let count = 0;
    stack.push(s.charAt(0));

    for(let i=1; i<s.length; i++){
        let top = undefined;
        if (stack.length > 0) top = stack[stack.length-1];
        console.log(top)

        if(!top || top === s[i]) {
            stack.push(s[i]);
        } else stack.pop();

        if(stack.length === 0) count++;
    }

    console.log(count);
};

balancedStringSplit("RLRRLLRLRL");