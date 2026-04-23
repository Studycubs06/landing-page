const app = require('./server/index.js');

// This file is the entry point for Hostinger's Node.js Selector (Passenger)
// renamed to .cjs to avoid ES Module conflict from root package.json
module.exports = app;
