var countMatches = function(items, ruleKey, ruleValue) { 

    const obj = {
        'type':0,
        'color':1,
        'name':2
    };

    let count = 0;

    for(let i=0; i<items.length; i++) {
        const index = obj[ruleKey];
        if(items[i][index] === ruleValue) count++;
    }

    console.log(count);
};

countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver");