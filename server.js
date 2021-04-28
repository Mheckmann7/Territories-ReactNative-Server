const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();
app.use(logger('dev'));
app.use(cors());
app.use(express.json());

//For testing
const territory = [{
    latitude: 122,
    longitude: 65, 
}]

app.get('/api/territory', function (req, res) {
    res.json(territory);
})

//

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
}); 