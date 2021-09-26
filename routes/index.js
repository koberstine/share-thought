const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');

// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);

router.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
});

router.use((req, res) => {
  res.status(404).send('<h1>404 Error!</h1>');
});

module.exports = router;
