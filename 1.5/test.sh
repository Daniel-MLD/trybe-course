#!/bin/bash
echo "olá mundo"
# teste de comentário
read -p 'Qual seu nome? ' NOME
echo 'Meu nome é' $NOME
echo "mgs colocada em uma variável" NOME2
if [ $NOME ]
then
    echo "Certo, vc digitou $NOME"
else
    echo "Nada foi digitado"
fi
ESCREVE=`whoami`
echo $ESCREVE
SAIDA="$NOME é o nome do usuário e $ESCREVE do computador"
if [ $NOME = "Daniel" ]
then
    echo $SAIDA $NOME2
elif [ $NOME = "Dan" ]
then
    echo $SAIDA
else    
    echo "erro!"
fi
