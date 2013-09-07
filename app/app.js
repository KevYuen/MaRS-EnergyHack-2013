var express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.json({
        hello: 'world'
    });
});

app.listen(3000);
console.log('Listening on port 3000');
