import { default as crypt } from 'crypto-js';

export const range = (min = 0, max = 1000) =>
    Math.floor(Math.random() * max) + min;

export const value = (length = 64) =>
    crypt.lib.WordArray.random(length / 2).toString();
