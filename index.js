const express = require('express');
const app = express();

const database = {
  connected: [],
  matex1: 0,
  matex2: 0
};

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/info', (req, res) => {
  const info = `Machines connected: ${database.connected.join(', ')}. Machine matex1 produced: ${database.matex1}, matex2 produced: ${database.matex2}`;
  return res.send(info);
});

app.get('/sock/:machine', (req, res) => {
  const machineName = req.params.machine;
  if (database[machineName] === undefined) {
    return res.status(404).send(`Machine ${machineName} not found`);
  }
  return res.send(`${database[machineName]}`);
});
app.post('/sock/:machine', (req, res) => {
  const machineName = req.params.machine;
  if (database[machineName] === undefined) {
    return res.status(404).send(`Machine ${machineName} not found`);
  }
  database[machineName] = database[machineName] + 1;
  return res.send('ok');
});

app.post('/test/:machine', (req, res) => {
  const machineName = req.params.machine;
  if (database[machineName] === undefined) {
    return res.status(404).send(`Machine ${machineName} not found`);
  }
  database.connected.push(machineName);
  return res.send('ok');
});

app.listen(3000, () => console.info('Example app listening on port 3000!'));