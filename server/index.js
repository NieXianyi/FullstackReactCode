const express = require('express');
require('./services/passport.js');

const app = express();

require('./routes/authRoutes.js')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);

