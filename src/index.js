// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
	let coins = [{label : "H", value : 50}, {label : "Q", value : 25},
                {label : "D", value : 10},{label : "N", value : 5}, {label : "P", value : 1}];
    let tmp = [];
    let result = {};
	if(currency > 10000){
		result = {error: "You are rich, my friend! We don't have so much coins for exchange"};
	} else if (currency >=0){
		for (let i = 0; i < coins.length; i++) {
        let key = Math.floor(currency / coins[i].value);
        currency %= coins[i].value
        tmp.push(key);
        if (key !== 0){
            result[coins[i].label] = key;
        }
        if(currency % coins[i].value === 0){
            i = coins.length;
        }
       
    }
	}
   
    
    return result;
}
