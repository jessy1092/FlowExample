// @flow

(true: boolean);
(false: boolean);

// ('foo': boolean)  // Error

(new Boolean(false): Boolean);

// (true: Boolean);  // Error, Boolean and boolean are separate types
