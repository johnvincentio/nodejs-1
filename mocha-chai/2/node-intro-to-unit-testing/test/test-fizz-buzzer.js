/* jshint node: true */

/* jshint esnext: true */

/*global describe, it*/

'use strict';

const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

/* a little linear, but works */
    // test the normal case
    it('does fizz-buzz checks on a number', function() {
        // range of normal inputs, including
        // notable cases like negative answers
        const normalCases = [
            {a: 0, expected: 'fizz-buzz'},
            {a: 1, expected: 1},
            {a: 2, expected: 2},
            {a: 3, expected: 'fizz'},
            {a: 4, expected: 4},
            {a: 5, expected: 'buzz'},
            {a: 6, expected: 'fizz'},
            {a: 7, expected: 7},
            {a: 8, expected: 8},
            {a: 9, expected: 'fizz'},
            {a: 10, expected: 'buzz'},
            {a: 11, expected: 11},
            {a: 12, expected: 'fizz'},
            {a: 13, expected: 13},
            {a: 14, expected: 14},
            {a: 15, expected: 'fizz-buzz'},
            {a: 16, expected: 16}
        ];
        // for each set of inputs (a), `fizzBuzzer` should produce the expected value
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a);
            answer.should.equal(input.expected);
        });
    });

/* this looks better as is more descriptive */
    it('should return "fizz-buzz" for multiples of 15', function() {
        [0, 15, 30, 45, 60].forEach(function(input) {
            fizzBuzzer(input).should.equal('fizz-buzz');
        });
    });

    it('should return "buzz" for multiples of 5', function() {
        [5, 10, 20, 50, 100].forEach(function(input) {
            fizzBuzzer(input).should.equal('buzz');
        });
    });

    it('should return "fizz" for multiples of 3', function() {
        [3, 6, 9, 18, 27, 33, 66, 99].forEach(function(input) {
            fizzBuzzer(input).should.equal('fizz');
        });
    });

    it('should return number if not multiple of 3 or 5', function() {
        [1, 2, 4, 8, 13, 16, 29, 46, 109].forEach(function(input) {
            fizzBuzzer(input).should.equal(input);
        });
    });

    it('should raise error if arg is not a number', function() {
        const badInputs = [
            ['a'],
            [1,2,3],
            [{a:'A'}],
            [true],
            [false],
            function(){}
        ];
        badInputs.forEach(function(input) {
            (function() {
                fizzBuzzer(input);
            }).should.throw(Error);
        });
    });
});
