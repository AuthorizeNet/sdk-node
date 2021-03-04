import Schema from '../mappings/Schema';

var controllerSet = new Set();

for(var i=0;i<Schema.elementInfos.length;i++){
	var obj = Schema.elementInfos[i];
	if(obj['typeInfo'] != null)
	{
		var objName = '';
		if(obj['typeInfo'].match('Request'+'$') == 'Request')
		{
			objName = obj['typeInfo'].replace(/Request$/, '');
			//console.log(objName);
			controllerSet.add(objName.slice(1));
		}

		if(obj['typeInfo'].match('Response'+'$') == 'Response'){
			objName = obj['typeInfo'].replace(/Response$/, '');
			//console.log(objName);
			controllerSet.add(objName.slice(1));
		}
	}
}

Array.from(controllerSet).sort().forEach(function(value) {
	console.log(value);
});

