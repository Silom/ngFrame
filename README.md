# ngFrame

ngFrame is a front end for [Frame](git@github.com:jedireza/frame.git). The main idea is to rewrite the [Drywall](https://github.com/jedireza/drywall) Front end in Angular.js.

*Please note, this project is at a very early point. Most of the stuff from Drywall isn't included yet. Check this [task](https://github.com/Silom/ngFrame/issues/2) for more informations.*

## Setup

If you want to try it out, use this [Frame fork](https://github.com/Silom/frame).
I had to make changes to get the views and assets right.

After installing Frame, install Gulp:

``
npm install gulp -g
``

Run Project with ``gulp``.

Start customizing.

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
