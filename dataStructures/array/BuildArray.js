export default class BuildArray {
    constructor() {
        this.state = ['first', 'second', 'third']
    }

    displayItemsInState() {
        this.state.forEach((item, index) => console.log(index, ':', item))
    }

    push(value) {
        const stateLength = this.state.length;
        
        this.state[stateLength] = value;
    }

    pop() {
        const stateLength = this.state.length;
        
    }
}


