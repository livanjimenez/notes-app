const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on ${port}..`));

app.get('/backend', (req, res) => {
    res.send({ myBackend: 'BACKEND IS HERE' });
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// yoo