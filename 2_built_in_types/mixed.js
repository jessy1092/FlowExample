// @flow

// mixed: The supertype of all types
function takes_mixed(x: mixed): void {}

takes_mixed(0);
takes_mixed('');
takes_mixed({foo: 'bar'});
takes_mixed(undefined);
takes_mixed(null);

// mixed: But not the subtype of all types
function return_mixed(): mixed {}

// (return_mixed(): number);  // All error
// (return_mixed(): void);
// (return_mixed(): null);
// (return_mixed(): string);
