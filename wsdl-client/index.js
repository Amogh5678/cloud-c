const soap = require('soap'); // ✅ Import the soap module

const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL';

soap.createClient(url, function(err, client) {
    if (err) {
        console.error("Error creating SOAP client:", err);
        return;
    }

    client.CapitalCity({ sCountryISOCode: 'US' }, function(err, result) {
        if (err) {
            console.error("Error calling CapitalCity method:", err);
            return;
        }

        console.log("Capital of India:", result.CapitalCityResult);
    });
});
