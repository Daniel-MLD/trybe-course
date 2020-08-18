#!/bin/bash
read -p "Digite um caminho de arquivo ou diretório: " FILEPATH
if [ -f $FILEPATH ]
    then
        echo "O $FILEPATH é um arquivo comum"
    elif [ -d $FILEPATH ]
    then
        echo "O $FILEPATH é um diretório"
    else
        echo "$FILEPATH Não é um arquivo comum"
fi
ls -l $FILEPATH