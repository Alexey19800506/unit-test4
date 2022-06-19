import { calc } from './calculator.js'

it('should get subtraction numbers', () => {
    const result = calc('5 - 3');
    expect(result).toEqual('5 - 3 = 2');
});

it('should get sum numbers', () => {
    const result = calc('8 + 3');
    expect(result).toEqual('8 + 3 = 11');
});

it('should get multiplication numbers', () => {
    const result = calc('5 * 5');
    expect(result).toEqual('5 * 5 = 25');
});

it('should get division numbers', () => {
    const result = calc('15 / 3');
    expect(result).toEqual('15 / 3 = 5');
});