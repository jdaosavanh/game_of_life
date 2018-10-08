# game_of_life
A Game of Life implementation using react

Node version 10 should be installed and NPM version 6

To install all packages run "npm install" and "npm run client-install"

#The logic and algorithm

First would be to create the two dimensional array to hold the orthogonal grid of square cells.
Each value in the grid will either be true or false for alive or dead.
Loop through each row in the two-dimensional and check how many neighbors the current position has.
Then run a check to see if the current position needs to be changed.

#Building UI

The are going to be two main pieces. The controls of the game and the game board itself.
The controls will initiate the board and when to change to the next iteration. The board will handle the state of the
individual pieces of the board.
Decided to use redux to have a global state so the controls can update the board without the board having to use props
from controls