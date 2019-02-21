const express = require('express');
const cors = require('cors');
const PORT = 8888;
const app = express();            
app.use(cors());
app.get('/student', function(req, res) {
    const students = [
        {
            id: 1,
            name:  'ariel'
        },
        {
            id: 2,
            name: 'haha'
        }
    ]
    res.send(JSON.stringify(students));
})

app.listen(PORT, function() {
    console.log('server started at port ' + PORT)
});