const sum = require('./sum');

describe('Testing sum function', () => {
    beforeAll(() => {
        /* Runs before all tests */
    })
    afterAll(() => {
        /* Runs after all tests */
    })
    beforeEach(() => {
        /* Runs before each test */
    })
    afterEach(() => {
        /* Runs after each test */
    })

    test('adds 1 + 2 = 3', () => {
        expect(sum(1,2)).toBe(3)
    });

})

 