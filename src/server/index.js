import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  console.log('I WAS PINGED I WAS PIIIIIINGED')
  return res.send('HEY HEY HEY');
});

app.listen(8080, () =>
  console.log('Example app listening on port 8080!'),
);