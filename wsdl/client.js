// client.js
const soap = require('soap');

const url = 'http://www.dneonline.com/calculator.asmx?WSDL';

soap.createClient(url, (err, client) => {
  if (err) {
    console.error('Error creating SOAP client:', err);
    return;
  }

  const args = { intA: 5, intB: 7 };

  client.Add(args, (err, result) => {
    if (err) {
      console.error('Error calling Add method:', err);
    } else {
      console.log('Add Result:', result);
    }
  });
});
