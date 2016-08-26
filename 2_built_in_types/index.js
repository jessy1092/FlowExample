// @flow

// (1 + 1: string)  // Error
('Hello, World': string);

class A {

}

class B extends A {

}

let a = new A();
let b = new B();

(b: A);

// (a: B);  // Error
