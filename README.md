# game_of_life
A Game of Life implementation using react

Node version 10 should be installed and NPM version 6

To install all packages run "npm install" and "npm run client-install"
To run node server run "npm run client"
It will run on localhost port 3000 by default
Go to localhost:3000 to see UI

#The logic and algorithm

First would be to create the two dimensional array to hold the orthogonal grid of cell cells.
Each value in the grid will either be true or false for alive or dead.
Loop through each row in the two-dimensional and check how many neighbors the current position has.
Then run a check to see if the current position needs to be changed.

#Building UI

There is one main component that holds smaller sub components. The main component will hold the state of the entire game
The sub controls will initiate the board and the controls. The board will handle the state of the
individual pieces of the board. At first I decided to use redux to have a global state so the controls can update the
board without the board having to use props from controls. I decided it simplify the project to not have redux because
there are not that manying moving parts that need to talk to each other. The core logic is in its own file and is pulled
in from the main component.

#Testing
The main is done on the core logic of the program in game. Using mocha and chai to create a test script and making
sure it pass all the test.

It can be ran be cd into the client directory and run "npm run test"




