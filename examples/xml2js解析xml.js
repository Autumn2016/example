var parseString = require('xml2js').parseString;
var xml = "<note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don't forget me this weekend!</body></note>"
parseString(xml, function (err, json) {
    console.dir(json);
    console.log(json);
});