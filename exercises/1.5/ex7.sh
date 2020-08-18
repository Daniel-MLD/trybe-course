#!/bin/bash
echo "Você entrou com $1 como parâmetro"
if [ -d $1 ]
    then
        QTD=`ls -l $1 | wc -l`
        echo "O $1 é um diretório e possui $QTD arquivos"
    else
        echo "O parâmetro $1 não é um diretório"
fi