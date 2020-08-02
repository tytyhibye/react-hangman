## Hangman

### By: Tyler Bates

<hr/>

### Description
Hangman is a React application allowing the user six chances to guess the generated word and save the hangman avatar. Check it out [here](https://hangman-tyty.firebaseapp.com).
<hr />


## Behavior Driven Development 

|   Behavior Description        ||
|-------------------------------|------------------------------|
|:heavy_check_mark: | 1. Generate a word to guess from master list of words (obj)|
|:heavy_check_mark: | 2. As a user, I want to see the length of the word first. (Displayed with underscores)|
| :heavy_check_mark:|3. As a user, I want to click letters. (buttons? onClick func?) |
| :heavy_check_mark:|4. If the word has the letter(s) that I click, it will show up in the word. |
|:heavy_check_mark: |5. If the word does not have the letter(s) that I click, it will add a body part to a hangman. |
| :heavy_check_mark:|6. User may click "hint" button to display clue of what hidden word is. |
|:heavy_check_mark: |7. I can choose wrong letters only 5 times. |
|:heavy_check_mark: |8. When I guess wrong letters 6 times, I lose. (show result?) |
|:heavy_check_mark: |9. As a user, I want to be notified when I win or lose. |
| :heavy_check_mark:|10. As a user, I want to see the answer when I lose. |
| :heavy_check_mark:|11. When the game ends, I want to see 'Play again?' button. |

<hr />

## Diagram of Project

![diagram](./public/HangmanDiagram.drawio.png)

<hr />

## Setup/Installation Requirements

1. Clone this projects repository into your local directory following [these](https://www.linode.com/docs/development/version-control/how-to-install-git-and-clone-a-github-repository/) instructions.

2. Open the now local project folder with [VSC](https://code.visualstudio.com/Download) or an equivalent

3. Navigate to the project directory from your terminal by entering the following:

```
$ cd ~/hangman
```

4. Within the projects directory install all required dependencies with

```
$ npm install
```

5. Run the application to view in your browser with

```
$ npm run start
```

> If the browser does not automatically launch, view the project [here](https://localhost:3000)

<hr/>

## Known Bugs

### There are no known bugs at this time

If you have a bug or an idea, browse the open issues before opening a new one. You can also take a look at the [Open Source Guide](https://opensource.guide/).

<hr/>

## Technologies Used

- JavaScript
- React
- Firebase
- Redux
- Reactstrap
- Bootstrap
- HTML
- CSS
- Git

<hr/>

## Legal

#### Apache License V2.0

Copyright 2020 Tyler Bates @ Epicodus

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
