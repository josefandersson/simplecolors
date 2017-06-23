// jshint esversion:6

var convert = require('color-convert');

const _REGEX_RGB   = /&{(\d{1,3}),(\d{1,3}),(\d{1,3})}/g;
const _REGEX_HEX   = /&\{#?([A-F0-9]{6})\}/g;
const _REGEX_CODES = /&([0-8]|[a-p]x?)/g;

const _CODES = {
    '0':  0,   '1':  1,   '2':  2,   '3':  3,
    '4':  4,   '5':  7,   '6':  8,   '7':  9,
    'a':  30,  'b':  31,  'c':  32,  'd':  33,
    'e':  34,  'f':  35,  'g':  36,  'h':  37,
    'ax': 40,  'bx': 41,  'cx': 42,  'dx': 43,
    'ex': 44,  'fx': 45,  'gx': 46,  'hx': 47,
    'i':  90,  'j':  91,  'k':  92,  'l':  93,
    'm':  94,  'n':  95,  'o':  96,  'p':  97,
    'ix': 100, 'jx': 101, 'kx': 102, 'lx': 103,
    'mx': 104, 'nx': 105, 'ox': 106, 'px': 107,
};

var Exp = {};
Exp.escapeColors = function( str ) {
    str = str.replace(_REGEX_CODES, ( match, p1 ) =>
        "\033[" + _CODES[p1] + 'm');
    str = str.replace(_REGEX_RGB, ( match, p1, p2, p3 ) =>
        "\033[" + convert.rgb.ansi16(p1, p2, p3) + 'm');
    str = str.replace(_REGEX_HEX, ( match, p1 ) =>
        "\033[" + convert.hex.ansi16(p1) + 'm');
    return str;
};

Object.defineProperty(String.prototype, 'escapeColors', {
    get: function escapeColors()
        {
            return Exp.escapeColors(this.toString());
        }
});

module.exports = Exp.escapeColors;
