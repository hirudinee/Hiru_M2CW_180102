let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();
exports.handler = function (event, context, callback) {


	kinesis.putRecord({
		Data: 'test message sample',
		PartitionKey: '001',
		StreamName: 'Hiru_test'
	}).promise()
		.then(putRecordData => {
			console.log('record data', putRecordData);
			callback(null, putRecordData);
		})
		.catch(err => {
			console.log('error', err);
			callback(null, err);
		});

	//callback(null, 'Successfully executed');
}