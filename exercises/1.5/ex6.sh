#!/bin/bash
echo "Você entrou com $1 como parâmetro"
if [ -f $1 ]
    then
        echo "O $1 é um arquivo comum"
    elif [ -d $1 ]
    then
        echo "O $1 é um diretório"
    else
        echo "$1 Não é um arquivo comum"
fi
ls -l $1