import {start} from '../src/index'

describe("index start", () => {
    test("should return Let's start!", () => {
        return expect(start()).toEqual("Let's start!");
    })
})