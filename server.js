const express = require('express'); 
 
const app = express(); 
const PORT = process.env.PORT || 8080;
 
app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'];
    const op = (/\(([^)]+)\)/.exec(req.headers['user-agent']))[1];
    const lg = req.headers['accept-language'].split(',').slice(0, 1).join('');
 
    res.json({
        ipaddress: ip,
        language: lg,
        software: op
    });
});
 
app.listen(PORT, () => console.log('Server is listening on port ' + PORT));