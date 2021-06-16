var interpret = function(command) {
    const re1 = /\(\)/gi;
    const re2 = /\(al\)/gi;

    console.log(command.replace(re1,'o').replace(re2, 'al'));
};

interpret("G()(al)");