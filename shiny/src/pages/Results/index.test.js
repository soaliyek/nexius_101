import { formatJobList, formatQueryParams } from "./";


describe('formatJobList function group tests', () => {
    test('formatJobList Function mid-element', () => {
        const report = formatJobList('Software Engineer', 2, 0);
        const expected = 'Software Engineer,';

        expect(report).toEqual(expected);
    }) 

    test('formatJobList Function mid-element', () => {
        const report = formatJobList('Software Engineer', 1, 0);
        const expected = 'Software Engineer';

        expect(report).toEqual(expected);
    }) 
})