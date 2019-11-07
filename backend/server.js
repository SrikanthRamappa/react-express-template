//import express from 'express';
require('dotenv').config({path:'.env'});
const express = require('express');

const app = express();

function provideAnswer(req) {

  let question = req.params.question;
  if (question === '1') {
    return {answer:42}
  }
}

app.get('/react-express-template/master/api/:question', (req, res) => res.send(provideAnswer(req)));

app.listen(process.env.PORT || 12059);
console.log("Backend listening at port : 12059");
