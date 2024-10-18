const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse requests
app.use(express.json());

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
