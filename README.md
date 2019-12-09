# vue-app

This is a Coding Assessment for the role of Junior Software Developer assigned by Barco Rent-A-Truck.

## App Usage

This app receives data from [JSON Placeholder](https://jsonplaceholder.typicode.com/). The landing page is a mock list of users for the application. When clicking each user you are taken to their User page where their personal information is displayed and you can see a list of their albums. When clicking an album it will take you to that albums landing page where it will display the photos that were added to that album as well as the name of the album and the author. YOu can click the authors name to go to that authors user page and view the other albums that they have created. You can also click the thumbnail of a photo in the album to view a larger version of that in a new tab. There is also a List of Albums button where you can view all of the albums and go directly to that albums landing page from there.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## TODO

* I would like to create a more user-friendly design.
* There is a bug with PropTypes when passing `photoList` to `AlbumView` where it does not recognize that it is an Object that I am passing it. It gives me the error `Expected Object but recieved Array`. When changing the PropType to Array to try and get rid of the error it then recognizes that it is an Object so the error then reads `Expected Array but recieved Object`. I spent a couple hours trying to fix this but realized that it is probably best that I finish the project instead of trying to fix that Vue-warn. I will be working on this in the future.

## Author

[Adam Hursey](http://adamhursey.com)
