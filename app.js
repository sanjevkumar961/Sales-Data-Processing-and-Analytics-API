const express = require('express');
require('dotenv').config();
const { sequelize } = require('./models');
const revenueRoutes = require('./routes/revenueRoutes');
const { startRefreshJob } = require('./jobs/refreshJob');
const refreshRoutes = require('./routes/refreshRoutes');


const app = express();
app.use(express.json());
app.use('/api/revenue', revenueRoutes);
app.use('/api', refreshRoutes);

sequelize.authenticate().then(() => {
  console.log('DB Connected');
  app.listen(3000, () => console.log('Server running on port 3000'));
  startRefreshJob();
});
