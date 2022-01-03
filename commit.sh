#!/bin/zsh

if [ $# -lt 1 ] || [ $# -gt 1 ] 
	then
	echo "Usage: ./commit.sh 'commit message'"
else
	git add .
	git commit -m $1
	echo "commited with success!"
fi
