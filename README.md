# _Mr Robogers Neighborhood_

#### By _**Richard Cha**_

#### _A web application that takes user input and returns every value from 0-input with 1, 2, 3 substituted for Beep1, Boop!, Won't..._

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_

## Description

_A web application that takes in a number as an input, and creates and prints a list from 0 to the number input, with any number containing 1 replaced with "Beep!", any number containing 2 replaced with "Boop!", and any number containing 3 replaced with "Won't you be my neighbor?"._

## Setup/Installation Requirements

* _Go to link:_
* [Mr Robogers Neighborhood](https://charichard09.github.io/mr-robogers-neighborhood)
* _Enter a number into the form and hit submit input!_

* _Alternatively:_
* _Clone repo to a local directory_
* _Open Index.html in your default browser_

## Tests

```
Create a web app that takes a number from the user and returns an array of values from 0 to the user's inputted number with the following substitutions for 1's > "Beep!", 2's > "Boop!", 3's > "Won't you be my neighbor?"
- take a number input
- create an array from a loop with elements 0 to input
- for... of loop through array of numbers:
  - if element has 3 (use regex to check number for 3?), change element to "Won't you be my neighbor?"
  - else if element has 2, change element to "Boop!"
  - else if element has 1, change element to "Beep!"
  - else 'continue'
- return array

Describe: convertToBeepBoopWont()

Test1: "It should take a number input from user and create an array from 0-input"
Code:
const inputRange = 3;
const rangeArray = [];
convertToBeepBoopWont(inputRange);
Expected Output: rangeArray which contains [0, 1, 2, 3]

Test2: "It should for..of loop through rangeArray and console.log(element) to confirm loop success"
Code:
const inputRange = 3;
convertToBeepBoopWont(inputRange)
Expected Output: 
0
1
2
3

Test3: 'It should check if element contains a 3, replace element to "Won't you be my neighbor?" and push to let beepBoopWontArray, else continue'
Code:
const inputRange = 3;
let beepBoopWontArray = [];
convertToBeepBoopWont(inputRange)
Expected Output: [0, 1, 2, "Won't you be my neighbor?"]

Test4: 'It should check else if element contains a 2, replace element to "Boop!", else continue'
Code:
const inputRange = 3;
convertToBeepBoopWont(inputRange)
Expected Output: [0, 1, "Boop!", "Won't you be my neighbor?"]

Test5: 'It should check if element contains a 1, replace element to "Beep!", else continue'
Code:
const inputRange = 3;
convertToBeepBoopWont(inputRange)
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?"]

Test6: 'It should check if elements that contain 1, 2, 3 get substituted with precedence in longer input'
Code:
const inputRange = 23;
convertToBeepBoopWont(inputRange)
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!",
"Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!",
"Boop!", "Won't you be my neighbor?"]

```

## Known Bugs

* _When expanded vertically too far, white background is exposed._

## License

_If you have any issues or have questions, ideas or concerns please contact me at [charichard09@gmail.com](mailto:charichard09@gmail.com)_

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _10-28-22_ _Richard Cha_