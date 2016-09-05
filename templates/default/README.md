
# <%= appName %> [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> <%= appDescription %>

## Run
Run the project by running `npm install` and `npm start`!

### Docker
There is a dockerfile to build a docker image.

Run the following to build the image:
```
$ docker build -t <%= appName %> .
```

And launch it with the following command:
```
$ docker run -d --name <%= appName %> <%= appName %>
```
