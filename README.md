# gulp-anonymize-modules

A gulp stream that removes defined names for AMD modules, making them anonymous.

## Install

```bash
npm install gulp-anonymize-modules --save-dev
```

## Usage

```js
var gulp = require('gulp'),
    anonymizeModules = require('gulp-anonymize-modules');

gulp.task('default', function() {
    gulp.src('lib/**/*')
        .pipe(anonymizeModules)
        .pipe(gulp.dest('dest'));
});
```

## License
__ISC__
