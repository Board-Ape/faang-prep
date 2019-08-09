export default class BuildArray {
    constructor() {
        this.state = ['first', 'second', 'third']
    }

    displayItemsInState() {
        this.state.forEach((item, index) => console.log(index, ':', item))
    }

    add(value) {
        const stateLength = this.state.length;
        
        this.state[stateLength] = value;
    }   
}

const a = new BuildArray();
a.add('fourth')
console.log(a.state)
