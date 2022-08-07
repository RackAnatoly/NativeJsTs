import {getSum, getTriangleType, isEvenIndexSumCreater, sum} from "./tasks";

test.skip('get sum', () => {
    expect(sum(3, 5, 7, 6, 4, 9,)).toBe(34)
    expect(sum(0)).toBe(0)
})
test.skip('Triangle', () => {
    expect(getTriangleType(1,1,1)).toBe('10')
    // expect(getTriangleType(2,3,3)).toBe('01')
    // expect(getTriangleType(4,5,3)).toBe('11')
    // expect(getTriangleType(10,2,2)).toBe('00')
})

test('getSum', () => {
    expect(getSum(34)).toBe(7)

})

test('isEvenIndexSumCreater', () => {
    expect(isEvenIndexSumCreater([0,1,2,3,4,5])).toBe(false)

})