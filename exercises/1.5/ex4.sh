#!/bin/bash

read -p "Entre com o caminho do arquivo: " FILEPATH
if [ -e $FILEPATH ]
    then
        echo "O caminho $FILEPATH está habilitado"
        if [ -w $FILEPATH ]
            then
                echo "Você tem permissão pra editar $FILEPATH"
            else
            echo "Você NÃO foi autorizado a editar $FILEPATH"
        fi
    else
        echo "O caminho $FILEPATH NÃO está habilitado"
fi