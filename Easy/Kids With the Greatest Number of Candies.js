var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);

    console.log(candies.map(candy => candy+extraCandies >= max));
};

kidsWithCandies([2,3,5,1,3],3);