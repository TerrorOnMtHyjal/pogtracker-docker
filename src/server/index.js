/* global process */
require('dotenv').config();
import express from 'express';

const app = express();

app.get('/api/process', (req, res) => {
  console.log('requested replay is', req.query.replayID);
  return res.send('REPLAY ID ACCEPTED');
});

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server listening on ${PORT}`),
);