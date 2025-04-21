import { simulate } from '../utils/simulation';

test('Simulación con interés simple 3 meses', () => {
  const res = simulate(1000, 3, 'simple');
  expect(res.table.length).toBe(3);
  expect(parseFloat(res.total)).toBeCloseTo(1030); // 1% mensual
});