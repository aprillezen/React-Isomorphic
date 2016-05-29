import http from 'http'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './app/routes'
import apis from './api'
import path from 'path'

var app = express();

var PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/users', apis);

app.set('PORT', PORT);
app.get('*', (req, res)=>{
	match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // hey we made it!
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
})



function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>Akadem</title>
    <link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css>
    <link rel=stylesheet href="/index.css">
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
}


var server = http.createServer(app);
server.listen(PORT, function(){
	console.log('Server started....');
});



