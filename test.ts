function Profit(gia: number[]): number {
  let minPrice = gia[0];
  let maxProfit = 0;

  for (let i = 1; i < gia.length; i++) {
    if (gia[i] < minPrice) {
      minPrice = gia[i];
    } else if (gia[i] - minPrice > maxProfit) {
      maxProfit = gia[i] - minPrice;
    }
  }

  return maxProfit;
}

console.log(Profit([7, 1, 5, 3, 6, 4]));
console.log(Profit([7, 6, 4, 3, 1])); 
