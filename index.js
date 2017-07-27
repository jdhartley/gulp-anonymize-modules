var through = require('through2');
var gutil = require('gulp-util');

module.exports = function() {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-anonymize-modules', 'Streaming not supported'));
			return;
		}

		try {
			var content = file.contents.toString();
			content = content.replace(/define\s*\(\s*(['"]).+\1\s*,\s*/, 'define(');
			file.contents = new Buffer(content);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-anonymize-modules', err, {
				fileName: file.path
			}));
		}

		this.push(file);
		cb();
	});
};
