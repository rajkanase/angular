let Machine = (function(){
    return {
        bhp : 1500,
        f : 2000
    };
})();

let Engine = ((mac)=>{
        return() =>{ console.log(`The BHP is ${mac.bhp} and F is ${mac.f}`);}
})(Machine);

let abc=Engine;
abc()




