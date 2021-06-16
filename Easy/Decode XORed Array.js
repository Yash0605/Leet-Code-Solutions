var decode = function(encoded, first) {
    let arr = [];
    arr.push(first);

    for(let i=0; i<encoded.length; i++) {
        arr.push(arr[i]^encoded[i]);
    }

    console.log(arr);
    
};

decode([6,2,7,3], 4)