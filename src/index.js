// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let warnMessage = "You are rich, my friend! We don't have so much coins for exchange";
    let coins = {H: 50, Q: 25, D: 10, N: 5, P: 1};
    let total = {};

    if (currency < 10000) {
        
        for (let index in coins) {
            let amount = Math.floor(currency / coins[index]);

            if (amount > 0) {
                total[index] = amount;
                currency = currency - amount * coins[index];
            }
        
        }
    }
    else {
        return warnMessage && console.warn(warnMessage);
        }

    return total;
}
