## Information

<table>
  <tr>
    <td>Package</td><td>gulp-eol</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>Replace or append EOL end of file</td>
  </tr>
</table>

## Usage

### `eol(newline, append)`

- newline: [string] `\n`, `\r\n` or default `os.EOL`
- append: [boolean] whether to append eol end of file if not any, default `true`

```javascript
var eol = require('gulp-eol');

gulp.task('eol', function() {
  return gulp.src('./lib/*.js')
    .pipe(eol())
    .pipe(gulp.dest('./lib/'));
});
```
