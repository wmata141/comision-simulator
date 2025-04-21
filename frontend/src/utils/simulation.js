export function simulate(capital, months, type) {
    const rates = { 3: 0.01, 6: 0.02, 9: 0.03, 12: 0.04 };
    const rate = rates[months];
    let table = [];
    let total = capital;
  
    for (let i = 1; i <= months; i++) {
      let gain = type === 'simple' ? capital * rate : total * rate;
      table.push({ mes: i, ganancia: gain.toFixed(2), total: (total + gain).toFixed(2) });
      if (type === 'compuesto') total += gain;
    }
  
    const feePercent = capital <= 1000 ? 0.02 : capital <= 10000 ? 0.01 : capital <= 35000 ? 0.005 : 0.0025;
    const fee = total * feePercent;
    const neto = total - fee;
  
    return { table, total: total.toFixed(2), fee: fee.toFixed(2), neto: neto.toFixed(2) };
  }