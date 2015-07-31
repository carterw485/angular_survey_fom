var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	title: String,
	options: Array,
	created_by: String,
	created_at: {type: Date, default: Date.now}
});

mongoose.model('Poll', PollSchema);