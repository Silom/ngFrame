# ngFrame

[![dependencies](https://david-dm.org/silom/ngframe.png)](https://david-dm.org/silom/ngframe)

ngFrame is a front end for [Frame](git@github.com:jedireza/frame.git). The main idea is to rewrite the [Drywall](https://github.com/jedireza/drywall) Front end in Angular.js, this is not completely possible since Frame works quite different to the Drywall backend.

*Please note, this project is at a very early point. Most of the stuff from Drywall isn't included yet. Check this [task](https://github.com/Silom/ngFrame/issues/2) for more informations.*

## Setup

If you want to try it out, use this [Frame fork](https://github.com/Silom/frame).
I had to make changes to get the views and assets right.

After installing Frame, install Gulp and all node packages:

``
npm install gulp -g
npm install
``

Run Project with ``gulp`` or ``npm start``.

Start customizing.

## Technology

|     Client     | Development |
| -------------- | ----------- |
| Bootstrap      | Gulp        |
| Angular.js     | Browserify  |
| Font-Awesome   |             |

## Philosophy

* Don't include a back end
* Create a website and user system.
* It's just JavaScript
* Modularise your code
* Use Angular :)

And of cause: *What you create with ngFrame is more important than ngFrame.*

## License

MIT
