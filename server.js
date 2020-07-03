const express= require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static( 'client/build' ));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}

app.get('/butthole', (req, res) => {
    res.send('fuck you')
})

app.post('/addknife', (req, res) => {
    const knifedata = req.body;
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
})