import BuildArray from "./BuildArray";

describe("BuildArray", () => {
    beforeEach(() => {
        // Clear all instances amd calls to constructor and all methods;
    })

    it("should have called the constructor with the correct default state", () => {
        const newBuildArray = new BuildArray();
        const expected = {
            state: ["first", "second", "third"]
        };

        expect(newBuildArray).toEqual(expected);
    });

    // push()
    it("should be able to create and call a mock function", () => {
        const displayItems = BuildArray.prototype.displayItems = jest.fn();
        const buildArray = new BuildArray();

        buildArray.displayItems();
        
        expect(displayItems).toHaveBeenCalledTimes(1);
    });

    it('push() will push to the end of the array', () => {
        const newBuildArray = new BuildArray;

        newBuildArray.push('fourth')
        const expected = ['first', 'second', 'third', 'fourth']

        expect(newBuildArray.state).toEqual(expected)
    })

    it('push() will push to an empty array', () => {
        const newBuildArray = new BuildArray;
        
        newBuildArray.state = [];
        newBuildArray.push('first')
        const expected = ['first'];

        expect(newBuildArray.state).toEqual(expected)
    })

    // pop()
    it('should remove last value from state and return that value', () => {
        const nBA = new BuildArray();

        const poppedValue = nBA.pop()
        
        expect(poppedValue).toEqual('third')

    })

})