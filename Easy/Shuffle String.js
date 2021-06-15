var restoreString = function(s, indices) {
    const arr = new Array(s.length);

    for(let i=0; i<s.length; i++) {
        arr[indices[i]] = s[i]
    }

    console.log(arr.join(''));
};

restoreString("codeleet",[4,5,6,7,0,2,1,3]);