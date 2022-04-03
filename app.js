let express = require('express');
let app = express();
const PORT = 5000

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/contact', function(req, res) {
    res.send('Contact');
});

app.listen(PORT, () => console.log(`SERVER STARTED PORT ${PORT}`))
