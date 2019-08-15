# Execution Context or "Call Stack"

## What is it?
- Environment where the JavaScript code is evaluated and executed.

## 3 Types of Execution Context:
- 1) Global Execution Context - default or base execution context. Code that is not
inside any function. Creates a global object which is a window object. Only one!
- 2) Functional Execution Context - every time a function is invoked. a brand new
execution context is created for that function. REMEMBER although each function as 
its own execution context its only created when invoked.
- 3) Eval Function Execution Context - code executed inside an ```eval``` function
also get its own execution context. Rarely used.

## Example of how it works

```
let a = 'Hello World!';
function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}
function second() {
  console.log('Inside second function');
}
first();
console.log('Inside Global Execution Context');
```

```
Inside first function
Inside second function
Again inside first function
Inside Global Execution Context
```

## How is the Execution Context Created?
- 1) Creation Phase
- 2) Execution Phase

### Creation Phase
- 1) Lexical Environment component is created.
- 2) Variable Environment component is created.
``` 
ExecutionContext = {
  LexicalEnvironment = <ref. to LexicalEnvironment in memory>,
  VariableEnvironment = <ref. to VariableEnvironment in  memory>,
}
```

#### Lexical Environment - (identifier variable mapping) store function declaration and variable (let and const) bindings,
```
var a = 20;
var b = 40;
function foo() {
  console.log('bar');
}
```
- Lexical environment looks like this.
```
lexicalEnvironment = {
  a: 20,
  b: 40,
  foo: <ref. to foo function>
}
```
##### Each Lexical Environment has 3 components
- 1) Environment Record
    - Place where the variable ad function declarations are stored inside the lexical environment.
    - 1) Declarative Environment Record = lexical environment that stores variable and function declarations.
    - 2) Object Environment Record = The lexical environment for global code contains a objective environment 
    record. Apart from variable and function declarations, the object environment record also stores a global 
    binding object (window object in browsers). So for each of binding object’s property (in case of browsers, 
    it contains properties and methods provided by browser to the window object), a new entry is created in 
    the record. 
- 2) Reference to the outer environment
    - Access to outer lexical scope. JS Engine can look for variables inside the outer enviroment if not found
    within the currenty lexical environment.
- 3) "This" binding
    - Global this = global object or window object
    - Function this = dependent on how the function is called.
        - Called by object reference "this" is set to that object
        - Otherwise set to the global object or undefined

#### Variable Environment - used to store variable bindings only


### Execution Phase
- In this phase assignments to all those variables are done and the code is finally executed.
