#!/bin/bash

# Script to generate controllers from the generated bindings file, and uses template
currdir=`pwd`

dt=`date '+%m/%d/%Y %H:%M:%S'`
echo Starting ${dt}

CDIR=`pwd`
SRCDIR=${CDIR}
CONTROLLERFOLDER=controllertemp
SRCLOG=${CDIR}/log/Objects.log

mkdir -p ${SRCDIR}/${CONTROLLERFOLDER}

mkdir -p ${CDIR}/log

node scripts/generateControllersFromSchema.js > "${SRCLOG}"

echo Creating Controllers
for cntrls in `cat "${SRCLOG}"`;
do
    echo Generating Code for ${cntrls}Controller.js
    cp ${SRCDIR}/scripts/ControllerTemplate.jst ${SRCDIR}/${CONTROLLERFOLDER}/${cntrls}Controller.js
    perl -pi -w -e "s/APICONTROLLERNAME/$cntrls/g;" ${SRCDIR}/${CONTROLLERFOLDER}/${cntrls}Controller.js
done

cat ${SRCDIR}/scripts/headertemplate.jst ${SRCDIR}/${CONTROLLERFOLDER}/*.js  > ${SRCDIR}/lib/apicontrollers.js

echo Controllers generated in module: ${SRCDIR}/lib/apicontrollers.js

echo Removing controllertemp folder
rm -rf ${SRCDIR}/${CONTROLLERFOLDER}

echo Removing log folder
rm -rf ${CDIR}/log

echo Finished ${dt}

