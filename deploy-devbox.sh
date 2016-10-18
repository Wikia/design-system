#!/usr/bin/env bash

SRC="docs-dev/*"
DIST="/var/www/design-system"

while getopts ":h:u:" opt; do
	case $opt in
		h)
			HOST=$OPTARG
			;;
		u)
			USERNAME=$OPTARG
			;;
		\?)
			echo "Invalid option: -$OPTARG"
			exit 1
			;;
		:)
			echo "Option -$OPTARG requires an argument."
			exit 1
			;;
	esac
done

# Check if HOST is not empty
if [ -z "$HOST" ]
then
	echo "Please set -h HOST i.e. -h dev-developer"
	exit 1
fi

if [ ! -z "$USERNAME" ]
then
	HOST="$USERNAME@$HOST"
fi

npm run build-devbox
scp -r $SRC $HOST:$DIST
