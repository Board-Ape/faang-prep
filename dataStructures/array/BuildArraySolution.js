export default class BuildArray {
    constructor() {
        this.state = ['first', 'second', 'third']
    }

    displayItemsInState() {
        this.state.forEach((item, index) => console.log(index, ':', item))
    }

    push(value) {        
        this.state = [...this.state, value]
    }

    pop() {
        const stateLength = this.state.length;

        if (!this.state) {
            return this.state
        } else {
            const poppedValue = this.state[stateLength -  1];
            const newState = this.state.slice(0, this.state.length - 1);

            this.state = newState;
            
            return poppedValue;
        }
    }

    shift(value) {
        this.state = [value, ...this.state]
    }

    unShift() {
        if (!this.state) {
            return []
        } else {
            const unShiftedValue = this.state[0];
            const newState = this.state.slice(1);

            this.state = newState;

            return unShiftedValue;
        }
    }

}


