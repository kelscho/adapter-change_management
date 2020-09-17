// Import built-in Node.js package path.
const path = require('path');


const ServiceNowAdapter = require(path.join(__dirname, '/main.js'));

function testHeathCheck(){
    let result = null;
    let error = null;
    let id = '1234';
    let options = {
  "url": "https://dev71226.service-now.com/",
  "auth": {
    "username": "admin",
    "password": "dMaju20#p"
  },
  "serviceNowTable": "change_request"
 };
 const testadapter = new ServiceNowAdapter(id, options);
 testadapter.healthcheck((result, error) => {
 console.log(`result ${JSON.stringify(result)}`);
 console.log(`error ${JSON.stringify(error)}`);
 });
}
testHeathCheck();