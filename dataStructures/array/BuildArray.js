import { stat } from "fs";

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

        if (!this.state) {
            return this.state
        } else {
            const poppedValue = this.state[stateLength -  1];
            const newState = this.state.slice(0, state.length - 1);

            this.state = newState;
            
            return poppedValue;
        }
    }
}


