#!/bin/bash
TAREFAS="viajar votar beber sair trabalhar"

read -p "Digite sua idade: " IDADE
if [ $IDADE -lt 18 ]
then
    echo "Você é menor de idade"
else
    for ITEM in $TAREFAS
    do
        echo $ITEM
    done
fi
