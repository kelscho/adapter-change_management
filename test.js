// Import built-in Node.js package path.
const path = require('path');

class mocked_log{
    error(msg) {
        console.log(`ERROR:${msg}`);
    };
    debug(msg) {
        console.log(`DEBUG:${msg}`);
    };
     warn(msg){
         console.log(`WARN:${msg}`);
    };
    info(msg){
        console.log(`INFO:${msg}`);
    };
};
global.log = new mocked_log();


const ServiceNowAdapter = require(path.join(__dirname, '/main.js'));

  let id = '1234';
    let options = {
  "url": "https://dev71226.service-now.com/",
  "auth": {
    "username": "admin",
    "password": "Maju20#p"
  },
  "serviceNowTable": "change_request"
 };
 const testadapter = new ServiceNowAdapter(id, options);

function testget(){
    let result = null;
    let error = null;
  
 testadapter.getRecord((result, error) => {
 console.log(`result ${JSON.stringify(result)}`);
 console.log(`error ${JSON.stringify(error)}`);
 });
}

function test_healthcheck() {
 testadapter.healthcheck();   
}

function testpost(){
    let result = null;
    let error = null;
  
 testadapter.postRecord((result, error) => {
 console.log(`result ${JSON.stringify(result)}`);
 console.log(`error ${JSON.stringify(error)}`);
 });
}

testget();
testpost();
test_healthcheck();