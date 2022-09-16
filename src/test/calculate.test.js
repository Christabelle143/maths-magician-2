import calculate from '../logic/calculate';

describe('Calculator', () => {
  it('should perform basic substraction', () => {
    const multiplication = calculate({ total: 30, next: 10, operation: '-' }, '=');
    expect(multiplication.total).toBe('20');
  });
  it('should perform basic addition', () => {
    const addition = calculate({ total: 5, next: 6, operation: '+' }, '=');
    expect(addition.total).toBe('11');
  });
  it('should reset the screen', () => {
    const reset = calculate({ total: null, next: null, operation: 'null' }, 'AC');
    expect(reset).toEqual({ total: null, next: null, operation: null });
  });
});
