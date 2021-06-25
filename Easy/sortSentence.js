var sortSentence = function(s) {
    const arr = s.split(' ');
    let sortedArray = Array(arr.length).fill('');
    arr.forEach((element) => {
        const val = element.charAt(element.length-1);
        sortedArray.splice(val,1,element.slice(0,element.length-1));
    });
    console.log(sortedArray.join(' ').trim());

    return sortedArray.join(' ').trim();
};

sortSentence("is2 sentence4 This1 a3");
