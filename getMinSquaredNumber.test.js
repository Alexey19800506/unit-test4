import { getMinSquaredNumber } from './getMinSquaredNumber.js'

it('should get squared min |number|', () => {
    const result = getMinSquaredNumber([3, -7, 0.19, 22.9, -33.3]);
    expect(result).toEqual(0.0361);
});