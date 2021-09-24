const express = require('express');


// This app object right here is used to set up
// configuration that will listen for incoming requests that
// are being routed to the express side of the app
// from the node side

const app = express();

app.get('/',(req,res) =>{
	res.send({hi:'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(5000);

