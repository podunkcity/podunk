#!/bin/bash
# REV00: Thu 01 Jun 2023 19:00
# START: Thu 01 Jun 2023 17:00
# FILE: S00-wgetOVA.sh

FILENAME="DOCUDEMO-00.ova"
FILEID="1I6q--JE4AQ44kuOTPydFOKfiYj0-2qyw"
SHA256SUM="d29c355255b14e3832e1ff0b900323f956568dac2ef2d1b6d9b225d2da40f448"
wget -c --load-cookies /tmp/cookies.txt "https://docs.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies /tmp/cookies.txt --keep-session-cookies --no-check-certificate 'https://docs.google.com/uc?export=download&id=$FILEID' -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1\n/p')&id=$FILEID" -O $FILENAME && rm -rf /tmp/cookies.txt
echo $(sha256sum -c <<< "$SHA256SUM $FILENAME") '(SHA256SUM)'

