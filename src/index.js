import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

let pc = {};
fetch(pcUrl)
  .then(async (res) => {
    pc = await res.json();
  })
  .catch(err => {
    console.log('Чтото пошло не так:', err);
  });

app.get('/task3A/volumes', (req, res) => {
  const volumes = pc.hdd;
  let returnVolumes = {};
  let volumeLabels = [];

  volumes.forEach(hdd => {
    if (returnVolumes[hdd.volume]) {
      returnVolumes[hdd.volume] += hdd.size;  
    } else {
      volumeLabels[volumeLabels.length] = hdd.volume;
      returnVolumes[hdd.volume] = hdd.size;
    }
  });

  volumeLabels.forEach(label => returnVolumes[label] += "B");

  res.status(200).json(returnVolumes);
});

app.get('/task3A(/:deep1)?(/:deep2)?(/:deep3)?', (req, res) => {
  const params = req.params;
  let returnValue = pc;

  if (params.deep1) {
    returnValue = pc[params.deep1];
  }

  if (params.deep2 && returnValue != undefined) {
    returnValue = returnValue[params.deep2];
  }

  if (params.deep3 && returnValue != undefined) {
    returnValue = returnValue[params.deep3];
  }

  console.log(returnValue);

  if (returnValue !== undefined) {
    res.status(200).json(returnValue);
  } else {
    res.status(404).send('Not found');
  }
});


// app.get('/clear', isAdmin, async (req, res) => {
//   await User.remove({});
//   await Pet.remove({});
//   return res.send('OK');
// });

app.listen(3000, () => {
    console.log('Your app listening on port 3000!');
});