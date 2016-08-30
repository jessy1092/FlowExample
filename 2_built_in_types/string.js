// @flow

("foo": string);
('bar': string);

((100 + '%'): string);

(new String('foo'): String);

// ('foo': String);  // Error, String and string are separate types
