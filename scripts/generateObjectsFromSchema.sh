#!/bin/bash

# Script to generate objects from the xsd file
# to be executed from root folder of sdk

currdir=`pwd`

dt=`date '+%m/%d/%Y %H:%M:%S'`
echo Starting ${dt}

CDIR=`pwd`
SRCDIR=${CDIR}

HOST=apitest.authorize.net
PROTOCOL=https
LOCALXSD=mappings/AnetApiSchema.xsd

XSD=${PROTOCOL}://${HOST}/xml/v1/schema/AnetApiSchema.xsd

echo Get Latest XSD from path - ${XSD}

wget -O ${LOCALXSD} ${XSD}

if [ $? -eq 0 ]; then
	echo Generating Schema.js from XSD
	java -jar node_modules/jsonix/lib/jsonix-schema-compiler-full.jar -d mappings -p Schema mappings/AnetApiSchema.xsd

	if [ $? -eq 0 ]; then
		echo Creating Schema Classes
		node scripts/generateObjectsFromSchema.js > ${SRCDIR}/lib/apicontracts.js

		if [ $? -ne 0 ]; then
			echo Failed Creating Schema Classes
		fi
	else
		echo Failed Generating Schema.js from XSD
	fi
else
    echo Failed downloading the XSD.
fi

echo Finished ${dt}

