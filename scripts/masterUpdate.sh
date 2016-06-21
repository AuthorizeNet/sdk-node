#!/bin/bash

# master update script to update sdk for new API changes.
# to be executed from root folder of sdk.

currdir=`pwd`

dt=`date '+%m/%d/%Y %H:%M:%S'`
echo Starting ${dt}

CDIR=`pwd`

echo Running generateObjectsFromSchema

bash scripts/generateObjectsFromSchema.sh

echo Running generateControllersFromSchema.sh

bash scripts/generateControllersFromSchema.sh

echo Finished ${dt}

