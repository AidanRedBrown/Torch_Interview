import * as weather from './api/weather/index.js';
import express from 'express';
import path from 'path';

export default (app) => {
  // Weather API router
  app.use('/api/weather', weather.router); 


  app.get('/weather/:location', (req, res) => {
    res.sendFile(path.resolve('server/public/weather.html'));
  });

  // SPA fallback
  app.use('*', (req, res) => {
    res.sendFile(path.resolve('server/public/index.html'));
  });
};