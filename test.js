function Profit(gia) {
    var minPrice = gia[0];
    var maxProfit = 0;
    for (var i = 1; i < gia.length; i++) {
        if (gia[i] < minPrice) {
            minPrice = gia[i];
        }
        else if (gia[i] - minPrice > maxProfit) {
            maxProfit = gia[i] - minPrice;
        }
    }
    return maxProfit;
}
console.log(Profit([7, 1, 5, 3, 6, 4]));
console.log(Profit([7, 6, 4, 3, 1]));
