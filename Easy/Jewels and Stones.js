var numJewelsInStones = function(jewels, stones) {
    
    console.log((stones.split('').filter(stone => jewels.indexOf(stone)!==-1)).length);
};

numJewelsInStones("z","ZZ");