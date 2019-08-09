export default class BuildArray {
    constructor() {
        this.state = ['first', 'second', 'third']
    }

    displayItemsInState() {
        this.state.forEach((item, index) => console.log(index, ':', item))
        return []
    }
}