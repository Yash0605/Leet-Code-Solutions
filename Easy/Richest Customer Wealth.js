var maximumWealth = function(accounts) {
    let max = 0;

    for(i=0;i<accounts.length; i++) {
        let sum = 0;
        sum = accounts[i].reduce((accumulator, currentValue) => accumulator+currentValue, 0);

        if(sum > max) max = sum;
    }

    console.log(max);
};

maximumWealth([[1,2,3],[3,2,1]]);

