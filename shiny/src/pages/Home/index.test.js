import { getSum } from './'

test('getSum Function', () => {
    const result = getSum(65, 56);
    expect(result).toBe(121);
})