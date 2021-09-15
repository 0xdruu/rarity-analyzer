import express from 'express';
import { calculateRarity, getTestData } from '@crypto-dev-amigos/common';

const app = express();
const PORT = 8080;

//TODO: formalize api url like /api/v1/
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.get('/testNftRarities/', async (req, res) => {
    console.log('get rarities');

    const data = await getTestData();
    calculateRarity(data).then(
        (nftRarities) => {
            res.status(200).send(
                nftRarities
            );
        }
    );    
});

//TODO: Create app.get('/api/v1/projects/:contract') and other query parameters

//NOTE: One quick note for all contestants - think about how to make the tool as widely usable as possible... 
// Think of config options like "Project Logo / Name / Contract Address" etc. -jalil

//TODO: Would like a app.post('/projects/add') that we could have someone upload the contract address (unique id) and apiurl https://intermezzo.tools/projects/add
// Where would we store that data?

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});