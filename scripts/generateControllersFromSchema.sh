#!/bin/bash

# Script to generate controllers from the generated bindings file, and uses template
currdir=`pwd`

dt=`date '+%m/%d/%Y %H:%M:%S'`
echo Starting ${dt}

CDIR=`pwd`
SRCDIR=${CDIR}
TEMPCONTROLLERFOLDER=controllertemp
SRCLOG=${CDIR}/log/Objects.log
NEWCONTROLLERFILE=apicontrollers.new.js

mkdir -p ${CDIR}/log

mkdir -p ${SRCDIR}/${TEMPCONTROLLERFOLDER}

node scripts/generateControllersFromSchema.js > "${SRCLOG}"

echo Creating Controllers
for cntrls in `cat "${SRCLOG}"`;
do
	echo Generating Code for ${cntrls}Controller.js
	cp ${SRCDIR}/scripts/ControllerTemplate.jst ${SRCDIR}/${TEMPCONTROLLERFOLDER}/${cntrls}Controller.js
	perl -pi -w -e "s/APICONTROLLERNAME/$cntrls/g;" ${SRCDIR}/${TEMPCONTROLLERFOLDER}/${cntrls}Controller.js
done

cat ${SRCDIR}/scripts/headertemplate.jst ${SRCDIR}/${TEMPCONTROLLERFOLDER}/*.js  > ${SRCDIR}/lib/${NEWCONTROLLERFILE}

rm -rf ${CDIR}/log

rm -rf ${SRCDIR}/${TEMPCONTROLLERFOLDER}

echo Controllers generated in module: ${SRCDIR}/lib/${NEWCONTROLLERFILE}
echo Check difference between ${NEWCONTROLLERFILE} and apicontrollers.js and apply to apicontrollers.js

echo Finished ${dt}

