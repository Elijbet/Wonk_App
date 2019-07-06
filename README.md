# WONK APP

> Wonk is an app for bookworms to geek out on their books. You can shuffle your bookshelves based on reading progress. It also a tool to wonk out on specific books: get all the podcast, events, news, as well as find out whther it has been adopted into a movie. Reworking the Goodreads API Vue app done a couple of years ago with new skills and features.
 
___

## Project Roadmap

- set up vue.config.js with SCSS globals
- css normalize

#### NAVBAR

- translate codepen react nav into vue; make modification to  designadopt to my purposes;
- items on nav BROWSE | MY BOOKS | WONK OUT
- rewrite mobile first
- factor out nav css into scss

#### BROWSE | HOME section

- masonry layout of book results, very little margins
- flip card animation applied to my layout
- fade in animation applied to backside text, along with a black and white filter and shade cast.

- get books from NYT books on the best sellers, append last 3 years
- have a default populated view
- a description on the flipped back of the card

- flip card animation to turn independently for each

### HIDE SECRET KEYS

- create a file called .env in the root of your project's directory
- inside the .env file, prepend VUE_APP_title to your API key name of choice and assign it
- add the .env file to your .gitignore file
- access the API key via the process.env object
- restart the server
- [vue docs](https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code)

#### SEARCH BAR

- search bar mimic google
- mimic unfolded history from google search 
- save last 10 items of history search
- list recent first
- make search work

___

## Project setup

cd into the project
```
npm run serve
```

