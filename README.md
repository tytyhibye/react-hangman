## Hangman

### By: Tyler Bates, Chisato Murakami, Zinfira Safargalieva

<hr/>

### Description
Hangman is an application allowing the user six chances to guess the generated word and save the hangman avatar. The user can click on a letter in the displayed alphabet to guess that letter. If the guess is correct the letter will display in it's place in the word. If the guess is incorrect, a part of the avatar will display in the hangman card. The game ends when either all the blank letters are displayed or the entire hangman avatar is visible. If the user is struggling to guess there is a hint button that can be pressed to display a hint about the generated word.
<hr />


## Behavior Driven Development 

|   Behavior Description        |
|-------------------------------|
| 1. Generate word to guess(API? or list) []|
| 2 As a user, I want to see the length of the word first. (Displayed with underscores)[]|
| 3. As a user, I want to click letters. (buttons? onClick func?) []|
| 4. If the word has the letter(s) that I click, it will show up in the word. []|
| 5. If the word does not have the letter(s) that I click, it will add a body part to a hangman. []|
| 6. I can choose wrong letters only 5 times. []|
| 7. When I guess wrong letters 6 times, I lose. (show result?) []|
| 7. As a user, I want to be notified when I win or lose. []|

<hr />

## Diagram of Project

![diagram](./public/HangmanDiagram.drawio.png)

<hr />

## Instructions for Running Application

```
$ npm run start
```
Starts the live server in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```
$ npm test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
$ npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```
$ npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
