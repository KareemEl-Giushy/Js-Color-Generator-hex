# Js Color Generator

This project contains two .html files 

 - index.html
 - hex.html

the two files are the same (in style and html Dom)
the difference is the scripts.

## The Js Files

#### index.html
Contains the 

> **> main.js**

this file is a very simple random color picker form an array called colors.
#### hex.html
Contains the 

> **hex.js**

this file is a more advanced random color picker by generating a random hex code.
## How Hex Code Works

A color hex code consists of 6 characters [ with out the hash (#) ].
Just like This:

> => # FF FF FF

So I managed to make this formula.
## How I Generated the Hex Code
I declared a variable called color [Array] that contains numbers from 0-9
and letters form A-F . And we all know that to select an item in an array you need to specify its index number, So I made a function called ( randomGenerator ). To generate a random number from 0 to 16. And
I made a for loop that loops 6 times and each time it selects an item from the array and add it into the variable ( hexval ).
### Picking a rand 

## Made By Kareem El-Giushy

Under **Gun Licence**