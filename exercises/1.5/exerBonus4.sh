#!/bin/bash
NAMEDIR=$1
NAMEEXT=$2

DAY=$(date +%F)

if [ $1 ] && [ $2 ]
then
    cd $NAMEDIR

    for FILE in `ls *.$NAMEEXT`
    do
        echo "Renomeando $FILE para ${DAY}-${FILE}"
        mv $FILE ${DAY}-${FILE}
    done
else
    echo "Argumentos inválidos ou vazios"
fi