var express = require('express'),
    app = express();

app.get('/app/', function(req, res) {
    res.json({
        hello: 'world'
    });
});

app.listen(3000);
console.log('Listening on port 3000');
