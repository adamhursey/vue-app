# vue-app

This is a Coding Assessment for the role of Junior Software Developer assigned by Barco Rent-A-Truck.

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
