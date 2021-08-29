[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Share Thought

## Description

Back-end for a social netwoork that allows users to create thoughts, react to thoughts and add other users as friends. This is accomplished using MongoDB with Mongoose object modeling to handle unstructured data and Node.js with Express.js for the network and routing. The project has no front-end at this time.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Demonstration](#demonstration)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Download source files, navigate in console to main project directory, run 'npm install'

## Usage

Navigate in console to main directory of project, run 'npm start'

- /api/users to get all users or post a user
- /api/users/userId to get a one user by ID, update a user or delete a user
- /api/users/:userId/friends/:friendId to add or delete a friend
- /api/thoughts to get all thoughts or post a thought
- /api/thoughts/thoughtId to get one thought by ID or update a thought
- /api/thoughts/:userId/:thoughtId to delete a thought
- /api/thoughts/:thoughtId/reactions to add a reaction
- /api/thoughts/:thoughtId/reactions/:reactionId to remove a reaction

## Credits

Code written by Chris Koberstine as an assignment for UCF Coding Boot Camp, University of Central Florida

## Demonstration

A video showing testing of routes in Insomnia

## License

[https://www.mit.edu/~amini/LICENSE.md](https://www.mit.edu/~amini/LICENSE.md)

    MIT License

    Copyright (c) [2021] [Chris Koberstine]

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

## Contributing

No contributions to this project are being accepted at this time

## Tests

No tests have been written for this project

## Questions

Github: [koberstine](https://github.com/koberstine/)

Please submit any additional questions via email to <koberstine@hotmail.com> with 'github.com/koberstine/share-thought' in the subject of the email.
