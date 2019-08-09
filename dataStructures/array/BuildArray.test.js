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

    it("should be able to create and call a mock function", () => {
        const displayItems = BuildArray.prototype.displayItems = jest.fn();
        const buildArray = new BuildArray();

        buildArray.displayItems();
        
        expect(displayItems).toHaveBeenCalledTimes(1);
    });


})