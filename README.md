# ngFrame

ngFrame is a front end for [Frame](git@github.com:jedireza/frame.git)

*Please note, this project is at a very early point.*

## Setup

If you want to try it out, use this [Frame fork](https://github.com/Silom/frame).
I had to make changes to get the views, assets and CORS right.
Read the setup introduction careful.

For the front end you need to make only one change.
In the *app.js* you can find in line 42 the Restangular Provider. You have the give him the socket of your api.
If you run your server locally, you can write ``localhost:8001``.

*app.js*
``
...
RestangularProvider.setBaseUrl('http://192.168.101.101:8001/')
...
``


## Technology

|     Client     | Development |
| -------------- | ----------- |
| Bootstrap      | Gulp        |
| Angular.js     | Browserify  |
| Lodash         |             |
| Font-Awesome   |             |

## Philosophy

* 'Clone' the Drywall front end and rewrite it an Angular
* Don't include a back end
* Create a website and user system.
* It's just JavaScript
* Modularise your code

And of cause: *What you create with ngFrame is more important than ngFrame.*

## License

MIT
