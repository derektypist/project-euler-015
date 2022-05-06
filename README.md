# Project Euler 015 - Lattice Paths

Starting in the top left corner of a 2x2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

The aim is to find the number of such routes through a given gridsize (e.g. 20x20), using HTML Forms and JavaScript.

Information at [Project Euler 015](https://projecteuler.net/problem=15)

## UX

**Getting Started**

Enter a whole number between 1 and 30 in the input field and click on the Submit Button.  You will see the number (grid size) you have entered as well as the number of routes, unless you have made an invalid input.  For example, if you entered 4, you would expect to get 70 routes.  Click on the Reset Button to clear this information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 1 or greater than 30
- Entering a number, but it is not an integer

As a user, I expect the function `latticePaths(4)` to return a number.

As a user, I expect the function `latticePaths(4)` to return 70.

As a user, I expect the function `latticePaths(9)` to return 48620.

As a user, I expect the function `latticePaths(20)` to return 137846528820.

**Information Architecture**

The function `latticePaths(gridSize)` returns a number (integer), where `gridSize` is the size of the grid (number between 1 and 30).

## Features

Allows the user to enter a number (grid size) as well as getting the number of routes from the top left corner to the bottom right corner.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.1.3 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-015) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)