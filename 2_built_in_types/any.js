// @flow

// any: The supertype of all types
function takes_any(x: any): void {}

takes_any(0);
takes_any("");
takes_any({foo: 'bar'});
takes_any(undefined);
takes_any(null);

// any: The subtype of all types
function return_any(): any {}

(return_any(): number);
(return_any(): string);
(return_any(): null);
(return_any(): void);
