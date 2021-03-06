import { Router } from 'express';
import json2xml from 'json2xml';
import fs from 'fs';
import path from 'path';
import covid19ImpactEstimator from './estimator';

const routes = Router();

routes.post('/', (req, res) => {
  const payload = req.body;
  const data = covid19ImpactEstimator(payload);
  return res.status(200).json(data);
});

routes.post('/json', (req, res) => {
  const payload = req.body;
  const data = covid19ImpactEstimator(payload);
  return res.status(200).json(data);
});

routes.post('/xml', (req, res) => {
  const payload = req.body;
  const data = covid19ImpactEstimator(payload);
  res.set('Content-Type', 'application/xml');
  return res.status(200).send(json2xml(data));
});

routes.get('/logs', (req, res) => {
  try {
    const logs = fs.readFileSync(path.join(__dirname, 'logs.txt'), {
      encoding: 'utf-8'
    });
    res.type('text/plain');
    return res.status(200).send(logs);
  } catch (error) {
    throw new Error('Error reading log file');
  }
});

export default routes;
