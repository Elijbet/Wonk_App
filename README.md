# WONK APP

> Wonk is an app for bookworms to geek out on their books. You can shuffle your bookshelves based on reading progress. It also a tool to wonk out on specific books: get all the podcast, events, news, as well as find out whther it has been adopted into a movie. Reworking the Goodreads API Vue app done a couple of years ago with new skills and features.


## Project Roadmap

- set up vue.config.js with SCSS globals
- css normalize

#### NAVBAR

- translate codepen react nav into vue; make modification to adopt to my purposes;
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
- individual buttons on books to direct to book page and dropdown to add to bookshelves

- flip card animation to turn independently for each

#### HIDE SECRET KEYS

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
- seach query to Goodreads reaplaces default NYT best books list, and displays default images if they are present, or search images of they are requested.

#### INDIVIDUAL BOOK PAGE

- set up router links
___

## Project setup

cd into the project
```
npm run serve
```

#### Attribution

find by Kokota from the Noun Project
Book by Tatyana from the Noun Project
add by Sumana Chamrunworakiat from the Noun Project
rating by Alex Muravev from the Noun Project
menu by darwis from the Noun Project
responsive react nav by  Matthew Vincent
