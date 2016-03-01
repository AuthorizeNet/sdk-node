#!/bin/bash

# Script to generate controllers from the generated bindings file, and uses template
currdir=`pwd`

dt=`date '+%m/%d/%Y %H:%M:%S'`
echo Starting ${dt}

CDIR=`pwd`
SRCDIR=${CDIR}
CONTROLLERFOLDER=controllertemp
SRCLOG=${CDIR}/log/Objects.log

node scripts/generateControllersFromSchema.js > "${SRCLOG}"

echo Creating Controllers
for cntrls in `cat "${SRCLOG}"`;
do
    echo Generating Code for ${cntrls}Controller.js
    cp ${SRCDIR}/scripts/ControllerTemplate.jst ${SRCDIR}/${CONTROLLERFOLDER}/${cntrls}Controller.js
    perl -pi -w -e "s/APICONTROLLERNAME/$cntrls/g;" ${SRCDIR}/${CONTROLLERFOLDER}/${cntrls}Controller.js
done

cat ${SRCDIR}/scripts/headertemplate.jst ${SRCDIR}/${CONTROLLERFOLDER}/*.js  > ${SRCDIR}/authorizenet/apicontrollers.js

echo Controllers generated in module: ${SRCDIR}/authorizenet/apicontrollers.js

echo Finished ${dt}

