const express = require('express');
const logger = require('morgan');

const app = express();
app.use(logger('dev'));

app.use(express.json());

//For testing
const location = [{
    latitude: 122,
    longitude: 65, 
}]

app.get('/api/location', function (req, res) {
    res.json(location);
})

//

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
}); 