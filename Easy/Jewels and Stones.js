var numJewelsInStones = function(jewels, stones) {
    let jewel = {};
    let count = 0;

    for(let stone in jewels){
        jewel[jewels[stone]] = 1;
    }

    for(let stone in stones){
        if(jewel[stones[stone]]) {
            count++;
        }
    }

    console.log(count);
};

numJewelsInStones("z","ZZ");