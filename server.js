const express = require('express'); 
 
const app = express(); 
const PORT = process.env.PORT || 8080;
 
app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'];
    res.send('Your IP address is: ' + ip);
});
 
app.listen(PORT, () => console.log('Server is listening on port ' + PORT));