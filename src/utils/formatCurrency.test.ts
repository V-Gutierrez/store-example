import { formatCurrency } from './formatCurrency'


describe('formatCurrency function test', () => {
  it('should return formatted currency value', () => {
    const value = 2_000_000

    const result = formatCurrency(value).replace(/\s/, ' ')
    /*
    Replace is needed due to unexpected interation between jest and Intl API
    https://github.com/facebook/jest/issues/9239
     */

    expect(result).toMatch('R$ 2,000,000.00')
  });
});