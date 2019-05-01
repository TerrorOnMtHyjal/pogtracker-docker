import express from 'express';

const app = express();

app.get('/api/process', (req, res) => {
  console.log('requested replay is', req.query.replayID);
  return res.send('REPLAY ID ACCEPTED');
});

app.listen(8080, () =>
  console.log('Example app listening on port 8080!'),
);