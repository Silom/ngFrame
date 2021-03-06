# ngFrame

Please note that this repository is deprecated, due to entirely new angular versions and a low usage I quitted supporting this project. Thanks to all my users, it was fun to build ;).

[![Build Status](https://travis-ci.org/Silom/ngFrame.svg?branch=master)](https://travis-ci.org/Silom/ngFrame)
[![dependencies](https://david-dm.org/silom/ngframe.png)](https://david-dm.org/silom/ngframe)

ngFrame is a front end for [Frame](git@github.com:jedireza/frame.git). The main idea is to rewrite the [Drywall](https://github.com/jedireza/drywall) Front end in Angular.js, this is not completely possible since Frame works quite different to the Drywall backend.

## Setup

If you want to try it out, use this [Frame fork](https://github.com/Silom/frame).
I had to make changes to get the views and assets right.

After installing Frame, install Gulp and all node packages:

```
npm install gulp -g
npm install
```

Run Project with ``gulp --dev`` or ``npm start``.

Start customizing.

Build the Project using ``gulp`` (This is ``gulp --dev``  without starting watcher and adding debugging tools like .map files etc.).

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
