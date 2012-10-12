# Simple build script to minify and concacenate files using node.js

A simple build script that is easy to integrate in your workflow. Delibately simple, this is a nice base that can sparks ideas or ready to be build on top for something more complex that fit your need. You can see the blog post about this project here.

## Dependencies

The build.js script required node.js and the uglifyJS module.

## Concatenating files

First got to build/build.js, in this file you will see the function concat, just below:

    concat({
	src : ['file1.js', 'file2.js'],
	dest : 'dist/concatenatedFile.js'
    });

It's as simple as that, just tell the script what files wou want to concatenante, your not confines to javascript file, you could also concatenate templates files.

## Minify Javascript with UglifyJS

To use the minify script you will need to have uglifyJS installed in your app. Then much like concat, chose your already concatenate file and minify it.

uglify('dist/concatenatedFile.js', 'dist/concatenatedFile.min.js');


## Loading the script

go into the build folder and then Just do 

   node build.js 

then you should see 3 logs

    dist/templates.html built.
    dist/appfiles.js built.
    dist/appfiles.min.js built.

and there you go your files has been created. You could also put that command into a post-commit hook for profit!

## Using an external array

You probably want to define your js files array somewhere else that will be used by oth your app and your build script.

To do that you can first require your config file.

    var conf = require('../app/config')

Then in your config file you need to tell node.js what this module return. As you can expect that do not get so well with your normal app, that's why at the end of the file we got

    try{
      if(exports) exports.filesArray = filesArray;
    }catch(e){
  
    }

It looks weird, but with node.js we do not have any window variable like in the broser and in your app *if(export)* will throw an error.

Then you can change your concat in your build.js

    concat({
	src : conf.filesArray,
	dest : 'dist/concatenatedFile.js'
    });

There you go, now your build script is completely integrated with your app dependencies.