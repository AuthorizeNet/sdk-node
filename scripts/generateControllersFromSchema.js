var schema = require('../mappings/Schema.js').Schema

controllerSet = new Set();

for(var i=0;i<schema.typeInfos.length;i++){
    var obj = schema.typeInfos[i];
    if(obj['typeName'] == null)
    {
    	var objName = "";
    	if(obj['localName'].match('Request'+"$") == 'Request')
    	{
    		objName = obj['localName'].replace(/Request$/, "");
    		//console.log(objName);
    		controllerSet.add(objName);
    	}
    		
    	if(obj['localName'].match('Response'+"$") == 'Response'){
    		objName = obj['localName'].replace(/Response$/, "");
    		//console.log(objName);
    		controllerSet.add(objName);
    	}
	}
}

controllerSet.forEach(function(value) {
  console.log(value);
});

