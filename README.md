# Matreshka.js ECMAScript.next boilerplate

[![Dependency Status](https://img.shields.io/david/matreshkajs/matreshka_boilerplate.svg)](https://david-dm.org/matreshkajs/matreshka_boilerplate)
[![devDependency Status](https://img.shields.io/david/dev/matreshkajs/matreshka_boilerplate.svg)](https://david-dm.org/matreshkajs/matreshka_boilerplate#info=devDependencies)

This repo contains everything you need to start using Matreshka.js and ECMAScript 2016 today. In case if you don't want to use Matreshka.js, just don't import it (and remove files if you'd like). The boilerplate is created for everybody who wants to meet the new generation of JavaScript, not only for Matreshka.js fans.

## What are we going to use?

* [Gulp](http://gulpjs.com/) task runner
* [SystemJS](https://github.com/systemjs/systemjs) module loader + [Builder](https://github.com/systemjs/builder)
* [Babel](https://babeljs.io/)
* [Matreshka](https://github.com/matreshkajs/matreshka) of course

## How to get started

There are few steps you need to pass to get started (you will need to use a command line).

1. Install [Node.js 4+](https://nodejs.org/) and npm (usually it automatically installs with Node.js).
2. Install Gulp globally via ``npm install --global gulp`` (you might need to use ``sudo``: ``sudo npm install --global gulp``).
3. Download or clone this repository.
4. Install all dev dependencies via ``npm install``.
5. Run ``gulp`` to see is everything OK (**/dist/** folder is created, **/index.html** and **/dist/index.html** look the same).

There is a little application (modules, styles etc) which is used as an example.

That's all you need to install needed environment. Let's code!

1. Modify existing application.
2. Run ``gulp`` again. It will compile your application source to **/dist/** folder.

After you run ``gulp`` command as a result you get ready-to-go application in **/dist/** folder which you can upload to a server.

## Development ways

Since ECMAScript.next code needs to be compiled to old-fashioned JavaScript, there are two options how this can be done.

The first is browser compiling via [babel/browser.js](https://babeljs.io/docs/usage/browser/). This way is useful in case if you have small application and if you don't like to run any command-line watcher while you develop an application. If you have a lot of modules, you can discover slow loading. It happens because scripts need to be recompiled on every page reload. This way is turned on by default.

The second way is useful when you develop application which contains 10+ modules. For this you need to run ``gulp scripts:watch`` before any change to scripts. Files will be compiled and put to **/js/** folder on every change from **/src/**. To use this option you need to modify **/src/config.js** by replacing all ``"src"`` substrings by ``"js"`` in ``map`` object (for example change ``lib: 'src/lib'`` to ``lib: 'js/lib'``) and get rid of settings required for Babel (remove ``babelOptions`` and ``transpiler``). But don't worry about all this stuff. You can look at **/src/config.precompiled-example.js** and see how it looks like or just rename it to **/src/config.js**.

## Project structure

- **/css/** - CSS files
- **/templates/** - HTML templates you may need to include
- **/img/** - Images that could be used by your HTML and CSS
- **/js/** - Compiled uncompressed JavaScript (ECMAScript 5) files (this folder is gitignored)
- **/src/** - The source code written in ECMAScript 2016
- **/src/app/** - Your application source files
- **/src/app/app.js** - This is your start point for development
- **/src/lib/** - Some libraries you might need to download and include to the project
- **/src/config.js** - SystemJS configuration file
- **/dist/** - Compiled ready-to-go application files (this folder is gitignored)
- **/gulp.js** - A Gulp file
- **/package.json** - Metadata for npm (I hope you already know what is it :))
- **/index.html** - Main HTML file
- **/.gitignore** -  The list of ignored files and folders for Git

## Gulp tasks

- ``gulp scripts`` - Compiles files from **/src/** to **/js/**. You don't need it if you're using browser compiler.
- ``gulp scripts:watch`` - Listens changes from **/src/** and runs ``scripts`` task for every single changed file. You don't need it if you're using browser compiler.
- ``gulp scripts:bundle`` - Compiles scripts into one single JavaScript bundle and puts it to **/dist/js/**.
- ``gulp scripts:build`` - Runs ``scripts:bundle``, adds needed polyfill and minifies **/dist/js/app.js**.
- ``gulp html`` - Uses [gulp-htmlprocessor](https://github.com/dciccale/grunt-processhtml#readme) to replace development part of HTML (few ``<script>`` tags and application initialization) by single minified production ``<script>`` and copies the new file to **/dist/** folder. To make it clear look at gulp-htmlprocessor docs or compare **/index.html** to **/dist/index.html**.
- ``gulp default`` (or just ``gulp``) - runs ``scripts:build``, ``html``, copies files from **/css/** to **/dist/css/** and **/img/** to **/dist/img/**.

Enjoy!
