const express= require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}

app.post('/test', (req, res) => {
    res.send('testy time')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
})