const express = require('express'); 
 
const app = express(); // This is how we initialize an express app
const PORT = process.env.PORT || 8080;     // We set the port that the application will use
 
// When a GET request is made to the root path: '/' reply with Hello World
app.get('/', (request, response) => {
  response.send('Hello World');
});
 
// We set the app to listen on the given PORT
// It will log a message to the console once it is ready
app.listen(PORT, () => console.log('Server is listening on port ' + PORT));