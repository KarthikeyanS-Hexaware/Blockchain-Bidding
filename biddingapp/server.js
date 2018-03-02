'use strict';

const express = require('express');
const http = require('http');
const uuid = require('uuid');
const WebSocket = require('ws');
const app = express();
var bodyParser = require('body-parser');
const server = http.createServer(app);
const wss = new WebSocket.Server({ server: server });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('dist'));


app.get('/api/test', (req, res) => {
  res.json({ result: 'OK', message: 'Session updated' });
});

app.post('/api/login', (req, res) => {
  var message={};
  if (req.body.UserName == "ricoh" && req.body.Password == "ricoh") {
    message = {
      FirstName: "ricoh",
      LastName: "ricoh",
      Role: "ricoh",
    }
  }
  else if (req.body.UserName == "bank" && req.body.Password == "bank") {
    message = {
      FirstName: "bank",
      LastName: "bank",
      Role: "bank",
    }
  }
  else if (req.body.UserName == "customer" && req.body.Password == "customer") {
    message = {
      FirstName: "customer",
      LastName: "customer",
      Role: "customer",
    }
  }
  res.json(message);  
});

app.post('/api/search', (req, res) => {
  var message={};
  if (req.body.Customername == "john") {
    message = [{
    EventID: "111",
    Customername: "John",
    PONumber: "123",
    Itemcode: "9784",
    Itemdesc: "Printer",
    Quantity: "50",
    Amount: "6000",
    PODate: "12-02-2018",
    RejectDate: "18-02-2018",
    Status: "active",
    Role: "ricoh",
    }]
  }
  else if (req.body.Customername == "june") {
    message = [{
    EventID: "222",
    Customername: "June",
    PONumber: "123",
    Itemcode: "9784",
    Itemdesc: "Printer",
    Quantity: "50",
    Amount: "6000",
    PODate: "12-02-2018",
    RejectDate: "18-02-2018",
    Status: "active",
    Role: "Bank",
    },
    {
      EventID: "333",
      Customername: "June",
      PONumber: "1234",
      Itemcode: "97845",
      Itemdesc: "Printer1",
      Quantity: "51",
      Amount: "6000",
      PODate: "11-02-2018",
      RejectDate: "20-02-2018",
      Status: "Pending",
      Role: "Bank",
      }]
  }
  else if (req.body.Customername == "emily") {
    message = [{
    EventID: "333",
    Customername: "Emily",
    PONumber: "123",
    Itemcode: "9784",
    Itemdesc: "Printer",
    Quantity: "50",
    Amount: "6000",
    PODate: "12-02-2018",
    RejectDate: "18-02-2018",
    Status: "active",
    Role: "customer",
    }]
  }
  res.json(message); 
});


app.get('*', function (req, res) {
  res.redirect('./login')
});

/*app.post('/api/login', (req, res) => {

  const id = uuid.v4();

  console.log(`Updating session for user ${id}`);
  req.session.userId = id;
  res.send({ result: 'OK', message: 'Session updated' });
});


wss.on('connection', (ws, req) => {
  ws.on('message', (message) => {
     var data = JSON.parse(user);
     if (data.Key == "login") {
       LoginDetails(ws,data);
     } else if(data.Key == "search"){
       searchData(ws,data);
     }
  });
});


function LoginDetails(ws, user) {
  console.log(user);
  if (user.UserName == "ricoh" && user.Password == "ricoh") {
    message["Output"] = {
      FirstName: "ricoh",
      LastName: "ricoh",
      Role: "ricoh",
    }
  }
  else if (user.UserName == "bank" && user.Password == "bank") {
    message["Output"] = {
      FirstName: "bank",
      LastName: "bank",
      Role: "bank",
    }
  }
  else if (user.UserName == "customer" && user.Password == "customer") {
    message["Output"] = {
      FirstName: "customer",
      LastName: "customer",
      Role: "customer",
    }
  }
  console.log(JSON.stringify(user));
  ws.send(JSON.stringify(user));
}

function searchData(ws,message) {
  var searchList= new Array();
  
  searchList.push({
  Customername: "John",
  PONumber: "123",
  });
  searchList.push({
  Customername: "Ken",
  PONumber: "345",
  });
  searchList.push({
  Customername: "Emily",
  PONumber: "456",
  });
  message["Output"] =searchList;
  ws.send(JSON.stringify(message));
}
*/

server.listen(4200, () => console.log('Listening on http://localhost:4200'));
