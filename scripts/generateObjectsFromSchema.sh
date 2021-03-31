#!/bin/bash

# Script to generate objects from the xsd file
# to be executed from root folder of sdk

currdir=`pwd`

dt=`date '+%m/%d/%Y %H:%M:%S'`
echo Starting ${dt}

CDIR=`pwd`
SRCDIR=${CDIR}

# HOST=apitest.authorize.net
# PROTOCOL=https
# LOCALXSD=mappings/AnetApiSchema.xsd

# XSD=${PROTOCOL}://${HOST}/xml/v1/schema/AnetApiSchema.xsd

# echo Get Latest XSD from path - ${XSD}

# wget -O ${LOCALXSD} ${XSD}

# ERRORCODE=$?
ERRORCODE=0

if [ $ERRORCODE -eq 0 ]; then
	echo Generating Schema.js from XSD
	java -jar node_modules/jsonix/lib/jsonix-schema-compiler-full.jar -d mappings -p Schema mappings/AnetApiSchema.xsd

	ERRORCODE=$?
	if [ $ERRORCODE -eq 0 ]; then
		echo Creating Schema Classes
		node scripts/generateObjectsFromSchema.js > ${SRCDIR}/lib/apicontracts.js

		ERRORCODE=$?
		if [ $ERRORCODE -ne 0 ]; then
			echo Failed Creating Schema Classes
			exit $ERRORCODE
		fi
	else
		echo Failed Generating Schema.js from XSD
		exit $ERRORCODE
	fi
else
	echo Failed downloading the XSD.
 	exit $ERRORCODE
fi

echo Finished ${dt}

