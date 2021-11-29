import getHealth from '../health';

test.each([
  [{ name: 'magician', health: 13 }, 'critical'],
  [{ name: 'magician', health: 48 }, 'wounded'],
  [{ name: 'magician', health: 92 }, 'healthy'],
])('%o', (info, expected) => {
  const result = getHealth(info);
  expect(result).toBe(expected);
});
