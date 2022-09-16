import operate from '../logic/operate';

it('should add 2 numbers', () => {
  expect(operate(1, 2, '+')).toBe('3');
});
it('should subtract numbers', () => {
  expect(operate(5, 2, '-')).toBe('3');
});
