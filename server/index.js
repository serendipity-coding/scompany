// server/index.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Routes
const companiesRouer = require('./routes/companies');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(helmet());
app.use(cors());

// Mount routers
app.use('/api/v1/companies', companiesRouer);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
