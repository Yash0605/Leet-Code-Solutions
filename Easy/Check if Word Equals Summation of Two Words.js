var isSumEqual = function(firstWord, secondWord, targetWord) {
    
    let [firstWordVal, secondWordVal, targetWordVal] = Array(3).fill("");

    // for(let i=0; i<firstWord.length; i++) {
    //     const val = firstWord.charCodeAt(i) - 97;// need to get 0 for a and so on
    //     firstWordVal+=val.toString();
    // }

    // const reducer = (accumulator, currentValue, index, array) => accumulator+(firstWord.charCodeAt(index) - 97).toString();
    const reducer = (accumulator, currentValue, index, array) => {
        return accumulator + ((array.join('')).charCodeAt(index) - 97).toString();
    };

   
    return parseInt((firstWord.split('')).reduce(reducer, "")) + parseInt((secondWord.split('')).reduce(reducer,"")) == parseInt((targetWord.split('')).reduce(reducer,""));
};

isSumEqual("aaa", "a", "aaaa");