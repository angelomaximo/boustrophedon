# boustrophedon
It's boustrophedon without reversing the words.


> The line should break when the pixel reach its limit. 

- If the line breaks I transform to Boustrophedon. And the next back to normal. So, you shall transform to boustrophedon every other line break.

[] Increase the text width:
// 1. Jump to lines-break as few as possible;
// i.e. don't waste time w/ your eye movement
// jumping to the next line break: for that, use
// boustrophedon w/ a wide line before the break.

[] Fix the ponctuation:
// 1. put the comma on the right side, e.g.
// if the boustrophedon is true, then "vu." => ".vu"

[] Improve the regex:
// 1. make it just to cut at the end of a word, or
// at the blank space.

[] Colect new words:
// run over the all the words and store the
// unrepeatedly ones. After, put the translation

[] English speed-reading:
// your other speed-reading word substituion;
// but only to English.