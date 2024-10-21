const Dropbox = require('dropbox').Dropbox;
const fetch = require('node-fetch');

const dbx = new Dropbox({ 
  accessToken: process.env.DROPBOX_ACCESS_TOKEN, 
  fetch: fetch 
});

module.exports = dbx;
