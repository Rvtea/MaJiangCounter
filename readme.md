## Ma Jiang Management Tool

### Basic Intro
This tool is based on [Vue.js](http://vuejs.org/) and [Semantic UI](http://semantic-ui.com/) that can count rate and stat for Ma Jiang game. It works better on mobiles!
Here it goes like:

<img src="https://github.com/Rvtea/MaJiangCounter/blob/gh-pages/img/example_img.png" width = "400" alt="example" align="center" />

### How to use
Well, it is easy to use.
First, when you implement a round, you will know who win, so just click the radio button right down the player's name. This will trigger an action to disable the input box, so you do not need to calc the whole win rate, just left to the computer.
Second, you will know the actual number the rest loses. Just input them one by one. For 0 case, you do not need to input, just left it empty and let us do the left.
Finally, click on the add button to add the round's info. Whole value will be updated right after the add action. If you input something wrong, just click the delete button then add a new row.

### Need Improvement
* support customized player names (well, really needed if I want more users...╭(╯^╰)╮)
* refactor for less code with functional programming