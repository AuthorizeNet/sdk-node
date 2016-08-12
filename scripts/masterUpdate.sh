#!/bin/bash

# master update script to update sdk for new API changes.
# to be executed from root folder of sdk.

currdir=`pwd`

dt=`date '+%m/%d/%Y %H:%M:%S'`
echo Starting ${dt}

CDIR=`pwd`

echo Running generateObjectsFromSchema

bash scripts/generateObjectsFromSchema.sh
ERRORCODE=$?
if [ $ERRORCODE -ne 0 ];then
    echo "########################################################################"
    echo "Encountered error during execution of generateObjectsFromSchema.sh"
    exit $ERRORCODE
fi

echo Running generateControllersFromSchema.sh

bash scripts/generateControllersFromSchema.sh

ERRORCODE=$?
if [ $ERRORCODE -ne 0 ];then
    echo "########################################################################"
    echo "Encountered error during execution of generateControllersFromSchema.sh"
    exit $ERRORCODE
fi

echo Finished ${dt}

