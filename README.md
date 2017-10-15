# _Inter-planitary age calculator!_

#### _This application will track volunteers for various volunteer projects._

#### By _**Aaron Rohrbacher**_

## Setup/Installation Requirements

* _Clone this repository_
* _If you haven't already, install node. Instructions can be found here: url(https://nodejs.org/en/download/)_
* _Also install Gulp and Bower globally using npm._
* _Testing is done using Jasmine and Karma. Feel free to test with your favorite testing environment!_
* _Run `npm install` from the root directory of this repository. Note: this should install Moment as well. If it doesn't intall it manually._
* _Run `bower install` from the root directory of htis repository_
* _Run `gulp build`, followed by `gulp serve`, each in the root directory of this repository._

## Specifications:
| Specification:                                                             | Input                                                        | Expected Output |
|----------------------------------------------------------------------------|--------------------------------------------------------------|-----------------|
| Convert years into seconds                                                 | 31                                                           | 977616000       |
| Calculates age in seconds based on current time                            | 31 (assuming exactly midnight on one's 31st birthday)        | 977616000       |
| Coverts earth seconds to various planet seconds (Mars is our example here) | 977616000                                                    | 183791808       |
| Converts seconds to years in any planet (Mars again)                       | 183791808                                                    | 58.28           |
| Calculates life expectancy based on health choices                         | Fitness: 3 or more times/week, Drink: <8 per week, smoke: no | 79              |


## Support and contact details

_Aaron Rohrbacher: aaronrohrbacher.github.io/portfolio/_

## Technologies Used
_Written in JavaScript and JQuery, managed with NPM, Gulp, and Bower. Depends on Moment, and is tested with Karma, built on Jasmine._

Copyright (c) 2017 **_Aaron Rohrbacher_**
