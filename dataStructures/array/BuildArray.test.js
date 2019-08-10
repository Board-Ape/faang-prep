import BuildArray from "./BuildArraySolution";

describe("BuildArray", () => {
    beforeEach(() => {
        // Clear all instances amd calls to constructor and all methods;
    })

    it("should have called the constructor with the correct default state", () => {
        const nBA = new BuildArray();
        const expected = {
            state: ["first", "second", "third"]
        };

        expect(nBA).toEqual(expected);
    });


    // =========================================
    // push()
    // =========================================
    it("should be able to create and call a mock function", () => {
        const displayItems = BuildArray.prototype.displayItems = jest.fn();
        const buildArray = new BuildArray();

        buildArray.displayItems();
        
        expect(displayItems).toHaveBeenCalledTimes(1);
    });
    
    it('push() will push to an empty array', () => {
        const nBA = new BuildArray;
        
        nBA.state = [];
        nBA.push('first')
        const expected = ['first'];

        expect(nBA.state).toEqual(expected)
    });

    it('push() will push to the end of the array', () => {
        const nBA = new BuildArray;

        nBA.push('fourth')
        const expected = ['first', 'second', 'third', 'fourth']

        expect(nBA.state).toEqual(expected)
    });
    

    // =========================================
    // pop()
    // =========================================
    it('should return empty array on an empty array', () => {
        const nBA = new BuildArray;

        nBA.state = [];
        nBA.pop()
        const expected = [];

        expect(nBA.state).toEqual(expected)
    });

    it('should remove last value from state and return that value', () => {
        const nBA = new BuildArray();

        const poppedValue = nBA.pop()
        const expected = ['first', 'second']
        
        expect(poppedValue).toEqual('third')
        expect(nBA.state).toEqual(expected)
    })
    

    // =========================================
    // shift()
    // =========================================
    it('should add to an empty array', () => {
        const nBA = new BuildArray();

        nBA.state = [];
        nBA.shift('first');
        
        const expected = ['first'];

        expect(nBA.state).toEqual(expected);
    })

    it('should add an item to the start of the list', () => {
        const nBA = new BuildArray();

        nBA.shift('I am first');
        const expected = ['I am first', 'first', 'second', 'third'];

        expect(nBA.state).toEqual(expected);
    });


    // =========================================
    // unShift()
    // =========================================
    it('should return an empty array from an empty state', () => {
        const nBA = new BuildArray();

        nBA.state = [];
        nBA.unShift();
        
        const expected = [];

        expect(nBA.state).toEqual(expected);
    })

    it('should remove and return the first item in state', () => {
        const nBA = new BuildArray();

        nBA.unShift();
        const expected = ['second', 'third'];

        expect(nBA.state).toEqual(expected);
    });
})