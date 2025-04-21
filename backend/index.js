import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = 'o0z8y85rjdx28iqef32f4mrl6e56b71742437588342';

app.post('/create-payment', async (req, res) => {
  const { amount } = req.body;
  const body = {
    network: 'BSC',
    fundsGoal: amount,
    smartContractAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
  };

  const resp = await fetch('https://my.disruptivepayments.io/api/payments/single', {
    method: 'POST',
    headers: {
      'client-api-key': API_KEY,
      'content-type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await resp.json();     
  res.json(data);
});

app.post('/check-payment', async (req, res) => {
  const { address } = req.body;
  
  const resp = await fetch(`https://my.disruptivepayments.io/api/payments/status?network=BSC&address=${address}`, {
    method: 'GET',
    headers: {
      'client-api-key': API_KEY,
      'content-type': 'application/json'
    }
  });

  const data = await resp.json();
  console.log("/check-payment data ==>",data);
  res.json(data);
});

app.listen(3001, () => console.log('Server running on port 3001'));