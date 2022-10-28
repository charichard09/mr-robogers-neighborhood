# _Mr Robogers Neighborhood_

#### By _**Richard Cha**_

#### _{Brief description of application}_

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

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

* _None_

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