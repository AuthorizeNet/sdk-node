var schema = require('../mappings/Schema.js').Schema;

var newline = '\n';
var tabcount = 1;
var tab = '\t';

console.log('\'use strict\';' + newline);
console.log('var utils = require(\'./utils.js\');' + newline);
console.log('const Logger = require(\'./logger.js\');' + newline);


var elementInfo = {};
var baseInfo = {};

var classes = [];
var level1InnerClasses = [];
var level2InnerClasses = [];
var level1ExtendedClasses = [];
var level2ExtendedClasses = [];
var enums = [];

var i = 0;
for (i = 0; i < schema.elementInfos.length; i++) {
	var info = schema.elementInfos[i];
	elementInfo[info['typeInfo'].slice(1)] = info['elementName'];
}

for (i = 0; i < schema.typeInfos.length; i++) {
	var info = schema.typeInfos[i];
	if (info['baseTypeInfo'] != null)
		baseInfo[info['localName']] = info['baseTypeInfo'].slice(1);
	else
		baseInfo[info['localName']] = null;
}

for (i = 0; i < schema.typeInfos.length; i++) {
	var obj = schema.typeInfos[i];
	tabcount = 1;

	var classDefinition = new String();

	if ((obj['type'] != null) && obj['type'] == 'enumInfo') {
		classDefinition = 'const ' + obj['localName'] + ' = { ' + newline;
		for (var k = 0; k < obj['values'].length; k++) {
			var val = obj['values'][k];
			if (k != 0)
				classDefinition += ',' + newline;
			classDefinition += tab.repeat(tabcount) + val.toUpperCase() + ' : \'' + val + '\'';
		}
		classDefinition += newline + '};' + newline;
		classDefinition += 'module.exports.' + obj['localName'] + ' = ' + obj['localName'] + ';' + newline;

		enums.push(classDefinition);
		continue;
	}

	if (obj['localName'].indexOf('.') > -1)
		classDefinition = obj['localName'] + ' = ' + 'class';
	else
		classDefinition = 'class ' + obj['localName'];

	if (obj['baseTypeInfo'] != null)
		classDefinition += ' extends ' + obj['baseTypeInfo'].slice(1);

	classDefinition += ' {';

	classDefinition += newline;

	if ((obj['localName'].match('Request' + '$') == 'Request') || (obj['localName'].match('Response' + '$') == 'Response')) {
		if (elementInfo[obj['localName']] != null) {
			var getJSONfunc = tab.repeat(tabcount) + 'getJSON() { ' + newline;
			tabcount++;
			getJSONfunc += tab.repeat(tabcount) + 'var logger = Logger.getLogger(\'' + obj['localName'] + '\');' + newline;
			getJSONfunc += tab.repeat(tabcount) + 'logger.debug(\'Enter ' + obj['localName'] + ' getJSON\');' + newline;
			getJSONfunc += tab.repeat(tabcount) + 'utils.delete_null_properties(this, true);' + newline;
			getJSONfunc += tab.repeat(tabcount) + 'var obj = { \'' + elementInfo[obj['localName']] + '\' : this };' + newline;
			getJSONfunc += tab.repeat(tabcount) + 'logger.debug(\'Exit ' + obj['localName'] + ' getJSON\');' + newline;
			getJSONfunc += tab.repeat(tabcount) + 'return obj;' + newline;
			tabcount--;
			getJSONfunc += tab.repeat(tabcount) + '}' + newline;
			classDefinition += getJSONfunc + newline;
		}
	}

	if (obj.propertyInfos != null) {
		/*
		var defaultCtor = new String('constructor(');
		for(var j=0;j<obj.propertyInfos.length;++j) {
			var prop = obj.propertyInfos[j];
			var propname = 'p_' + prop['name'];

			if(j != 0)
				defaultCtor += ',';

			defaultCtor += propname;
		}

		defaultCtor += ') { \n';

		for(var j=0;j<obj.propertyInfos.length;++j) {
			var prop = obj.propertyInfos[j];
			var propname = 'p_' + prop['name'];

			defaultCtor += 'if(' + propname + ' != null) { this.' + prop['name'] + ' = ' + propname + ';}\n';
		}

		defaultCtor += '}\n';

		classDefinition += defaultCtor;
		*/

		var copyCtor = new String(tab.repeat(tabcount) + 'constructor(obj) {' + newline);
		tabcount++;
		copyCtor += tab.repeat(tabcount) + 'var logger = Logger.getLogger(\'' + obj['localName'] + '\');' + newline;
		copyCtor += tab.repeat(tabcount) + 'logger.debug(\'Enter ' + obj['localName'] + ' constructor\');' + newline;
		copyCtor += tab.repeat(tabcount) + 'if(arguments.length == 1) {' + newline;
		tabcount++;

		if (obj['baseTypeInfo'] != null) {
			copyCtor += new String(tab.repeat(tabcount) + 'super(obj);' + newline);
		}

		for (var j = 0; j < obj.propertyInfos.length; ++j) {
			var prop = obj.propertyInfos[j];
			var name = (prop['elementName'] != null ? prop['elementName'] : prop['name']);
			var propname = 'obj.' + name;

			if ((prop['collection'] != null) && (prop['collection'] == true)) {
				if (obj['localName'].startsWith('ArrayOf') || obj.propertyInfos.length == 1)
					propname = 'obj';
				var listname = name + 'List';

				copyCtor += tab.repeat(tabcount) + 'if((' + propname + ' != undefined) && (' + propname + ' != null)) {' + newline;
				tabcount++;

				copyCtor += tab.repeat(tabcount) + 'var ' + listname + ' = [];' + newline;
				copyCtor += tab.repeat(tabcount) + propname + '.forEach(function(item) {' + listname + '.push(new ';
				if (prop['typeInfo'] != null) {
					if (prop['typeInfo'][0] == '.') {
						copyCtor += prop['typeInfo'].slice(1);
					}
				}
				else {
					copyCtor += 'String';
				}
				copyCtor += '(item));}); ' + newline;
				copyCtor += tab.repeat(tabcount) + 'this.set' + name.charAt(0).toUpperCase() + name.slice(1) + '(' + listname + ');';
				copyCtor += newline;
				tabcount--;
				copyCtor += tab.repeat(tabcount) + '}' + newline;
			}
			else if ((prop['typeInfo'] != null) && (prop['typeInfo'][0] == '.')) {
				copyCtor += tab.repeat(tabcount) + 'if((\'' + name + '\' in obj) && (' + propname + ' != null)) { this.set' + name.charAt(0).toUpperCase() + name.slice(1) + '(';
				copyCtor += 'new ' + prop['typeInfo'].slice(1) + '(' + propname + ')';
				copyCtor += '); }' + newline;
			}
			else {
				copyCtor += tab.repeat(tabcount) + 'if((\'' + name + '\' in obj) && (' + propname + ' != null)) { this.set' + name.charAt(0).toUpperCase() + name.slice(1) + '(';
				copyCtor += propname;
				copyCtor += '); }' + newline;
			}
		}
		tabcount--;

		copyCtor += tab.repeat(tabcount) + '}' + newline;
		copyCtor += tab.repeat(tabcount) + 'else {' + newline;

		tabcount++;

		if (obj['baseTypeInfo'] != null) {
			copyCtor += tab.repeat(tabcount) + 'super();' + newline;
		}

		for (var j = 0; j < obj.propertyInfos.length; ++j) {
			var prop = obj.propertyInfos[j];
			var name = (prop['elementName'] != null ? prop['elementName'] : prop['name']);
			copyCtor += tab.repeat(tabcount) + 'this.set' + name.charAt(0).toUpperCase() + name.slice(1) + '(null);' + newline;
		}

		tabcount--;

		copyCtor += tab.repeat(tabcount) + '}' + newline;

		copyCtor += tab.repeat(tabcount) + 'logger.debug(\'Exit ' + obj['localName'] + ' constructor\');' + newline;

		tabcount--;

		copyCtor += tab.repeat(tabcount) + '}' + newline;

		classDefinition += copyCtor;

		for (var j = 0; j < obj.propertyInfos.length; ++j) {
			var prop = obj.propertyInfos[j];
			var name = (prop['elementName'] != null ? prop['elementName'] : prop['name']);
			var propname = 'p_' + name;

			var setter = new String(tab.repeat(tabcount) + 'set');
			setter += name.charAt(0).toUpperCase() + name.slice(1);
			setter += '(' + propname + ') { ';
			setter += 'this.' + name + ' = ' + propname + ';';
			setter += ' }';

			var getter = new String(tab.repeat(tabcount) + 'get');
			getter += name.charAt(0).toUpperCase() + name.slice(1);
			getter += '() { if(\'' + name + '\' in this) {';
			getter += 'return this.' + name + ';}';
			getter += ' }';

			classDefinition += newline + setter;
			classDefinition += newline + getter;
		}
	}
	else {
		if (obj['baseTypeInfo'] != null) {
			var copyCtor = new String(tab.repeat(tabcount) + 'constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }' + newline);

			classDefinition += copyCtor;
		}
	}

	classDefinition += newline + '}';
	if (obj['localName'].indexOf('.') > -1)
		classDefinition += ';';

	classDefinition += newline + newline;

	classDefinition += 'module.exports.' + obj['localName'] + ' = ' + obj['localName'] + ';' + newline;

	//console.log(classDefinition);
	if (obj['baseTypeInfo'] != null) {
		if (baseInfo[obj['baseTypeInfo'].slice(1)] != null)
			level2ExtendedClasses.push(classDefinition);
		else
			level1ExtendedClasses.push(classDefinition);
	}
	else if ((obj['localName'].split('.').length - 1) == 1) {
		//console.log('level 1 : ' + obj['localName']);
		level1InnerClasses.push(classDefinition);
	}
	else if ((obj['localName'].split('.').length - 1) == 2) {
		//console.log('level 2 : ' + obj['localName']);
		level2InnerClasses.push(classDefinition);
	}
	else
		classes.push(classDefinition);
}

classes.sort().forEach(function (item) {
	console.log(item);
	//console.log('classes');
});

level1InnerClasses.sort().forEach(function (item) {
	console.log(item);
	//console.log('level1InnerClasses');
});

level2InnerClasses.sort().forEach(function (item) {
	console.log(item);
	// console.log('level2InnerClasses');
});

level1ExtendedClasses.sort().forEach(function (item) {
	console.log(item);
	// console.log('level1ExtendedClasses');
});

level2ExtendedClasses.sort().forEach(function (item) {
	console.log(item);
	// console.log('level2ExtendedClasses');
});

enums.sort().forEach(function (item) {
	console.log(item);
	// console.log('level2ExtendedClasses');
});
