// Simple script to take a JS file and export a JSON file
// so that VSCE can package it up.

const fs = require('fs');
const centsJson = 'cents.json';

// Delete previous if exists
if (fs.existsSync(centsJson)) {
  console.log(`Deleting old ${centsJson}...`);
  fs.unlinkSync(centsJson);
}

const theme = require('./cents.js');
fs.writeFileSync(centsJson, JSON.stringify(theme));
