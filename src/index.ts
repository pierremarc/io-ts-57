import * as io from 'io-ts';

export const i = io.interface;

export const myInterface = i({
    a: io.string,
});

