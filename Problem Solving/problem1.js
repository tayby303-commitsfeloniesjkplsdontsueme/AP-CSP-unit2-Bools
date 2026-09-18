function classifyNumber(n) {
    if(n===0)
        console.log(`${n} is zero`);
    else if (n>0 && n % 2 ===0)
        console.log(`${n} is positive & even`);
    else if (n>0 && n % 2 ===1)
        console.log(`${n} is positive & odd`);
    else if (n<0 && n % 2 ===0)
        console.log(`${n} is negative & even`);
    else
        console.log(`${n} is negative & odd`);
}
classifyNumber(0)
classifyNumber(4)
classifyNumber(7)
classifyNumber(-4)
classifyNumber(-7)