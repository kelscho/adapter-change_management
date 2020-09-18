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
};
global.log = new mocked_log();


const ServiceNowAdapter = require(path.join(__dirname, '/main.js'));

function testget(){
    let result = null;
    let error = null;
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
 testadapter.getRecord((result, error) => {
 console.log(`result ${JSON.stringify(result)}`);
 console.log(`error ${JSON.stringify(error)}`);
 });
}
testget();