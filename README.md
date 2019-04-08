# React Clicky Game

This is a simple proof-of-concept game built using parent and child components, es6 class declaration, simple components, click event handlers, state and props. 

In this game, the user can click on any of the 8 fonzy pictures rendered to the page. This will trigger a reshuffling of the images and a check of whether that image has been clicked yet or not. If the image has not yet been clicked, your score increases and the game goes on. If the image has already been clicked, the user is alerted that they've lost and the game resets. 

The parent class component tracks the state of each of the child component images and passes it to them as props. It also handles the click logic for each image, also passed as props. 

The images are stored in the public folder and a json file with their urls stored as an array of objects is imported into App.js. This array is held in the state of the parent component and is used to render each of the child components, passing them each their respective img url. 