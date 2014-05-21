var eol = require('../');
var should = require('should');
var path = require('path');
var File = require('gulp-util').File;
var Buffer = require('buffer').Buffer;
require('mocha');

describe('gulp-eol', function () {
  describe('eol()', function () {
    var input;

    input = ['wadup'];
    testFiles(eol('\r\n'), input, ['wadup\r\n']);

    input = ['wadup', 'doe\n', 'he\r\ny'];
    testFiles(eol('\n'), input, ['wadup\n', 'doe\n', 'he\ny\n']);

    function testFiles(stream, contentses, results) {
      it('should eol one or several files', function (done) {
        var count = 0;
        stream.on('data', function (newFile) {
          should.exist(newFile);
          should.exist(newFile.contents);

          var newFileIndex = newFile.index;

          String(newFile.contents).should.equal(results[newFileIndex]);
          Buffer.isBuffer(newFile.contents).should.equal(true);

          if (++count === contentses.length) done();
        });

        contentses.forEach(function (contents, i) {
          var file = new File({
            cwd: '/home/contra/',
            base: '/home/contra/test',
            path: '/home/contra/test/file' + i + '.js',
            contents: new Buffer(contents)
          });
          file.index = i;
          stream.write(file);
        });

        stream.end();
      });
    }
  });
});
