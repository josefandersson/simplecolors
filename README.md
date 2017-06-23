# simplecolors
###### *The easiest way of making console output colorful.*
#
---

### Installation
```
npm install simplecolors
```

### Usage
```
var simplecolors = require('simplecolors');

console.log( simplecolors('&aHe&bllo &fWo&2rld&0!') ); // --> 'Hello World'
```
or
```
var simplecolors = require('simplecolors');

console.log( '&aHe&bllo &fWo&2rld&0!'.escapeColors ); // --> 'Hello World'
```
Simply write '&' followed by one of the following codes in a string and pass it to simplecolors (&a for black, &2 for bold,..):
```
0 - reset
1 - bold
2 - dim
3 - italic
4 - underline
5 - inverse
6 - hidden
7 - strikethrough

a - black
b - red
c - green
d - yellow
e - blue
f - magenta
g - cyan
h - white

ax - background black
bx - background red
cx - background green
dx - background yellow
ex - background blue
fx - background magenta
gx - background cyan
hx - background white

i - bright black
j - bright red
k - bright green
l - bright yellow
m - bright blue
n - bright magenta
o - bright cyan
p - bright white

ix - background bright black
jx - background bright red
kx - background bright green
lx - background bright yellow
mx - background bright blue
nx - background bright magenta
ox - background bright cyan
px - background bright white
```
